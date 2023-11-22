import React from 'react'
import styled from 'styled-components'
import { CardImg } from 'reactstrap'
import { DepartmentOverallStatistics } from './constants'
import { Users, MapPin } from 'react-feather'
import { devices } from '../../../constants/mediaQueries'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`
const CardContainer = styled('div')`
  width: 100%;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.card};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  flex-direction: row;

  @media (max-width: ${devices.laptopS}) {
    flex-direction: column;
  }

  .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: width 0.2s ease;
  }

  &:hover .postcard__bar {
    width: 40%;
    background-color: lime;
  }
  &:hover .img {
    transition: width 10s;
  }
`

const Content = styled('div')`
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-witdh: 1000px) {
    flex-wrap: wrap;
    height: 20rem;
  }
  color: ${({ theme }) => theme.text.draight};
`
const Title = styled('h1')`
  display: flex;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.straight};
`
const SubTitle = styled('div')`
  font-size: 0.9rem;
`

const MovieBar = styled('div')``
const MovieInfo = styled('div')`
  font-size: 1rem;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
  width: 1000px;
`

const IMG = styled(CardImg)`
  max-width: 18rem;
`

const DepartmentList = ({ results }) => {
  return (
    <Container>
      {DepartmentOverallStatistics &&
        DepartmentOverallStatistics.map((data, index) => (
          <CardContainer key={index}>
            <IMG variant="top" src={data.img} alt="No Image" />

            <Content>
              <Title>{data.name}</Title>
              <MovieBar className="postcard__bar"></MovieBar>
              <SubTitle>
                <Users size={15} style={{ margin: '0 7px 0 0' }} />
                {data.doctorsNum}
              </SubTitle>
              <MovieInfo>
                <MapPin size={15} style={{ margin: '0 7px 0 0' }} />
                {data.address}
              </MovieInfo>
            </Content>
          </CardContainer>
        ))}
    </Container>
  )
}

export default DepartmentList
