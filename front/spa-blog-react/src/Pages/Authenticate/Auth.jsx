import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button/Button";
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../Components/Navbar/NavbarStyled";
import { signupSchema } from "../../schemas/signupSchema";
import { signin, signup } from "../../Services/userServices";
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"

export function Authentication() {

    const {
        register: registersignup,
        handleSubmit: handleSubmitsignup,
        formState: { errors: errorsSignup }
    } = useForm(

        {
            resolver: zodResolver(signupSchema)
        }
    )

    const {
        register: registersignin,
        handleSubmit: handleSubmitsignin,
        formState: { errors: errorsSignin }
    } = useForm(

        {
            resolver: zodResolver(signinSchema)
        }
    )

    const navigate = useNavigate()


    async function signinSubmit(data) {
        try {
            const response = await signin(data)
            Cookies.set("token", response.data.token, {expires: 1})
            navigate("/")
        }
        catch (erro) {
            console.log(erro)
        }
    }

    async function signupSubmit(data) {
        try {
            const response = await signup(data)
            Cookies.set("token", response.data.token, {expires: 1})
            navigate("/profile")
            //console.log(response)
        }
        catch (erro) {
            console.log(erro)
        }
    }

    return (
        <AuthContainer>
            <Section type='signin'>
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitsignin(signinSubmit)}>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        register={registersignin}
                    />
                    {errorsSignin.email && (
                        <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>)}

                    <Input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        register={registersignin}
                    />
                    {errorsSignin.senha && (
                        <ErrorSpan>{errorsSignin.senha.message}</ErrorSpan>)}

                    <Button type="submit" text="Entrar" />
                </form>
            </Section>

            <Section type='signup'>
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitsignup(signupSubmit)}>
                    <Input
                        type="nome"
                        placeholder="Nome"
                        name="nome"
                        register={registersignup}
                    />
                    {errorsSignup.nome && (
                        <ErrorSpan>{errorsSignup.nome.message}</ErrorSpan>)}

                    <Input
                        type="username"
                        placeholder="Username"
                        name="username"
                        register={registersignup}
                    />
                    {errorsSignup.username && (
                        <ErrorSpan>{errorsSignup.username.message}</ErrorSpan>)}

                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        register={registersignup}
                    />
                    {errorsSignup.email && (
                        <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>)}

                    <Input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        register={registersignup}
                    />
                    {errorsSignup.senha && (
                        <ErrorSpan>{errorsSignup.senha.message}</ErrorSpan>)}

                    <Input
                        type="password"
                        placeholder="Confirmar Senha"
                        name="confpassword"
                        register={registersignup}
                    />
                    {errorsSignup.confpassword && (
                        <ErrorSpan>{errorsSignup.confpassword.message}</ErrorSpan>)}

                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}