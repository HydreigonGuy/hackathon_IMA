
var image_style = 'position: absolute; right: 20px; top: 350px; width: 40%;';

function predict(id)
{
    fetch("/predict", {
        method: "POST",
        body:String(id)
      }).then(res => {
          return(res.json());
      }).then(res => {
          document.getElementById("board").innerHTML = '<img style="' + image_style + '" src="' + res.img + '">';
          console.log(res);
      });
}

function reset()
{
    document.getElementById("board").innerHTML = "";
}
