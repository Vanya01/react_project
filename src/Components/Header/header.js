import logo from "../imgs/Pinball.png";
import user from "../imgs/user.png";
import './header.css'






function Header(props){
      // function changeTheme(){
      //     if(props.theme === "light"){
      //         props.setThemes("dark")
      //     }else {
      //         props.setThemes("light")
      //     }
      // }


    return(
        <header className={`main_header container `}>
            <div className={`header d-flex`}>
                {/*<button className={'change_btn'}>*/}
                {/*    Choose dark side*/}
                {/*</button>*/}
                <img src={logo} alt="logo"/>
                <span className={'menu_burger'}> </span>
                <form className={'form'}>
                    <input className={'top_input'} type="text" placeholder={'Let me find your movie'} />
                </form>
                <div className={'user d-flex'}>
                    <img src={user} alt="user"/>
                    <p>Username here</p>
                </div>
            </div>
        </header>
    )
}
export {Header}