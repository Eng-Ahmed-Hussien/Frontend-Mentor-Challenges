import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ country }) => {
  useEffect(() => {
    if (!country.latlng) return;
    const map = L.map('map').setView(country.latlng, 1.5);
    const apiKey = '3d00aaca7f36466faeaf0f124a253778';
    L.tileLayer(`https://maps.geoapify.com/v1/tile/toner-grey/{z}/{x}/{y}.png?apiKey=${apiKey}`, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(country.latlng)
      .addTo(map)
      .bindPopup(country.name)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [country]);

  return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default MapComponent;
