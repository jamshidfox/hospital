import styled from 'styled-components'
import OverAll from './OverallStatistics'
import HospitalSorvey from './Survey'
import IncomeDashboard from './Income'
import AppointmentActivity from './AppointmentActivity'
// import TrafficChart from './Traffic'

const Container = styled('div')`
  > :nth-child(2) {
    margin-top: 2rem;
  }
`
const Dashboard = () => {
  return (
    <Container>
      <OverAll />
      <HospitalSorvey />
      <IncomeDashboard />
      <AppointmentActivity />
      {/* <TrafficChart/> */}
    </Container>
  )
}
export default Dashboard
