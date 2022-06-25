
var image_style = 'position: absolute; right: 20px; top: 350px; width: 40%;';

function predict(id)
{
    body = {
        'date':document.getElementById("date").value,
        'id':id
    };
    console.log(body);
    fetch("/predict", {
        method: "POST",
        body:JSON.stringify(body)
      }).then(res => {
          return(res.json());
      }).then(res => {
          document.getElementById("board").innerHTML = '<img style="' + image_style + '" src="' + res.img + '">';
      });
}

function reset()
{
    document.getElementById("board").innerHTML = "";
}

function create_map()
{
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'OpenStreetMap'
    }).addTo(map);
}

