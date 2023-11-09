import  {Navbar}  from "../../Components/Navbar/Navbar.jsx"

export function Home() {
    /*
    return apenas retorna uma única tag ou fragment, então todas as outras precisam estar envolvidas/aninhadas numa só.
    fragment é uma tag vazia. não necessariamente precisa ser uma section, por exemplo, ou algo do tipo.
    */
    return (

        <section>
            <Navbar/>
            <h1>Olá Cleitin!</h1>
        </section>

    )
}