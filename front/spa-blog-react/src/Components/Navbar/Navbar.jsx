import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/LogoBN.png"
import { Nav, ImgLogo, InputSearch, ErrorSpan } from "../Navbar/NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../Components/Button/Button";
import { searchSchema } from "../../schemas/searchSchema.js"
import { userLogged } from "../../Services/userServices.js"
import { useEffect } from "react"
import Cookies from "js-cookie"


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

    function onSearch(data) {
        const { title } = data
        navigate(`/search/${title}`)
        reset() /* limpa automaticamente o campo de pesquisa após pesquisar/navegar */
    }

    async function finduserLogged() {
        try {
            const response = await userLogged()
            console.log(response)
        }
        catch (erro) {
            console.log(erro.message)
        }
    }

    useEffect(() => {
        if (Cookies.get("token")) 
            finduserLogged()
    })

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


                <Link to='/entrar'>
                    <Button text="Entrar" />
                </Link>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}