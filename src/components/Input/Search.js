import styled from 'styled-components'
import { Search } from 'react-feather'

const SearchConatiner = styled('div')`
  display: flex;
  padding: 0.5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.search};
  width: 35%;
  background-color: ${({ theme }) => theme.background.search};
`
const Input = styled('input')`
  display: flex;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  color: ${({ theme }) => theme.text.straight};
  background-color: transparent;
`
const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.text.draight};
`
const SearchInput = ({ searchedValue, handleInputChange }) => {
  return (
    <SearchConatiner>
      <Input
        type="text"
        id="search-input"
        value={searchedValue}
        onChange={(e) => handleInputChange(e)}
        placeholder="Search for a movie, tv show,person..."
      />
      <SearchIcon size={35} />
    </SearchConatiner>
  )
}
export default SearchInput
