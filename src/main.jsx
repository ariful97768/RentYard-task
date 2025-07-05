import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Context from './ContextProvider/Context'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <Context>
    <StrictMode>
      <Layout />
    </StrictMode> 
  </Context>
)
