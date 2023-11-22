import React from 'react'
import styled from 'styled-components'
import Chart from 'react-apexcharts'
import { SurveyData } from './constants'

const Container = styled.div`
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  background: ${({ theme }) => theme.background.card};
`
const HeadLine = styled('h1')`
  color: ${({ theme }) => theme.text.draight};
`
const ChartContainer = styled(Chart)`
  margin-top: 1rem;
`

const HospitalSorvey = () => {
  return (
    <Container>
      <HeadLine>Hospital Survey</HeadLine>
      <ChartContainer
        options={SurveyData.options}
        series={SurveyData.series}
        type="area"
        height={250}
      />
    </Container>
  )
}

export default HospitalSorvey
