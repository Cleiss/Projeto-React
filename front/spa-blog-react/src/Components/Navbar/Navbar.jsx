import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/LogoBN.png"
import {Nav, ImgLogo, InputSearch, ErrorSpan} from "../Navbar/NavbarStyled.jsx"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { ButtonSpace } from "../Button/ButtonStyled.jsx"

const searchSchema = z.object({
    title: z.string().nonempty({message:"Pesquise por um título"}).refine(value => !/^\s*$/.test(value), {message:"Pesquise por um título"})
})

/* refine(value => !/^\s*$/.test(value)) testa se há apenas espaço na espaço e
     está negando para que não deixe ter apenas espaço */

export function Navbar() {

    /*constante descontruída com origem no hook form*/
    /*register: registra cada input; handleSubmit: método para o 'submit'*/
    const {register, 
        handleSubmit, 
        reset,
        formState: {errors}
        } = useForm({
        resolver: zodResolver(searchSchema)
    }) 

    const navigate = useNavigate()

    function onSearch (data) {
        const {title} = data
        navigate(`/search/${title}`)
        reset() /* limpa automaticamente o campo de pesquisa após pesquisar/navegar */
    }

    function goAuth () {
        navigate('/auth')
    }

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
                

                <ButtonSpace onClick={goAuth}>Entrar</ButtonSpace>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet/>
        </>
    )
}