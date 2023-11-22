import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import styled from 'styled-components'

const ModalContainer = styled(Modal)`
  width: 100%;
  height: 100%;
`
const ModalBodyContainer = styled('ModalBody')`
  padding: 1.2rem;
`

const TH = styled('th')`
  font-size: 1rem;
  margin-left: 0.5rem;
`

const TR = styled('tr')`
  display: flex;
  flex-direction: column;
`
const Content1 = styled('div')`
  text-align: center;
  width: 100%;
`
const Content2 = styled('div')`
  display: flex;
  justify-content: space-between;
`
const Content2FirstDiv = styled('div')``
const Content2SecondDiv = styled('div')``
const Content2ThirdDiv = styled('div')``
const Content2FourthDiv = styled('div')``
const Content3 = styled('div')`
  display: flex;
`
const Content3First = styled('div')`
  width: 40%;
`
const Content3Second = styled('div')`
  width: 60%;
  padding-left: 1.3rem;
`
const Content3SecondSub1 = styled('div')``
const Content3SecondSub2 = styled('div')``
const Content3SecondSub3 = styled('div')``
const Content3SecondSub4 = styled('div')``
const Content3Img = styled('img')`
  width: 100%;
`
function SimpleModal(props) {
  const { isOpen, data, setIsOpen, children } = props
  const handleOnclick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ModalContainer
      size="lg"
      isOpen={isOpen}
      fade={false}
      centered={true}
      style={{ width: '50rem' }}
    >
      <ModalHeader toggle={handleOnclick}>Patient Info</ModalHeader>
      <ModalBodyContainer>
        <Content1>
          <h5>O'ZBEKISTON RESPUBLIKASI/REPUBLIC OF UZBEKISTAN</h5>
        </Content1>
        <Content2>
          <Content2FirstDiv>Pasport/Passport</Content2FirstDiv>
          <Content2SecondDiv>
            <h5>Turi/Type</h5>
            <p>P</p>
          </Content2SecondDiv>
          <Content2ThirdDiv>
            <h5>Davlat Kodi/Country Code</h5>
            <p>{data.countryCode}</p>
          </Content2ThirdDiv>
          <Content2FourthDiv>
            <h5>Pasport Raqami/Passport No.</h5>
            <p>{data.passportNo}</p>
          </Content2FourthDiv>
        </Content2>
        <Content3>
          <Content3First>
            <Content3Img src={data.img} />
          </Content3First>
          <Content3Second>
            <Content3SecondSub1>
              <h6>Familya/Surname</h6>
              <p>{data.surname}</p>
            </Content3SecondSub1>
            <Content3SecondSub2>
              <h6>Ismi/Given Names</h6>
              <p>{data.name}</p>
            </Content3SecondSub2>
            <Content3SecondSub2>
              <h6>Tug'ilgan Sanasi/Date of Birth</h6>
              <p>{data.dataOfBirth}</p>
            </Content3SecondSub2>
            <Content3SecondSub3>
              <h6>Jinsi/Sex</h6>
              <p>{data.gender}</p>
            </Content3SecondSub3>
            <Content3SecondSub4>
              <h6>Berilgan Sanasi/Date of Issue</h6>
              <p>{data.dateOfIssue}</p>
            </Content3SecondSub4>
          </Content3Second>
        </Content3>
      </ModalBodyContainer>
    </ModalContainer>
  )
}

export default SimpleModal
