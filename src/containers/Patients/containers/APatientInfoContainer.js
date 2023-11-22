import styled from 'styled-components'
import SideInfo from '../components/SideInfo'
import HistoryPatient from '../components/HistoryPatient'
const Container = styled('div')`
  display: flex;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`

const APatientInfo = () => {
  return (
    <Container>
      <SideInfo />
      <HistoryPatient />
    </Container>
  )
}

export default APatientInfo
