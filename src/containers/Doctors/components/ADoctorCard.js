import { useState } from 'react'
import styled from 'styled-components'
import Avatar from 'react-avatar'
import {
  CardBody,
  CardImg,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'
import { Mail, Phone } from 'react-feather'
import DoctorsModal from '../../../components/Modal/DoctorInfoModal'

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 4em;
`
const CardContainer = styled('div')`
  box-sizing: border-box;
  width: 15%;
  min-width: ${({ theme }) => theme.width.doctor.minWidth};
  max-width: ${({ theme }) => theme.width.doctor.maxWidth};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  background-color: ${({ theme }) => theme.background.card};
  cursor: pointer;
`
const CardBodyContainer = styled(CardBody)``
const IMG = styled(CardImg)`
  height: 16rem;
  object-fit: cover;
`

const Title = styled('p')`
  font-size: 22px;
  padding: 0.4rem 1rem;
  color: ${({ theme }) => theme.text.straight};
`

const SubTitle = styled('h6')`
  margin: 0;
  padding: 0 1rem 0.8rem 1rem;
  color: ${({ theme }) => theme.text.draight};
`

const ADoctorCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [infos, setInfos] = useState('')

  return (
    <Container>
      {data.map((card, index) => (
        <CardContainer
          className="grid-container"
          key={index}
          onClick={() => {
            setIsOpen(true)
            setInfos(card)
          }}
        >
          <IMG src={card.image} top></IMG>
          <CardBodyContainer>
            <Title>{`${card.name} ${card.surname}`}</Title>
            <SubTitle>{card.status}</SubTitle>
          </CardBodyContainer>
        </CardContainer>
      ))}
      <DoctorsModal isOpen={isOpen} data={infos} setIsOpen={setIsOpen} />
    </Container>
  )
}

export default ADoctorCard
