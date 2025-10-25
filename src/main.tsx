import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReduxProvider from './store/redux/reduxProvider.tsx'
// import { AuthProvider } from './contexts/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </ReduxProvider>
  </StrictMode>,
)
