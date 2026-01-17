import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapDisplay({ locData }) {
  return (
    <MapContainer
      center={locData.coords}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: `100%`, height: "28rem" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={locData.coords}>
        <Popup>{locData.city}</Popup>
      </Marker>
    </MapContainer>
  );
}
