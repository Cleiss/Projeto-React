import logo from "../../images/LogoBN.png"
import {Button, Nav, ImgLogo, InputSearch} from "../Navbar/NavbarStyled.jsx"

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSearch>
                    <i className="bi bi-search"></i>
                    <input type="text"
                        placeholder="Pesquisar" />
                </InputSearch>

                <ImgLogo src={logo} alt="logo BN" />

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}