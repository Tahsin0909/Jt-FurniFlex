import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ContextApi } from './authProvider/ContextApi.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>

)
