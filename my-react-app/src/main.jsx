import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './pages/App.jsx'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage.jsx'
import Game from './pages/Game.jsx'
import Index from './pages/Index.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Index/>,
  errorElement: <Index/>
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
