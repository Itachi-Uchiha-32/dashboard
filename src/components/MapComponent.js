import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapComponent({ isDark, data }) {
  const tileUrl = isDark 
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  return (
    <MapContainer 
      center={[23.685, 90.3563]} 
      zoom={7} 
      className="w-full h-full rounded-3xl z-0"
      scrollWheelZoom={false}
    >
      <TileLayer url={tileUrl} attribution='&copy; CARTO' />
      
      {data && data.map((point, i) => {
        const isValidLatLng = point && typeof point.lat === 'number' && typeof point.lng === 'number';
        if (!isValidLatLng) return null;

        return (
          <Marker 
            key={i} 
            position={[point.lat, point.lng]}
            
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
            }}
          >
            {/* MODAL CARD */}
            <Popup closeButton={false} autoPan={false}>
              <div className="p-1 min-w-[140px] font-sans">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: point.color }} />
                  <span className="font-black text-[10px] uppercase tracking-widest text-zinc-800">
                    {point.city}
                  </span>
                </div>
                <div className="space-y-1 border-t pt-2 border-zinc-100">
                  <div className="flex justify-between gap-4">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase">Total Sales</span>
                    <span className="text-[10px] font-black text-zinc-900">{point.sales} TK</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase">Sales Rate</span>
                    <span className="text-[10px] font-black text-indigo-600">{point.pct}%</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}