import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import createStore from './etc/store'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

//Lealfet configuration
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'arch-editor/dist/arch-editor.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const initialState = window.__INITIAL_STATE__
const store = createStore(initialState).store
const persistor = createStore(initialState).persistor
const routes = require('./containers').default

root.render(
  <React.Fragment>
    <BrowserRouter>
      <App routes={routes(store)} store={store} persistor={persistor} />
    </BrowserRouter>
  </React.Fragment>
)
