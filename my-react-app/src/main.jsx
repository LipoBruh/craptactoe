import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';


const router = createBrowserRouter([
  {
  path:'/',
  element: <App/>,
  errorElement: <App/>
  },
  {
    path:'/loading',
    element: <LoadingPage/>
  },
  {
    path:'/tictactoe',
    element: <Game/>
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
