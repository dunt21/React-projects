import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function RecenterMap({ coords }) {
  const map = useMap();

  const isMobile = window.innerWidth < 640;

  const adjustedCoords = isMobile ? [coords[0] + 0.0005, coords[1]] : coords;

  useEffect(() => {
    map.setView(adjustedCoords, map.getZoom(), { animate: true });
  }, [coords, map]);

  return null;
}

export default function MapDisplay({ locData }) {
  const coords = locData.coords;

  return (
    <div className="min-w-screen h-full overflow-x-hidden">
      {coords ? (
        <MapContainer
          center={coords}
          zoom={20}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "28rem" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <RecenterMap coords={coords} />
          <Marker position={coords}>
            <Popup>{locData.city}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center">Map is loading...</p>
      )}
    </div>
  );
}
