import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/LogoBN.png"
import {Button, Nav, ImgLogo, InputSearch} from "../Navbar/NavbarStyled.jsx"
import {useForm} from "react-hook-form"

export function Navbar() {

    const {register, handleSubmit, reset} = useForm()
    const navigate = useNavigate()

    function onSearch (data) {
        const {title} = data
        navigate(`/search/${title}`)
        reset()
    }

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
                

                <Button>Entrar</Button>
            </Nav>
            <Outlet/>
        </>
    )
}