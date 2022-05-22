var map = L.map('map').setView([47.310, 26.479], 8);
L.tileLayer('https://api.mapbox.com/styles/v1/lucasainenco/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'cl3evd2lo004414rz7mmgpd5g',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNhaW5lbmNvIiwiYSI6ImNsM2V2YXJ2czA0bDYzam4wMXYycDU0eG0ifQ.p7mkAeKWRHsi3q6pLdMhIQ'
}).addTo(map);
var Botosani = L.marker([47.744,26.676]).addTo(map);
var Cernauti = L.marker([48.306,25.945]).addTo(map);
var Viena = L.marker([48.201,16.391]).addTo(map);

Botosani.bindPopup("nigga").openPopup();
