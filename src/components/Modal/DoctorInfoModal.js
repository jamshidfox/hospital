import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import styled from 'styled-components'

const ModalContainer = styled(Modal)`
  width: 100%;
  height: 100%;
`
const ModalBodyContainer = styled(ModalBody)`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.background.card};
  color: ${({ theme }) => theme.text.draight};
`

const ModalTitle = styled(ModalHeader)`
  background-color: ${({ theme }) => theme.background.card};
  color: ${({ theme }) => theme.text.straight};
  border-bottom-color: ${({ theme }) => theme.text.draight};
`

const Content3 = styled('div')`
  display: flex;
  justify-content: space-between;
`
const Content3First = styled('div')`
  width: 58%;
`
const Content3Second = styled('div')`
  width: 38%;
`
const Content3SecondSub1 = styled('div')``
const Content3SecondSub2 = styled('div')``
const Content3SecondSub3 = styled('div')``
const Content3SecondSub4 = styled('div')``

const Content3Img = styled('img')`
  width: 100%;
  height: 100%;
`
const Title = styled('h6')`
  color: ${({ theme }) => theme.text.straight};
`

const SubTitle = styled('p')`
  color: ${({ theme }) => theme.text.cardSubTitle};
`

function DoctorsModal({ data, isOpen, setIsOpen }) {
  const handleOnclick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ModalContainer
      size="lg"
      isOpen={isOpen}
      fade={true}
      centered={true}
      style={{ width: '50rem' }}
    >
      <ModalTitle toggle={handleOnclick}>Doctor Info</ModalTitle>
      <ModalBodyContainer>
        <Content3>
          <Content3First>
            <Content3Img src={data.image} />
          </Content3First>
          <Content3Second>
            <Content3SecondSub1>
              <Title>Ismi/Name</Title>
              <SubTitle>{data.name}</SubTitle>
            </Content3SecondSub1>
            <Content3SecondSub2>
              <Title>Familiya / Surname</Title>
              <SubTitle>{data.surname}</SubTitle>
            </Content3SecondSub2>
            <Content3SecondSub2>
              <Title>Email</Title>
              <SubTitle>{data.email}</SubTitle>
            </Content3SecondSub2>
            <Content3SecondSub3>
              <Title>Status</Title>
              <SubTitle>{data.status}</SubTitle>
            </Content3SecondSub3>
            <Content3SecondSub4>
              <Title>Oylik maosh / Salary</Title>
              <SubTitle>{data.salary ? data.salary : '0$'}</SubTitle>
            </Content3SecondSub4>
          </Content3Second>
        </Content3>
      </ModalBodyContainer>
    </ModalContainer>
  )
}

export default DoctorsModal
