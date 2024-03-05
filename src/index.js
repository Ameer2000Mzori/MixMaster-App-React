import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import App from './App'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    <App />
  </QueryClientProvider>
)
