import React from 'react'
import styled from 'styled-components'
// import Components
import LocationOfUser from '../components/LocationOfUsers'
import useWebSocket from 'react-use-websocket'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`
const WS_URL = 'ws://127.0.0.1:3000'

const Appointments = () => {
  const { sendMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
  })
  return (
    <Container>
      <LocationOfUser sendMessage={sendMessage} className="locationOfUser"/>
    </Container>
  )
}

export default Appointments
