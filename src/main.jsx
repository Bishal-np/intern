import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/base/common.scss"
import "../src/scss/base/variable.scss"
import "../src/scss/pages/home.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
