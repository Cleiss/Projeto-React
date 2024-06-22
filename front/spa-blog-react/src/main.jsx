import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Pages/Home/Home'
import { Search } from './Pages/Search/Search'
import { GlobalStyled } from './GlobalStyled.jsx'

const router = createBrowserRouter([
  {
    //endereço da rota
    path: "/",

    //rota mãe
    element: <Navbar />,

    //
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyled />

    <RouterProvider router={router} />

  </React.StrictMode>,
) /* 'App' foi substituído por 'RouterProvider router={router}' devido ao uso do React Router Dom.*/
