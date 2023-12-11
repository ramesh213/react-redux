import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider, useStore } from 'react-redux'
import UserReducer from './UserReducer.jsx'

const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
