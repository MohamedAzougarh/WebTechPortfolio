// Coördinaten van mijn gemeente
var map = L.map('map').setView([51.2194, 4.4025], 13);

// Tile layer toevoegen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker toevoegen
L.marker([51.2194, 4.4025]).addTo(map)
  .bindPopup('Antwerpen')
  .openPopup();
