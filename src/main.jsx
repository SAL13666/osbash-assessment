import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router/Router.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
)
