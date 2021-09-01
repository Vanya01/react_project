import './App.css';
import logo from './imgs/Pinball.png'
import user from './imgs/user.png'
import card from  './imgs/cardItem.png'
import location from './imgs/location.png'
import './styles/stars.css'
import Stars from "./stars/stars";
import fb from './imgs/Facebook.png'


function App() {



  return (
     <div className="Main_div">
      <header className={'main_header container'}>
          <div className={'header d-flex'}>
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
         <div className={'main_content container'}>
             <div className="movies_list">
               <div className="movie_card">
                   <img src={card} alt="card"/>
                   <h3>Film title</h3>
                   <p><img src={location} alt="location"/> Movies </p>
                   <p>Lorem Ipsum is simply dummy text of the printing & typesetting </p>
                   <hr/>
                    <div className={'stars d-flex'}>
                        <Stars/>
                        <img src={fb} alt="facebook"/>
                    </div>

               </div>
             </div>
         </div>
     <div>
    </div>
    </div>
  );
}

export default App;
