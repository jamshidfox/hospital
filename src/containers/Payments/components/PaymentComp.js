import React from 'react'
import { Send, TrendingUp } from 'react-feather'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`
const ACard = styled('div')`
  display: flex;
  align-items: center;
  padding: 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  width: 25rem;
  color: #336cfb;
  background: #ffffff;
`
const Info = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
const InfoTitle = styled('h5')`
  color: #25282b;
`
const InfoNum = styled('h6')`
  font-size: 30px;
  color: #336cfb;
`
const IconNum = styled('h6')`
  color: green;
`
const Number = styled('h6')`
  display: flex;
`
const Balance = () => {
  return (
    <Container>
      <ACard>
        <Info>
          <InfoTitle>Balances</InfoTitle>
          <InfoNum>$283.542.695</InfoNum>
          <IconNum>
            <TrendingUp />
            <Number>dfgdg</Number>
          </IconNum>
        </Info>
      </ACard>
    </Container>
  )
}
export default Balance
