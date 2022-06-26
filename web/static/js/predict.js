
var image_style = 'position: absolute; right: 20px; top: 350px; width: 40%;';

const r_crds = [
    ["Île-de-France", [48.8499198, 2.6370411]],
    ["Auvergne-Rhône-Alpes", [45.1695797, 5.4502821]],
    ["Bourgogne-Franche-Comté", [47.280513, 4.999437]],
    ["Bretagne", [48.202047, -2.932644]],
    ["Centre-Val de Loire", [47.499998, 1.749997]],
    ["Corse", [42.039604, 9.012893]],
    ["Grand Est", [48.580002, 7.750000]],
    ["Hauts-de-France", [49.847503, 2.763062]],
    ["Normandie", [48.879870, 0.171253]],
    ["Nouvelle-Aquitaine", [44.7002222, -0.2995785]],
    ["Occitanie", [43.545911, 1.478862]],
    ["Pays de la Loire", [47.7632836, -0.3299687]],
    ["Provence-Alpes-Côte d'Azur", [43.9351691, 6.0679194]]
]

function predict(id)
{
    //if (!document.getElementById("date").value) {
    //    document.getElementById("date").style.borderColor = "red";
    //    return;
    //}
    ////document.getElementById("date").style.borderColor = "black";
    //body = {
    //    //'date':document.getElementById("date").value,
    //    'id':id
    //};
    //console.log(body);
    //fetch("/predict", {
    //    method: "POST",
    //    body:JSON.stringify(body)
    //  }).then(res => {
    //      return(res.json());
    //  }).then(res => {
    //      create_map();
    //      //document.getElementById("board").innerHTML = res.img;
    //  });
    switch (id) {
        case 1:
            window.location.href = "/static/maps/27-06-2022-cli.html";
            break;
        case 2:
            window.location.href = "/static/maps/27-06-2022-eau.html";
            break;
        case 3:
            window.location.href = "/static/maps/27-06-2022-gla.html";
            break;
        case 4:
            window.location.href = "/static/maps/27-06-2022-all.html";
            break;
        default:
            window.location.href = "/";
    }
}

function reset()
{
    window.location.href = "/";
    //document.getElementById("board").innerHTML = "";
    //document.getElementById("date").style.borderColor = "black";
}

function create_map()
{
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'OpenStreetMap'
    }).addTo(map);
}

function zoom()
{
    let reg = document.getElementById("zoom-reg").selectedIndex
    var latlng = L.latLng(r_crds[reg][1][0], r_crds[reg][1][1]);

    map.setZoomAround(latlng, 10);
    map.setView(latlng);
}

window.onload = function () {
    if (!document.getElementById("zoom"))
        return;
    let select = '<select name="reg" id="zoom-reg">';
    for (let i = 0; r_crds[i]; i++)
        select += '<option value="' + i + '">' + r_crds[i][0] + '</option>'
    select += '</select><button onclick="zoom()">zoom</button>';
    document.getElementById("zoom").innerHTML = select;
};
