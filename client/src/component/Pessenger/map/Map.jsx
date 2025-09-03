import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const vehicleIcons = {
  bus: new L.Icon({
    iconUrl: "/icons/marker/bus.png", 
    iconSize: [50, 50],
    shadowUrl: "/icons/marker/shadow.png"
  }),
  autoLG: new L.Icon({
    iconUrl: "/icons/marker/auto-lg.png",
    iconSize: [50, 50],
    shadowUrl: "/icons/marker/shadow.png"
  }),
  autoSM: new L.Icon({
    iconUrl: "/icons/marker/auto-sm.png",
    iconSize: [50, 50],
    shadowUrl: "/icons/marker/shadow.png"
  }),
  texi: new L.Icon({
    iconUrl: "/icons/marker/texi.png",
    iconSize: [50, 50],
    shadowUrl: "/icons/marker/shadow.png"
  }),
  car: new L.Icon({
    iconUrl: "/icons/marker/car.png",
    iconSize: [50, 50],
    shadowUrl: "/icons/marker/shadow.png"
  }),
  default: new L.Icon({
    iconUrl: "/icons/marker/default.png",
    iconSize: [25, 41],
    shadowUrl: "/icons/marker/shadow.png",
  }),
};


// Fix Leaflet default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

const Map = ({ vehicles }) => {
  const userLocation = [22.3072, 73.1812]; // Vadodara

  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User Marker */}
      <Marker position={userLocation}>
        <Popup>You are here 🚶</Popup>
      </Marker>

      {/* Vehicle Markers */}
      {vehicles && vehicles.map((v) => (
        <Marker
          key={v.id}
          position={v.location} // expect [lat, lng]
          icon={vehicleIcons[v.type] || vehicleIcons.default}
        >
          <Popup>
            {v.name} <br /> ETA: {v.eta}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
