import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App'
import Context from './ContextProvider/Context'

createRoot(document.getElementById('root')).render(
  <Context>
    <StrictMode>
      <App />
    </StrictMode>,
  </Context>
)
