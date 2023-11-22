// Theme
import { storageData } from '../utils/storage'

const primaryColor = '#2f80ed'
const orangeColor = '#f96526'
const redColor = '#eb5757'
const primaryBorderColor = '#e4e9f2'
const inputBorderColor = '#e4e5eb'
const buttonBorderColor = '#ced0dd'

// let query = window.matchMedia(`(min-width: 100px)`)

export const light = () => {
  return {
    width: {
      sideMenu: {
        open: '250px',
        close: '60px',
      },
      messageMenu: {
        open: '350px',
        close: '0px',
      },
      dashboard: {
        card: '250px',
      },
      doctor: {
        maxWidth: '300px',
        minWidth: '250px',
      },
    },
    height: {
      dashboard: {
        card: '100px',
      },
      department: {
        card: '10rem',
      },
    },
    borderRadius: {
      straight: '0px',
      primary: '6px',
      card: '15px 15px 0px 0px',
      table: '0px',
      input: '40px',
      button: '10px',
      search: '6px',
    },
    boxShadow: {
      primary: '0 2px 15px rgba(211, 216, 224, 0.5)',
      secondary: ' 7px 1px 61px 4px rgba(34, 60, 80, 0.1)',
      straight: '0 2px 15px rgba(211, 216, 224, 0.5)',
    },
    text: {
      primary: '#2c3a50',
      secondary: '#7d8893',
      title: '#36434e',
      label: '#8f9bb0',
      tableHead: '#25282B',
      tableBody: '#52575C',
      placeholder: '#b2b7bf',
      //
      straight: 'black',
      draight: '#52575c',
      graight: '#336cfb',
      praight: 'black',
      blaight: 'lightgrey',
      cardSubTitle: 'gray',
    },
    background: {
      linkHover: '#eaf2fd',
      buttonSecondary: '#fbfbfc',
      input: '#f1f3f5',
      inputHover: '#edf1f7',
      tableHead: '#E8E8E8',
      tableOdd: '#FFFFFF',
      tableHover: '#edf1f7',
      thumb: '#ccc',
      cardInfo: '#E8ECF4',
      //
      body: 'rgb(246,248,251)',
      navbar: '#ffffff',
      sideMenu: '#ffffff',
      card: '#ffffff',
      modalHeader: '#fffff',
      search: '#BFBFBF',
    },
    palette: {
      primary: primaryColor,
      secondary: '#eaf2fd',
      orange: orangeColor,
      black: '#000',
      white: '#fff',
      red: redColor,
      green: '#219653',
    },
    transition: {
      primary: 'all .2s ease-in-out',
      secondary: 'all .4s ease-in-out',
    },
  }
}

export const dark = () => {
  return {
    width: {
      sideMenu: {
        open: '250px',
        close: '60px',
      },
      messageMenu: {
        open: '350px',
        close: '0px',
      },
      dashboard: {
        card: '250px',
      },
      doctor: {
        maxWidth: '300px',
        minWidth: '250px',
      },
    },
    height: {
      dashboard: {
        card: '100px',
      },
      department: {
        card: '10rem',
      },
    },
    borderRadius: {
      straight: '0px',
      primary: '6px',
      card: '15px 15px 0px 0px',
      table: '0px',
      input: '40px',
      button: '10px',
      search: '6px',
    },
    boxShadow: {
      primary: '0 2px 15px rgba(211, 216, 224, 0.5)',
      secondary: ' 7px 1px 61px 4px rgba(34, 60, 80, 0.1)',
      straight: '7px 1px 61px 4px rgba(34, 60, 80, 0.1)',
    },
    text: {
      primary: '#2c3a50',
      secondary: '#7d8893',
      title: '#36434e',
      label: '#8f9bb0',
      tableHead: '#25282B',
      tableBody: '#52575C',
      placeholder: '#b2b7bf',
      //
      straight: '#fefefe',
      draight: '#5e6380',
      graight: '#56a74f',
      praight: 'white',
      blaight: '#1e1e21',
      cardSubTitle: '#7f838a',
    },
    background: {
      linkHover: '#eaf2fd',
      buttonSecondary: '#fbfbfc',
      input: '#f1f3f5',
      inputHover: '#edf1f7',
      tableHead: '#E8E8E8',
      tableOdd: '#FFFFFF',
      tableHover: '#edf1f7',
      thumb: '#ccc',
      cardInfo: '#E8ECF4',
      //
      body: '#000000',
      navbar: '#181b23',
      sideMenu: '#181b23',
      card: '#181b23',
      modalHeader: '#1f2224',
      search: '#35403A',
    },
    palette: {
      primary: primaryColor,
      secondary: '#eaf2fd',
      orange: orangeColor,
      black: '#000',
      white: '#fff',
      red: redColor,
      green: '#219653',
    },
    transition: {
      primary: 'all .2s ease-in-out',
      secondary: 'all .4s ease-in-out',
    },
  }
}
