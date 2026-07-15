const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom:19,

    attribution:'© OpenStreetMap contributors'

}).addTo(map);

let marker;

map.on('click', function(e){

    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);

    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lng;

    if(marker){

        map.removeLayer(marker);

    }

    marker = L.marker([lat,lng]).addTo(map);

});

const button = document.getElementById("tripButton");

button.addEventListener("click", function(){

    window.location.href = "itinerary.html";

});