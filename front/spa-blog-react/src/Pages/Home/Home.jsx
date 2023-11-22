import { Navbar } from "../../Components/Navbar/Navbar.jsx"
import { Card } from "../../Components/Card/Card.jsx"
import { news } from "../../Datas.js"
import { HomeBody } from "./HomeStyled.jsx"

export function Home() {
    /*
    return apenas retorna uma única tag ou fragment, então todas as outras precisam estar envolvidas/aninhadas numa só.
    fragment é uma tag vazia. não necessariamente precisa ser uma section, por exemplo, ou algo do tipo.
    */
    return (

        <section>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => {
                    return <Card key={index} news={item} />
                })}
            </HomeBody>


        </section>

    )
}

/* .map é um HOF (high order function). pesquisar sobre. */