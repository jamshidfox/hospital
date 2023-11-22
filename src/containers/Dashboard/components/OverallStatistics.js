import { indexOf } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { devices } from '../../../constants/mediaQueries'
import { OverallStatistics } from './constants'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${devices.laptopM}) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`
const ACard = styled('div')`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: ${({ theme }) => theme.width.dashboard.card};
  height: ${({ theme }) => theme.height.dashboard.card};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  color: ${({ theme }) => theme.text.graight};
  background: ${({ theme }) => theme.background.card};
`
const Info = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
const InfoTitle = styled('h5')`
  color: ${({ theme }) => theme.text.draight};
`
const InfoNum = styled('h6')`
  font-size: 30px;
  color: ${({ theme }) => theme.text.graight};
`
const OverAll = () => {
  return (
    <Container>
      {OverallStatistics.map((data, index) => (
        <ACard key={index}>
          {data.icon}
          <Info>
            <InfoTitle>{data.name}</InfoTitle>
            <InfoNum>{data.number}</InfoNum>
          </Info>
        </ACard>
      ))}
    </Container>
  )
}
export default OverAll
