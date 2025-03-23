import './Footer.css'
import Container from '../Container/Container'
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <Container>
                    <span className="footer__line"></span>
                    <p className="footer__info">2022 © Made with love by me</p>
                </Container>
            </footer>
        </>
    )
}