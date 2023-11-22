import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { MapPin, Map, Book, PenTool } from 'react-feather'
import styled from 'styled-components'
const Container = styled(Card)`
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: #ffff;
  margin-top: 2rem;
  width: 25rem;

`
const PentolIcon = styled(PenTool)`
  color: grey;
  display: flex;
  justify-content: space-between;
` 
const Title = styled(CardTitle)`
  display: flex;
  justify-content: space-between;
`
const Info = () => {
  return (
    <Container>
      <CardBody>
        <Title tag="h5">
          <h3>Information </h3>
          <PentolIcon />
        </Title>
        <CardText className="mb-2 text-muted" tag="h6">
          <MapPin></MapPin>
          Location: India
        </CardText>
        <CardText className="mb-2 text-muted" tag="h6">
          <Map></Map>
          Adress: Mumbai
        </CardText>
        <CardText className="mb-2 text-muted" tag="h6">
          <Book></Book>
          Wallet ID: 6HE46URR677wSR4461c
        </CardText>
      </CardBody>
    </Container>
  )
}
export default Info
