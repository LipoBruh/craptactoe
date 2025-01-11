import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage.jsx'
import Game from './pages/Game.jsx'
import Index from './pages/Index.jsx'
import Page404 from './pages/Page404.jsx'
import Room from './pages/Room.jsx'
import Layout from './pages/Layout.jsx';



// See Notes/ReactRoutes.md for extra details
// Routing of various pages of our app
const router = createBrowserRouter([
  
  {
    path:'/',
    element: <Index/>,
    errorElement: <Page404/>
    },
  {
    path:'/tictactoe',
    element: <Layout/>,
    children:[
        {
          path:'/tictactoe/loading',
          element: <LoadingPage/>
        },
        {
          path:'/tictactoe/room/:roomID',
          element: <Room/>,
          action: null,
        },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
