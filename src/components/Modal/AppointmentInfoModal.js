import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, CardHeader } from 'reactstrap'

const ModalCon = styled(Modal)`
  width: 90vh;
  max-width: 90vw;
`

const Content3 = styled('div')`
  display: flex;
`
const Content3First = styled('div')`
  width: 40%;
  height: 100%;
`
const Content3Second = styled('div')`
  width: 60%;
  padding-left: 1.3rem;
`
const Content3SecondSub1 = styled('div')``
const Content3SecondSub2 = styled('div')``
const Content3SecondSub5 = styled('div')``
const Content3SecondSub9 = styled('div')``
const Content3SecondSub10 = styled('div')``
const Content3SecondSub11 = styled('div')``
const Content3Img = styled('img')`
  width: 100%;
`

const ModalHead = styled(ModalHeader)`
  background-color: ${({ theme }) => theme.background.card};
  color: ${({ theme }) => theme.text.straight};
  border-bottom-color: ${({ theme }) => theme.text.draight};
`
const ModalBodyContainer = styled(ModalBody)`
  background-color: ${({ theme }) => theme.background.card};
`
const Title = styled('h6')`
  color: ${({ theme }) => theme.text.straight};
`

const SubTitle = styled('p')`
  color: ${({ theme }) => theme.text.cardSubTitle};
`

const AppointmentInfoModal = ({ data, isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ModalCon size="lg" isOpen={isOpen} fade={true} centered={true} style={{ width: '50rem' }}>
      <ModalHead toggle={toggle}>Appointment Activity User</ModalHead>
      <ModalBodyContainer style={{ height: '30rem' }}>
        <Content3>
          <Content3First>
            <Content3Img
              src={
                data.avatar
                  ? data.avatar
                  : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'
              }
            />
          </Content3First>
          <Content3Second>
            <Content3SecondSub1>
              <Title>To'liq ismi / FullName</Title>
              <SubTitle>{data.fullName}</SubTitle>
            </Content3SecondSub1>
            <Content3SecondSub2>
              <Title>Email</Title>
              <SubTitle>{data.email}</SubTitle>
            </Content3SecondSub2>
            <Content3SecondSub5>
              <Title>Kasallangan/Infected</Title>
              <SubTitle>{data.patientCondition}</SubTitle>
            </Content3SecondSub5>
            <Content3SecondSub9>
              <Title>Sana/Date</Title>
              <SubTitle>{data.visitDate}</SubTitle>
            </Content3SecondSub9>
            <Content3SecondSub10>
              <Title>Visit time</Title>
              <SubTitle>{data.visitTime}</SubTitle>
            </Content3SecondSub10>
            <Content3SecondSub11>
              <Title>Shifokor/Doctor</Title>
              <SubTitle>{data.visitDoctor}</SubTitle>
            </Content3SecondSub11>
          </Content3Second>
        </Content3>
      </ModalBodyContainer>
    </ModalCon>
  )
}

export default AppointmentInfoModal
