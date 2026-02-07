import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import CustomCursor from './components/main/CustomCursor'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router}/>
    <ToastContainer />
    <CustomCursor />
  </StrictMode>,
)
