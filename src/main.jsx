import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

const appContent = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, appContent)
} else if (rootElement) {
  ReactDOM.createRoot(rootElement).render(appContent)
}
