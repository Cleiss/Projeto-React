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
                    {!news.length ?
                        'Nenhum resultado encontrado para:' :
                        `${news.length} ${news.length > 1 ? 'resultados encontrados para:' :
                            'resultado encontrado para:'}`
                    }
                </span>
                <h2>{title}</h2>
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