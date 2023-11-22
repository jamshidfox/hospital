import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'

const Navigator = (props) => {
  const { from, to } = props
  const map = useMap()

  var marker = L.marker(from, {
    icon: L.icon({ iconUrl: require('../../icons/ambulance.png'), iconSize: [35, 35] }),
  }).addTo(map)
  useEffect(() => {
    if (!map) return

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from), L.latLng(to)],
      routeWhileDragging: true,
      createMarker: function () {
        return null
      },
      lineOptions: { styles: [{ color: '#2E294E' }] },
    })
      .on('routesfound', (e) => {
        // e.routes[]
        e?.routes[0]?.coordinates.forEach((coord, index) => {
          setTimeout(() => {
            marker.setLatLng([coord.lat, coord.lng])
          }, 500 * index)
        })
      })
      .addTo(map)

    return () => map.removeControl(routingControl)
  }, [map])

  return null
}
export default Navigator
