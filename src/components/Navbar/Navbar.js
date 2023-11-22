import styled from 'styled-components'
import FirstContent from './components/FirstContainer/FirstContainer'
import ThirdContent from './components/SecondContainer/SecondContainer'
import SecondContend from '../Input/Search'

const Container = styled('div')`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 9;
  left: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.7rem;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.background.navbar};
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
`
const Navbar = (props) => {
  const { open, setOpen } = props
  return (
    <Container>
      <FirstContent />
      <SecondContend />
      <ThirdContent open={open} setOpen={setOpen} />
    </Container>
  )
}

export default Navbar
