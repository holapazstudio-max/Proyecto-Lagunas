// 1. Iniciamos el mapa centrado en Resistencia
var map = L.map('mapa-lagunas').setView([-27.4511, -58.9865], 13);

// 2. Traemos el diseño del mapa (estilo base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// 3. Ponemos un marcador de prueba en la Laguna Francia
var marker = L.marker([-27.4338, -58.9719]).addTo(map);
marker.bindPopup("<b>Laguna Francia</b><br>Recitales al pasto y colores.").openPopup();