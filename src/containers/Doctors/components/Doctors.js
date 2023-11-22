import ADoctorCard from './ADoctorCard'
import styled from 'styled-components'
import { DoctrosData } from './constants'
const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`

const Dashboard = ({ list }) => {
  return (
    <Container>
      <ADoctorCard data={list} />
    </Container>
  )
}
export default Dashboard
