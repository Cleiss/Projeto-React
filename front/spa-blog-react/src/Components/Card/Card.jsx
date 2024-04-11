import { TextLimit } from "../TextLimit/textLimit.jsx";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyle.jsx";


export function Card(props) {
    //console.log(news)
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.title}</h2>
                        <TextLimit text={props.text} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{props.likes?.length}</span>
                        </section>

                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{props.comments?.length}</span> 
                        </section>
                    </CardFooter>
                </div>

                <img src={props.banner} alt="Imagem" />
            </CardBody>

        </CardContainer>
    )
}


/* 
o uso de chaves dentro do HTML para inserir JS é chamado de ''interpolação de dados''. exemplo: <h2>{news.title}</h2>
''news'' vem de home.jsx, passado como ''prop'' e trazendo o index e o item do array.
em props.likes?.length ou props.comments?.length, o uso de ''?'' é chamado de optional chain,
isso indica que as variáveis likes e comments podem ser nulas.
*/