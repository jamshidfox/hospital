import styled from 'styled-components'
import Face from '../../../images/user-avatar.jpg'
import Map from '../../../components/Leaflet/CreateLeaflet'
import { useNavigate } from 'react-router'
import * as ROUTES from '../../../constants/routes'

const Container = styled('div')`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.background.card};
  color: ${({ theme }) => theme.text.draight};
`
const PersonFaceContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 34%;
`
const InformationDetailsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 34%;
`
const MapContainer = styled('div')`
  width: 27%;
`
const Img = styled('img')`
  height: 20rem;
`
const ImgHeadline = styled('h4')``
const InfoDetailHeadline = styled('h4')``
const InfoDetailSupContainer = styled('div')`
  display: flex;
`
const InfoDetailSupContainerHeadline = styled('h6')``
const InfoDetailSupContainerSubHeadline = styled('i')`
  margin-left: 1rem;
  text-transform: uppercase;
`
const Button = styled('button')`
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  :focus {
    background-color: #07c;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
  width: 20%;
`
const VIEWBTN = styled('div')`
  margin-top: 1rem;
`
const ACard = ({ data }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <PersonFaceContainer>
        <ImgHeadline>Repository: Oddiy fuqarolar</ImgHeadline>
        <Img src={data.img} />
      </PersonFaceContainer>
      <InformationDetailsContainer>
        <InfoDetailHeadline>Umumiy ma'lumotlar</InfoDetailHeadline>
        {data?.details?.map((d, index) => (
          <InfoDetailSupContainer key={index}>
            <InfoDetailSupContainerHeadline>{d.title}</InfoDetailSupContainerHeadline>
            <InfoDetailSupContainerSubHeadline>{d.result}</InfoDetailSupContainerSubHeadline>
          </InfoDetailSupContainer>
        ))}
        <VIEWBTN>
          <Button onClick={() => navigate(ROUTES.APATIENT_INFO)}>View</Button>
        </VIEWBTN>
      </InformationDetailsContainer>
      <MapContainer>
        <Map />
      </MapContainer>
    </Container>
  )
}

export default ACard
