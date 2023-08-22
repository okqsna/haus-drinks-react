import './MainPage.scss';
import 'animate.css';
import Typewriter from "typewriter-effect";
const MainPage=({daysRemaining})=>{
    return(
        <div className='MainPage'>
            <div className="congrat__MainPage">
                <div className="row1__congrat__MainPage">
                <div className="img1__congrat__MainPage"></div>
                </div>
                <div className="txt__congrat__MainPage">
                    <h3>sweet <span>sixteen,</span><br/>besties</h3>
                </div>
                <div className="row2__congrat__MainPage">
                  <div className="img2__congrat__MainPage"></div>
                </div>
            </div>
            <div className="mainContent__MainPage">
                <div className="txtMain__mainContent__MainPage">
                    <p className="p1__txtMain">Запрошую тебе на святкування</p>
                    <p className="p2__txtMain">мого <span>шістнадцятого</span><br/> дня народження!</p>
                </div>
                <div className="heartrow__mainContent__MainPage">
                    <div className="img__heartrow__MainPage"></div>
                </div>
                <div className="addTxt__mainContent__MainPage">
                    <p>Субота,<br/> <span>26 серпня</span> о 14:00 <br/>вул. Шашкевича, 78 <br/> (басейн)</p>
                </div>
            </div>

            <div className="addContent__MainPage">
                <p className="p__addContent__MainPage">
                З собою мати <span>гарний</span> настрій, <br/><span>spf</span> та <span>купальник</span>
                </p>
                <div className="countdown__addContent__MainPage">
                    <p>see you in <span>{daysRemaining}</span> days</p>
                </div>
            </div>
            <div className="playlist__MainPage">
                <p className="p__playlist__MainPage">а поки заряджайся енергією<br/> від цього плейлисту</p>
                <div className="row__playlist__MainPage">
                    <div className="img__row__playlist__MainPage"></div>
                </div>
                <div className="player__playlist__MainPage">
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/4Y64Ehi2u4xadpgYhGoP3w?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <div className="creator__MainPage">
                <p>created by your <br/>birthday girl Oksy</p>
            </div>
        </div>
    )
}
export default MainPage;