//comment to master  .
import { useState } from 'react'
import styled from 'styled-components'
import { Table, TableRow } from '../../../components/Table'
import { NurseTableData } from './constant'
import Avatar from 'react-avatar'
import { Filter, generateUsers } from '../../../components/Filter/Filter'

const Container = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 1rem 0rem;
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.background.card};
`

const Photo = styled(Avatar)`
  object-fit: cover;
  margin-right: 0.7rem;
`

const HeadLine = styled('h1')`
  margin: 1rem;
  color: ${({ theme }) => theme.text.draight};
`

const NurseTable = () => {
  const [modal, setModal] = useState(false)
  const [count, setCount] = useState(10)
  const NursesData = generateUsers(count)
  const toggle = () => setModal(!modal)
  const tableHead = (
    <TableRow>
      <th colSpan={4}>Image</th>
      <th colSpan={4}>Name</th>
      <th colSpan={4}>Email</th>
      <th colSpan={4}>Address</th>
      <th colSpan={4}>Phone</th>
      <th colSpan={4}>Options </th>
    </TableRow>
  )
  const tableList = NursesData.map((nurse, index) => {
    const { image, name, email, address, phone } = nurse
    // Render
    return (
      <TableRow
        key={index}
        // onClick={handleRedirect}
      >
        <td colSpan={4}>
          {image && <Photo src={image} size={35} round={true} />}
          {!image && <Photo round={true} size={35} />}
          {name}
        </td>
        <td colSpan={4}>{name}</td>
        <td colSpan={4}>{email}</td>
        <td colSpan={4}>{address}</td>
        <td colSpan={4}>{phone}</td>
        <td colSpan={4}>Edit Delete</td>
      </TableRow>
    )
  })

  const table = (
    <Table>
      {tableHead}
      {tableList}
    </Table>
  )

  return (
    <Container>
      <Filter count={count} setCount={setCount} />
      {table}
    </Container>
  )
}
export default NurseTable
