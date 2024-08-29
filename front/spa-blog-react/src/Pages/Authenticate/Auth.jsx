import { ButtonSpace } from "../../Components/Button/ButtonStyled";
import { Input } from "../../Components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";

export function Authentication() {
    return (
        <AuthContainer>
            <Section type='signin'>
                <h2>Entrar</h2>
                <form>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <Input
                        type="senha"
                        placeholder="Senha"
                        name="senha"
                    />
                    <ButtonSpace type="submit">Entrar</ButtonSpace>
                </form>
            </Section>
            <Section type='signup'>
                <h2>Cadastrar</h2>
                <form>
                    <Input
                        type="nome"
                        placeholder="Nome"
                        name="nome"
                    />
                    <Input
                        type="username"
                        placeholder="Username"
                        name="username"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <Input
                        type="senha"
                        placeholder="Senha"
                        name="senha"
                    />
                    <Input
                        type="confsenha"
                        placeholder="Confirmar Senha"
                        name="confsenha"
                    />
                    <ButtonSpace type="submit">Cadastrar</ButtonSpace>
                </form>
            </Section>
        </AuthContainer>
    )
}