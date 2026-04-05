import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// RTO office locations data
const rtoLocations = [
  { name: 'Chennai North (TN-01)', lat: 13.0827, lng: 80.2707 },
  { name: 'Chennai Central (TN-02)', lat: 13.0606, lng: 80.2596 },
  { name: 'Chennai South (TN-03)', lat: 12.9716, lng: 80.2410 },
  { name: 'Chennai West (TN-04)', lat: 13.0820, lng: 80.2281 },
  { name: 'Chengalpattu (TN-19)', lat: 12.6921, lng: 79.9780 },
  { name: 'Kanchipuram (TN-21)', lat: 12.8342, lng: 79.7036 },
  { name: 'Tiruvallur (TN-20)', lat: 13.1439, lng: 79.9081 },
  { name: 'Vellore (TN-23)', lat: 12.9165, lng: 79.1325 },
  { name: 'Coimbatore South (TN-37)', lat: 11.0168, lng: 76.9558 },
  { name: 'Coimbatore North (TN-38)', lat: 11.0598, lng: 76.9905 },
  { name: 'Salem (TN-30)', lat: 11.6643, lng: 78.1460 },
  { name: 'Erode (TN-33)', lat: 11.3410, lng: 77.7172 },
  { name: 'Madurai South (TN-58)', lat: 9.9252, lng: 78.1198 },
  { name: 'Madurai North (TN-59)', lat: 9.9300, lng: 78.1420 },
  { name: 'Tiruchirappalli (TN-45)', lat: 10.7905, lng: 78.7047 },
  { name: 'Karur (TN-47)', lat: 10.9581, lng: 78.0805 },
  { name: 'Dindigul (TN-57)', lat: 10.3673, lng: 77.9803 },
  { name: 'Thanjavur (TN-49)', lat: 10.7867, lng: 79.1378 },
  { name: 'Cuddalore (TN-31)', lat: 11.7480, lng: 79.7681 },
  { name: 'Pudukkottai (TN-55)', lat: 10.3797, lng: 78.8200 },
  { name: 'Sivaganga (TN-63)', lat: 9.8437, lng: 78.4834 },
  { name: 'Virudhunagar (TN-67)', lat: 9.5877, lng: 77.9579 },
  { name: 'Tirunelveli (TN-72)', lat: 8.7139, lng: 77.7567 },
  { name: 'Thoothukudi (TN-69)', lat: 8.7642, lng: 78.1348 },
  { name: 'Kanyakumari (TN-74)', lat: 8.0883, lng: 77.5385 },
  { name: 'Tiruvannamalai (TN-25)', lat: 12.2253, lng: 79.0747 },
  { name: 'Namakkal (TN-28)', lat: 11.2186, lng: 78.1673 },
  { name: 'Krishnagiri (TN-24)', lat: 12.5190, lng: 78.2131 },
  { name: 'Dharmapuri (TN-29)', lat: 12.1280, lng: 78.1577 },
  { name: 'Tirupur North (TN-39)', lat: 11.1085, lng: 77.3411 },
  { name: 'Tirupur South (TN-42)', lat: 11.1075, lng: 77.3398 },
  { name: 'Nagercoil (TN-75)', lat: 8.1780, lng: 77.4306 },
  { name: 'Nagapattinam (TN-51)', lat: 10.7672, lng: 79.8438 },
  { name: 'Vaniyambadi (TN-83)', lat: 12.6835, lng: 78.6171 },
  { name: 'Perambalur (TN-46)', lat: 11.2353, lng: 78.8689 },
  { name: 'Tenkasi (TN-76)', lat: 8.9604, lng: 77.3172 },
  { name: 'Thiruvaiyaru (TN-82)', lat: 10.8800, lng: 79.1050 },
  { name: 'Villupuram (TN-32)', lat: 11.9401, lng: 79.4876 },
  { name: 'Karaikudi (TN-63)', lat: 10.0730, lng: 78.7829 }
];

const MapPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1 style={{ textAlign: 'center', padding: '10px 0' }}>Tamil Nadu RTO Offices Map</h1>
      <MapContainer 
        center={[11.1271, 78.6569]} // Center coordinates for Tamil Nadu
        zoom={7} // Adjust zoom level
        style={{ height: '90vh', width: '100%' }}
      >
        {/* Tile layer for map rendering */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for each RTO office */}
        {rtoLocations.map((rto, index) => (
          <Marker key={index} position={[rto.lat, rto.lng]}>
            <Popup>
              <strong>{rto.name}</strong><br />
              Latitude: {rto.lat}, Longitude: {rto.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
