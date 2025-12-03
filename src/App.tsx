import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/routes'
import { ThemeProvider } from './components/common/ThemeProvider'
import { Toaster } from "./components/ui/sonner"
import { useInitializeAuth } from './features/authentication'
import Loading from './components/common/Loading'

function App() {

  const { isInitialized, isLoading } = useInitializeAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isInitialized) {
    return <div>Initializing...</div>;
  }


  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}

export default App

