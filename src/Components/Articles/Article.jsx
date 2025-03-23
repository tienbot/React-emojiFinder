import './Article.css'

export default function Article({info}){

    info.keywords = info.keywords.split(' ')
    info.keywords = [... new Set(info.keywords)]
    info.keywords = info.keywords.join(' ')
    
    return(
        <article className='article'>
            <div className="article__div">
                <p className="article__div_img">{info.symbol}</p>
            </div>
            <div className="article__info">
                <p className="article__info_code">{info.title}</p>
                <p className="article__info_text">{info.keywords}</p>
            </div>
        </article>
    )
}