import { Navbar } from "../../Components/Navbar/Navbar.jsx"
import { Card } from "../../Components/Card/Card.jsx"
import { HomeBody, HomeHeader } from "./HomeStyled.jsx"
import { getAllPosts, getTopPost } from "../../Services/postsServices.js"
import { useEffect, useState } from "react" //atualiza o estado inicial. neste caso, atualizará 'news'.

export function Home() {

    const [news, setNews] = useState([]) //em useState([]), 'news' inicia como um array vazio. 'setNews' é uma função que altera o estado de 'news'.
    const [topnew, setTopNew] = useState({})


    async function findAllPosts() {
        const allPosts = await getAllPosts()

        setNews(allPosts.data.results) //atualização do estado de 'news'.

        const topNew = await getTopPost()

        setTopNew(topNew.data.news)
    }


    useEffect(() => {
        findAllPosts()
    }, [])

    return (

        <section>
            <Navbar />
            <HomeHeader>
                <Card
                    top={true}
                    key={topnew.id}
                    title={topnew.title}
                    text={topnew.text}
                    banner={topnew.banner}
                    likes={topnew.likes}
                    comments={topnew.comments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes}
                        comments={item.comments}
                    />
                ))}
            </HomeBody>


        </section>

    )
}

/* 
    .map é um HOF (high order function). pesquisar sobre.

    return apenas retorna uma única tag ou fragment, então todas as outras precisam estar envolvidas/aninhadas numa só.
    fragment é uma tag vazia. não necessariamente precisa ser uma section, por exemplo, ou algo do tipo.

    useState() é um hook.
    
*/