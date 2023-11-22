import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EmptyQuery from '../EmptyQuery'
import Loader from '../Loader'

const Wrapper = styled('table')`
  border-collapse: separate;
  border-spacing: 0 5px;
  width: 100%;
  ${({ styles }) => styles};
`
const Table = (props) => {
  const { isEmpty, loading, emptyText, filterForm, styles, children } = props

  // Render
  if (isEmpty || loading) {
    return (
      <>
        {filterForm}
        {loading && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Loader size={1.2} />
          </div>
        )}
        {!loading && <EmptyQuery text={emptyText} />}
      </>
    )
  }
  return (
    <>
      {filterForm}
      <Wrapper styles={styles}>
        <tbody>{children}</tbody>
      </Wrapper>
    </>
  )
}

export default Table
