import logo from '../imgs/Pinball.png';
import user from '../imgs/user.png';
import './header.css';

function Header() {
    return (
        <header className={`main_header container`}>
            <div className={`header d-flex`}>
                <img src={logo} alt={'logo'} onClick={() => window.scroll(0, 0)}/>
                <span className={'user'}> <img src={user} alt={'user'}/>
                    <p>Username here</p></span>
            </div>
        </header>

    )
}

export {Header};
