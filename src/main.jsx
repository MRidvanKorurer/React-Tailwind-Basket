import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ManinLayout from './layouts/ManinLayout.jsx'
import { Provider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider>
    <ManinLayout>
      <App />
    </ManinLayout>
  </Provider>
  // </React.StrictMode>,
)
