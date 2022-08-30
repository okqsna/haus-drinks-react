import './First.css'
import hausLogo from './img/logo.svg'
function First(){
    return (
        <div className='page1__wrapp'>
            <div className="header__page1">
            <div className="info__left">
                        <a href="/#" className="a1__left">shop</a>
                        <a href="/#" className="a2__left">membership</a>
                        <a href="/#" className="a3__left">our story</a>
                        <a href="/#" className="a4__left">/</a>
                    </div>
                    <div className="logo__header">
                        <img src={hausLogo} alt="logo"></img>
                    </div>
                    <div className="info__right">
                        <a href="/#" className="a1__right">newsletter</a>
                        <a href="/#" className="a2__right">account</a>
                        <a href="/#" className="a3__right">contacts</a>
                    </div>
            </div>
            <div className='main__page1'>
            <div className="page1__left"></div>
                <div className="page1__right">
                    <div className="txt__right">
                        <h1>Alcohol for the <br></br> modern drinker</h1>
                        <p>Light and refreshing flavors made with real, clean ingredients you can 
                        feel good about. Just pour, sip, and enjoy.</p>
                    </div>
                    <a href="/#">shop all</a>
                </div>
            </div>
        </div>
    )
}
export default First;