//comment to master  .
import { useState } from 'react'
import styled from 'styled-components'
import { Table, TableRow } from '../../../components/Table'
import { AppointmentActivityTableData } from './constant'
import Avatar from 'react-avatar'
import { Button } from 'reactstrap'
import Modal from './PaymentModal'

const Container = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 1rem 0rem;
  margin-top: 2rem;
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
const PaymentList = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const tableHead = (
    <TableRow>
      <th colSpan={4}>Ism Familya</th>
      <th colSpan={4}>ID kodi</th>
      <th colSpan={4}>Doktor uchun to'lov</th>
      <th colSpan={4}>Soat uchun to'lov</th>
      <th colSpan={4}>Jami to'lovlar</th>
      <th colSpan={4}>Qarzlar</th>
      <th></th>
    </TableRow>
  )
  const tableList = AppointmentActivityTableData.map((client, index) => {
    const { fullName, watchId, doctorPayment, watchPayment, totalPayment, debts, avatar } = client

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
        <td colSpan={4}>{watchId}</td>
        <td colSpan={4}>{doctorPayment}</td>
        <td colSpan={4}>{watchPayment}</td>
        <td colSpan={4}>{totalPayment}</td>
        <td colSpan={4}>{debts}</td>
        <td>
          <Button color="danger" outline onClick={toggle}>
            To'lov
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
      <HeadLine>O'ylik To'lovlar</HeadLine>
      {table}
      <Modal modal={modal} toggle={toggle} />
    </Container>
  )
}
export default PaymentList
