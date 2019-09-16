declare var L;
import { Map } from "leaflet";

const map: Map = L.map('map', {
  zoomControl: false
});
map.setView([48.864716, 2.349014], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.zoom({
  position: 'bottomright'
}).addTo(map);
