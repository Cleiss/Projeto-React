import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button/Button";

export function Authentication() {

    const {register: registersignup, 
        handleSubmit: handleSubmitsignup,
        formState: {errors: errorssignup}
        } = useForm()

    const {register: registersignin, 
        handleSubmit: handleSubmitsignin,
        formState: {errors: errorssignin}
        } = useForm()

        function signinSubmit (data) {
            console.log(data)
        }

        function signupSubmit (data) {
            console.log(data)
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
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registersignin}
                    />
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
                    <Input
                        type="username"
                        placeholder="Username"
                        name="username"
                        register={registersignup}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        register={registersignup}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registersignup}
                    />
                    <Input
                        type="password"
                        placeholder="Confirmar Senha"
                        name="password"
                        register={registersignup}
                    />
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}