import styled from 'styled-components'
import ACard from './ACardList'
import { CardDetails } from './constant'
const Container = styled('div')``
const DepartmentList = () => {
  return (
    <Container>
      {CardDetails.map((data, index) => {
        return <ACard data={data} key={index} />
      })}
    </Container>
  )
}
export default DepartmentList
