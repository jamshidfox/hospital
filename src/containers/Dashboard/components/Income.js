import styled from 'styled-components'
import { Income } from './constants'
import Chart from 'react-apexcharts'
import { devices } from '../../../constants/mediaQueries'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
  @media (max-width: ${devices.laptopS}) {
    flex-direction: column;
  }
`
const ACard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  color: #336cfb;
  background-color: ${({ theme }) => theme.background.card};
  width: ${(props) => (props.width <= 1000 ? '100%' : '49%')};
  @media (max-witdh: ${devices.laptopS}) {
    width: 100%;
  }
`

const HeadLine = styled('h1')`
  margin-left: 1rem;
  color: ${({ theme }) => theme.text.draight};
`

const ChartContainer = styled(Chart)`
  margin-top: 1rem;
  width: 100%;
  height: auto;
`

const OverAll = () => {
  return (
    <Container>
      {Income.map((data, index) => (
        <ACard key={index} width={750}>
          <HeadLine>{data.headLine}</HeadLine>
          <ChartContainer options={data.options} series={data.series} type="line" />
        </ACard>
      ))}
    </Container>
  )
}
export default OverAll
