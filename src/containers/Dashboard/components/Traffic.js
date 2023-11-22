import React from 'react'
import styled from 'styled-components'
import Chart from 'react-apexcharts'
import { TrafficIssues } from './constants'

const Container = styled.div`
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  background: ${({ theme }) => theme.background.card};
`
const HeadLine = styled('h1')`
  color: #25282b;
`
const ChartContainer = styled(Chart)`
  margin-top: 1rem;
`

const TrafficChart = () => {
  return (
    <Container>
      <HeadLine>Traffic Occured</HeadLine>
      <ChartContainer
        options={TrafficIssues.options}
        series={TrafficIssues.series}
        type="line"
        height={400}
      />
    </Container>
  )
}

export default TrafficChart
