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

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`)
    .then(response => response.json())
    .then(data => {

        const address = data.address;

        const state =
            address.state ||
            address.province ||
            address.region ||
            "";

        const country =
            address.country ||
            "";

        document.getElementById("locationDisplay").textContent =
            `${state}, ${country}`;

    })
    .catch(error => {

        console.error(error);

        document.getElementById("locationDisplay").textContent =
            "Unable to determine location.";

    });

});

const button = document.getElementById("tripButton");

button.addEventListener("click", function(){

    window.location.href = "itinerary.html";

});