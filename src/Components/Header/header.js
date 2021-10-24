import logo from "../imgs/Pinball.png";
import user from "../imgs/user.png";
import './header.css'
import Search from "../search/Search";
import React from "react";



function Header(){



    return(

        <header className={`main_header  container`}>
            <div className={`header d-flex  `} >
                <img src={logo} alt="logo" title={'Scroll up'}  onClick={() => window.scroll(0,0)}/>
                <span className={'menu_burger'}> </span>
  <Search/>



                <span className="user"> <img src={user} alt="user"/>
                    <p>Username here</p></span>
            </div>
        </header>

    )
}
export {Header}