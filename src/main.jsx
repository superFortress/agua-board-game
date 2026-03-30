// I M P O R T

// Component
import App from './components/App.jsx'

// Module
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// R E T U R N

createRoot(document.getElementById('root')).render(
    //<StrictMode>
        <App />
    //</StrictMode>,
)
