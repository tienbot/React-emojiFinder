import './Header.css'
import Form from '../Form/Form'
import Container from '../Container/Container'

export default function Header(props){
    return(
        <>
            <header className="header">
                <Container>
                    <div className="header__title">
                        <h1>Emoji Finder</h1>
                        <p className="header__title_text">Find emoji by keywords</p>
                    </div>
                    <Form setInputData={props.setInputData}/>
                </Container>
            </header>
        </>
    )
}