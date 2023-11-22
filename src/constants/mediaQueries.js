export const devices = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '550px',
  tabletL: '800px',
  laptopS: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px',
}

const getMinWidth = (width) => `(min-width: ${width})`

export const mediaQueries = {
  mobileS: getMinWidth(devices.mobileS),
  mobileM: getMinWidth(devices.mobileM),
  mobileL: getMinWidth(devices.mobileL),
  tabletS: getMinWidth(devices.tabletS),
  tabletL: getMinWidth(devices.tabletL),
  laptopS: getMinWidth(devices.laptopS),
  laptopM: getMinWidth(devices.laptopM),
  laptopL: getMinWidth(devices.laptopL),
  desktop: getMinWidth(devices.desktop),
}
