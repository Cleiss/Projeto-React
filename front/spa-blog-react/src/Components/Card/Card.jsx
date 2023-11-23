import { CardBody, CardContainer, CardFooter } from "./CardStyle.jsx";


export function Card(props) {
    //console.log(news)
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <img src={props.banner} alt="Imagem" />
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.likes}</span>
                </div>

                <div>
                    <i className="bi bi-chat"></i>
                    <span>{props.comments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}


/* 
o uso de chaves dentro do HTML para inserir JS é chamado de ''interpolação de dados''. exemplo: <h2>{news.title}</h2>
''news'' vem de home.jsx, passado como ''prop'' e trazendo o index e o item do array.
*/