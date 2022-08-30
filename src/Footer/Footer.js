import './Footer.css'

function Footer(){
    return (
        <div className='footer__wrapp'>
            <div className='top__footer'>
                <h2>Stay posted</h2>
                <p>Let's be friends. Subscribe to our social medias to receive updates on new launches, recipes, playlists, and more.</p>
            </div>
            <div className='bottom__footer'>
                <p>© Haus 2021</p>
                <a href="/#">Contact Us</a>
                <a href="/#">Return Policy</a>
                <a href="/#">Privacy Policy</a>
                <a href="/#">Terms & Conditions</a>
            </div>
        </div>
    )
}
export default Footer;