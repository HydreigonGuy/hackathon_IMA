
function predict()
{
    fetch("/predict", {
        method: "POST"
      }).then(res => {
          return(res.json());
      }).then(res => {
          console.log(res);
      });
}
