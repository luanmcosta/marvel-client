import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ComicsProvider from './contexts/ComicsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ComicsProvider>
      <App />
    </ComicsProvider>
  </>
)
