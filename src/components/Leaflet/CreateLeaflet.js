import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const BasicMap = (props) => {
  const { children } = props

  return (
    <MapContainer
      zoom={11}
      center={[41.3108238809182, 69.2512893676758]}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%', zIndex: '1' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}
export default BasicMap
