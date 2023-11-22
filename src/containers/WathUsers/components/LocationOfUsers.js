import { useState, useCallback } from 'react'
import styled from 'styled-components'
import CreatMap from '../../../components/Leaflet/CreateLeaflet'
import { Marker } from 'react-leaflet'
import SimpleModal from '../../../components/Modal/SimpleModal'
import { UsersDataOnline } from './constant'
import Navigator from '../../../components/Leaflet/Navigator'
//Navigation Handling

const Container = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.background.card};
`
const PatientModal = styled(SimpleModal)``
const LocationOfUsers = ({ sendMessage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, changeData] = useState('')

  return (
    <Container>
      <CreatMap>
        {UsersDataOnline.map((d, index) => (
          <Marker
            position={d?.location}
            icon={d?.icon}
            key={index}
            eventHandlers={{
              click: (e) => {
                setIsModalOpen(true)
                changeData(d)
                sendMessage(JSON.stringify(d, null, 2))
              },
            }}
          ></Marker>
        ))}
        <Navigator from={[41.26285, 69.155129]} to={[41.31494988250965, 69.2842483520508]} />
      </CreatMap>
      <PatientModal isOpen={isModalOpen} data={data} setIsOpen={setIsModalOpen} />
    </Container>
  )
}
export default LocationOfUsers
