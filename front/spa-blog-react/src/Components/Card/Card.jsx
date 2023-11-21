export function Card({news}) {
    //console.log(news)
    return (
        <section>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <img src={news.image} alt="Imagem" />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{news.likes}</span>
            <i className="bi bi-chat"></i>
            <span>{news.comments}</span> 
        </section>
    )
}


/* 
o uso de chaves dentro do HTML para inserir JS é chamado de ''interpolação de dados''. exemplo: <h2>{news.title}</h2>
''news'' vem de home.jsx, passado como ''prop'' e trazendo o index e o item do array.
*/