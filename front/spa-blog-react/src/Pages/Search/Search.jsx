import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchNews } from "../../Services/postsServices"
import { Searchstyled, ContainerResults, TextResults } from "./SearchStyled"
import { Card } from "../../Components/Card/Card"

export function Search() {
    const { title } = useParams()
    const [news, setNews] = useState([])

    async function searchAPI() {
        try {
            const newsAPI = await searchNews(title)
            setNews(newsAPI.data.results)
        }
        catch (erro) {
            console.log(erro)
            setNews([])
        }
    }

    useEffect(() => {
        searchAPI()
    }, [title]
    )

    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {news.length
                        ? `${news.length} resultados encontrados:`
                        : 'Nenhum resultado encontrado'
                    }
                </span>
            </TextResults>

            <Searchstyled>
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
            </Searchstyled>
        </ContainerResults>
    )
}