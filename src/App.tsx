import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/routes'
import { ThemeProvider } from './components/common/ThemeProvider'
import { Toaster } from "./components/ui/sonner"
function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}

export default App
