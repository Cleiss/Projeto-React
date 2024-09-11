import { createContext, useState } from "react"

export const UserContext = createContext()

export default function UserProvider ({children}) {

    const [user, setUser] = useState({})

    return ( 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
    //tudo que for children recebe o gerenciamento de estado useState.
    //em main.jsx está definido quem é children (<RouterProvider router={router} />)
    //tudo nessa rota receberá o Context.
}