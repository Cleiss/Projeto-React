import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/LogoBN.png"
import { Nav, ImgLogo, InputSearch, ErrorSpan, UserLoggedSpace } from "../Navbar/NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../Components/Button/Button";
import { searchSchema } from "../../schemas/searchSchema.js"
import { userLogged } from "../../Services/userServices.js"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { Profile } from "../../Pages/UserProfile/Profile.jsx"


export function Navbar() {

    /*constante descontruída com origem no hook form*/
    /*register: registra cada input; handleSubmit: método para o 'submit'*/
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(searchSchema)
    })

    const navigate = useNavigate()
    const [user, setUser] = useState({

    })

    function onSearch(data) {
        const { title } = data
        navigate(`/search/${title}`)
        reset() /* limpa automaticamente o campo de pesquisa após pesquisar/navegar */
    }

    async function finduserLogged() {
        try {
            const response = await userLogged()
            setUser(response.data)
        }
        catch (erro) {
            console.log(erro.message)
        }
    }

    function signout() {
        Cookies.remove("token")
        setUser(undefined)
        navigate("/")
    }

    useEffect(() => {
        if (Cookies.get("token")) {
            finduserLogged()
        }
    }, [])

    /* input precisa estar dentro de um form */
    /* '...' = spread operator (pega vários dados): '...register' */
    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSearch>
                        <button type='submit'>
                            <i className="bi bi-search"></i>
                        </button>
                        <input
                            {...register('title')}
                            type="text"
                            placeholder="Pesquisar" />
                    </InputSearch>
                </form>

                <Link to='/'>
                    <ImgLogo src={logo} alt="logo BN" />
                </Link>

                {!user ? (
                    <Link to='/entrar'>
                        <Button text="Entrar" />
                    </Link>
                ):
                    (<UserLoggedSpace>
                        <h2>{user.nome}</h2>
                        <i className="bi bi-box-arrow-right" onClick={signout}></i>
                    </UserLoggedSpace>)
                }
            </Nav>

            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}

            <Outlet />
        </>
    )
}