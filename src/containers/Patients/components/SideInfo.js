import styled from 'styled-components'
import Avatar from 'react-avatar'

const Container = styled('div')`
  width: 25%;
  background-color: ${({ theme }) => theme.background.card};
  padding: 1rem;
  overflow-y: scroll;
`
const PatientHeadInfo = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text.straight};
`

const Photo = styled(Avatar)`
  object-fit: cover;
  margin-right: 0.7rem;
`
const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 0.5px;
  margin-right: 5px;
  user-select: none;
  & > * {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    font-size: ${({ withSubtitle }) => (withSubtitle ? '14px' : '18px')};
    line-height: ${({ withSubtitle }) => (withSubtitle ? '16px' : '20px')};
    font-weight: 600;
    color: ${({ theme }) => theme.text.straight};
  }
  h3 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`
const SubInfoContainer = styled('div')`
  margin: 0.7rem 0rem;
`
const SubTitle = styled('h5')`
  font-family: Verdana, Arial, sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.draight};
`
const SubInfo = styled('p')`
  font-family: cursive;
  font-weight: light;
  font-size: 0.8rem;
  color: grey;
`
const SideInfo = () => {
  const fullName = 'Charles Green'
  const email = 'jamanu1910077@gmail.com'
  const username = 'June 2, 1952(63 years) Male'
  return (
    <Container>
      <PatientHeadInfo>
        <Photo size={60} round={true} />
        <Title withSubtitle={!email}>
          <h2>{fullName}</h2>
          {username && <h3>{username}</h3>}
        </Title>
      </PatientHeadInfo>
      <SubInfoContainer>
        <SubTitle>MRN</SubTitle>
        <SubInfo>25AF-KRT$9*YIOO</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Address</SubTitle>
        <SubInfo>Some Address</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Preffered Comunication</SubTitle>
        <SubInfo>Cell | (99) 283-1237</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Language</SubTitle>
        <SubInfo>English</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Ensurance</SubTitle>
        <SubInfo>Member ID: 95217834</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Impairments</SubTitle>
        <SubInfo>Moderate Hearing</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Conditions</SubTitle>
        <SubInfo>
          Vital signs are stable and within normal limits. Patient is conscious and comfortable, and
          indicators are excellent
        </SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Medications</SubTitle>
        <SubInfo>
          The active part of the medicine is combined with a liquid to make it easier to take or
          better absorbed
        </SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Allergies</SubTitle>
        <SubInfo>eczema, hives, food allergy and asthma</SubInfo>
      </SubInfoContainer>
      <SubInfoContainer>
        <SubTitle>Last Encounter</SubTitle>
        <SubInfo>8/01/2015 with Dr. Bosworth</SubInfo>
      </SubInfoContainer>
    </Container>
  )
}

export default SideInfo
