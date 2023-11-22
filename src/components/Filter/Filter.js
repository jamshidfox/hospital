import styled from 'styled-components'
import { faker } from '@faker-js/faker'

const Container = styled('div')`
  padding: 1rem;
  color: yellow;
`
const Select = styled('select')`
  width: 20rem;
  height: 90%;
  border-radius: 5px;
  border: 1.5px solid slategrey;
  overflow: scroll;
  background-color: ${({ theme }) => theme.background.card};
`
const Option = styled('option')`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
`

export const Filter = (props) => {
  const { count, setCount } = props

  const onChange = (e) => {
    setCount(e.target.value)
  }

  return (
    <Container>
      <Select name="cars" id="cars" onChange={(e) => onChange(e)}>
        <Option value={1}>1</Option>
        <Option value={5} selected>
          5
        </Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={30}>30</Option>
      </Select>
    </Container>
  )
}

export const createNurseFakeData = () => {
  const data = faker.date.between('2022-01-01', '2022-12-12')

  const image = faker.image.avatar()
  const name = faker.name.firstName() + ' ' + faker.name.lastName()
  const email = faker.internet.email(name)
  const address = faker.address.streetAddress()
  const phone = faker.phone.number()
  const date = `${data.getDay()}/${data.getMonth()}/${data.getUTCFullYear()}`
  const visit_time = `${data.getUTCHours()}:${data.getMinutes()}${
    data.getUTCHours() > 12 ? 'pm' : 'am'
  }`
  const doctor = `Dr. ${faker.name.fullName()}`
  const conditions = `${faker.internet.emoji()}`

  return {
    image,
    name,
    email,
    address,
    phone,
    date,
    visit_time,
    doctor,
    conditions,
  }
}
export const generateUsers = (count) => {
  let users = []
  for (let i = 0; i < count; i++) {
    users.push(createNurseFakeData())
  }
  return users
}
