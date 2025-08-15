import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const InteractiveMap = () => {
  // Salsha Technologies office location in Shahdara, Delhi
  const officeLocation = {
    lat: 28.6765,
    lng: 77.2865
  };

  const handleGetDirections = () => {
    const url = `https://www.openstreetmap.org/directions?from=&to=${officeLocation.lat},${officeLocation.lng}`;
    window.open(url, '_blank');
  };

  // Custom marker icon
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background: #0D9488;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
        border: 3px solid white;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  return (
    <div className="relative">
      <MapContainer
        center={[officeLocation.lat, officeLocation.lng]}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
        className="rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[officeLocation.lat, officeLocation.lng]} icon={customIcon}>
          <Popup>
            <div className="p-2 max-w-xs">
              <h3 className="font-bold text-gray-900 mb-2">Salsha Technologies</h3>
              <p className="text-gray-600 text-sm mb-2">C-24 S/F, DDA Colony, Shahdara, Delhi, India</p>
              <p className="text-gray-600 text-sm mb-1">📞 +91-9369051640</p>
              <p className="text-gray-600 text-sm mb-3">✉️ sales@salshatechnologies.com</p>
              <button
                onClick={handleGetDirections}
                className="w-full bg-teal-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
              >
                <Navigation size={14} className="mr-1" />
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Fallback Info Card */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg pointer-events-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Salsha Technologies</h3>
              <p className="text-gray-600 text-xs">C-24 S/F, DDA Colony, Shahdara, Delhi</p>
            </div>
            <button
              onClick={handleGetDirections}
              className="flex items-center space-x-1 bg-teal-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-teal-700 transition-colors"
            >
              <Navigation size={12} />
              <span>Directions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
