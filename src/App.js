import React, { Fragment, useState, createContext } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { dark, light } from './constants/theme'
import { storageData } from './utils/storage'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import RoutesWithSubRoutes from './components/RoutesWithSubRoutes'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const Container = styled('div')`
  display: flex;
  background-color: ${({ theme }) => theme.background.body};
  transition: background-color 0.5s;
`
export const Theme = createContext()

const App = ({ routes, store, persistor }) => {
  const [theme, setTheme] = useState('light')
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme == 'dark' ? dark : light}>
        <PersistGate loading={null} persistor={persistor}>
          <Theme.Provider value={{ theme, setTheme }}>
            <Container>
              {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Hospital System</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet> */}
              <RoutesWithSubRoutes routes={routes} />
              <ToastContainer />
            </Container>
          </Theme.Provider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  )
}

export default App
