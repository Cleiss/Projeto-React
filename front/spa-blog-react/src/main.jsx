import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Pages/Home/Home'
import { Search } from './Pages/Search/Search'
import { GlobalStyled } from './GlobalStyled.jsx'
import { Authentication } from './Pages/Authenticate/Auth.jsx'
import { Profile } from './Pages/UserProfile/Profile.jsx'
import UserProvider from './Context/UserContext.jsx'

const router = createBrowserRouter([
  {
    //endereço da rota
    path: "/",

    //rota mãe
    element: <Navbar />, /* element é um 'page.jsx' */

    //
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
      {
        path: "/profile",
        element:<Profile/>
      }
    ]
  },
  {
    path: "/entrar",
    element: <Authentication />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyled />

    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>

  </React.StrictMode>,
) /* 'App' foi substituído por 'RouterProvider router={router}' devido ao uso do React Router Dom.*/
