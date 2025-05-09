import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./components/theme-provider"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="wedding-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
