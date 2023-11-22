//comment to master  .
import styled from 'styled-components'
import { Table, TableRow } from '../../../components/Table'
import { AppointmentActivityTableData } from './constants'
import Avatar from 'react-avatar'
const Container = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 1rem 0rem;
  margin-top: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.background.card};
`
const Photo = styled(Avatar)`
  object-fit: cover;
  margin-right: 0.7rem;
`
const HeadLine = styled('h1')`
  margin: 1rem;
  color: ${({ theme }) => theme.text.draight};
`
const AppointmentActivity = () => {
  const tableHead = (
    <TableRow header={'true'}>
      <th colSpan={4}>Name</th>
      <th colSpan={4}>Email</th>
      <th colSpan={4}>Date</th>
      <th colSpan={4}>Visit Time</th>
      <th colSpan={4}>Doctor </th>
      <th colSpan={4}>Conditions</th>
      <th />
    </TableRow>
  )

  const tableList = AppointmentActivityTableData.map((client, index) => {
    const { name, email, date, visit_time, doctor, conditions, avatar } = client

    // Render
    return (
      <TableRow
        key={index}
        // onClick={handleRedirect}
      >
        <td colSpan={4}>
          {avatar && <Photo src={avatar} size={35} round={true} />}
          {!avatar && <Photo round={true} size={35} />}
          {name}
        </td>
        <td colSpan={4}>{email}</td>
        <td colSpan={4}>{date}</td>
        <td colSpan={4}>{visit_time}</td>
        <td colSpan={4}>{doctor}</td>
        <td colSpan={4}>{conditions}</td>
        <td></td>
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
      <HeadLine>Appointment Activity</HeadLine>
      {table}
    </Container>
  )
}
export default AppointmentActivity
