import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { devices } from '../../constants/mediaQueries'

const Row = styled('tr')`
  cursor: ${({ header, onClick }) => (header ? 'auto' : onClick ? 'pointer' : 'unset')};
  transition: ${({ theme }) => theme.transition.primary};
  line-height: 1.2;
  text-align: ${({ align }) => align};
  text-transform: none;
  & th{
    color: ${({ theme }) => theme.text.straight};
    font-size: 15px;
    padding: 14px;
    min-height: 55px;
    font-weight: 500;
    background: ${({ theme }) => theme.background.card};
  }
  & td {
    color: ${({ theme }) => theme.text.straight};
    font-size: 14px;
    min-height: 55px;
    padding: 14px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.background.straight};
  }
  & th{
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    &:first-child{
      border-left: 1px solid #f6f6f6;
    }
    &:last-child{
      border-right: 1px solid #f6f6f6;
    }
  }
  & th, td{
    &:first-child{
      border-radius: ${({ theme }) =>
        `${theme.borderRadius.table} 0 0 ${theme.borderRadius.table}`};
    }
    &:nth-last-child(-n + 2) {
      @media(max-width: ${devices.laptopS}){
        visibility:hidden;
      } 
    }
    &:last-child{
      border-radius: ${({ theme }) =>
        `0 ${theme.borderRadius.table} ${theme.borderRadius.table} 0`};
    }
  }
  &:nth-child(odd){
    background: ${({ theme }) => theme.background.card};
  }
  &:hover {
    background: ${({ theme, header, onClick }) =>
      header ? 'unset' : onClick && theme.background.tableHover}
    transition: ${({ theme }) => theme.transition.primary};
  }
`
const TableRow = (props) => {
  const { children, header, onClick, to, align = 'left', ...rest } = props
  return (
    <Row header={header} onClick={onClick} to={to} align={align} {...rest}>
      {React.Children.map(children, (child) => {
        if (!child) return null
        return React.cloneElement(child, { header, align })
      })}
    </Row>
  )
}
export default TableRow
