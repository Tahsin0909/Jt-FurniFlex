import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ContextApi } from './authProvider/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <QueryClientProvider client={QueryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextApi>
  </React.StrictMode>

)
