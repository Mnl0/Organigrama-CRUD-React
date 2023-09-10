import './Footer.css';

const Footer = (props) => { 
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className='redes'>
            <a href="https://www.facebook.com/">
                <img src="/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
                <img src="/img/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.twitter.com/">
                <img src="/img/twitter.png" alt="twitter" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="logo" />
        <strong> Manuel Monjes © 2021</strong>
    </footer> 
}

export default Footer;