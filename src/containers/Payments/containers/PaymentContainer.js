import PaymentList from '../components/PaymentList'
import PaymentModal from '../components/PaymentModal'
import styled from 'styled-components'
const Container = styled('div')`
  width: 100%;
`
const PaymentContainer = () => {
  return (
    <Container>
      <PaymentList />
      <PaymentModal />
    </Container>
  )
}
export default PaymentContainer
