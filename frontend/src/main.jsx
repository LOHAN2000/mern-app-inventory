import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';

import './index.css'
import App from './App.jsx'
import { AppProvider } from './store/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    <Toaster richColors theme='system'/>
  </StrictMode>
  
)
