import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet"; 
 

export default function LMap({loc}) { 
  // eslint-disable-next-line react/prop-types
  const Loc = loc.split(',')
  const geoLocation = [Number(Loc[0]),Number(Loc[1])]
  alert(geoLocation)
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
