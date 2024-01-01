import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet"; 
 

export default function LMap({lat,lon}) { 
  const geoLocation = [lat,lon] 
  return (
    <MapContainer center={geoLocation} zoom={13} scrollWheelZoom={false}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='Added By Nasim: ajnasim72@gmail.com'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      <CircleMarker center={geoLocation} pathOptions={{ color: 'red' }} radius={120}>
        <Popup>This person may leaving within this area</Popup>
      </CircleMarker> 
    </MapContainer>
  );
}
