//comment to master  .
import { useState } from 'react'
import styled from 'styled-components'
import { Table, TableRow } from '../../../components/Table'
import { AppointmentActivityTableData } from './constant'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { generateUsers } from '../../../components/Filter/Filter'
import Avatar from 'react-avatar'
import AppointmentInfoModal from '../../../components/Modal/AppointmentInfoModal'

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

const AppointmentActivity = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [infos, setInfos] = useState('')

  const tableHead = (
    <TableRow>
      <th colSpan={4}>Name</th>
      <th colSpan={4}>Email</th>
      <th colSpan={4}>Date</th>
      <th colSpan={4}>Visit Time</th>
      <th colSpan={4}>Doctor </th>
      <th colSpan={4}>Conditions</th>
      <th />
    </TableRow>
  )
  const tableList = list.map((client, index) => {
    const { fullName, email, visitDate, visitTime, visitDoctor, patientCondition, avatar } = client

    // Render
    return (
      <TableRow
        key={index}
        // onClick={handleRedirect}
      >
        <td colSpan={4}>
          {avatar && <Photo src={avatar} size={35} round={true} />}
          {!avatar && <Photo round={true} size={35} />}
          {fullName}
        </td>
        <td colSpan={4}>{email}</td>
        <td colSpan={4}>{visitDate}</td>
        <td colSpan={4}>{visitTime}</td>
        <td colSpan={4}>{visitDoctor}</td>
        <td colSpan={4}>{patientCondition}</td>
        <td>
          <Button
            outline
            color="danger"
            onClick={() => {
              setIsOpen(true)
              setInfos(client)
            }}
          >
            View
          </Button>
        </td>
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
      <AppointmentInfoModal isOpen={isOpen} data={infos} setIsOpen={setIsOpen} />
    </Container>
  )
}
export default AppointmentActivity
