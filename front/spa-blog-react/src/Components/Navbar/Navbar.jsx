import logo from "../../images/LogoBN.png"


function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" />
                </div>

                <img src={logo} alt="logo BN" />

                <button>Entrar</button>
            </nav>
        </>
    )
}

export default Navbar