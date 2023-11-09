import logo from "../../images/LogoBN.png"
import "./Navbar.css"


function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" 
                    placeholder="Pesquisar"/>
                </div>

                <img src={logo} alt="logo BN" />

                <button>Entrar</button>
            </nav>
        </>
    )
}

export default Navbar