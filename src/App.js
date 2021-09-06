import './App.css';
import {Header} from "./Components/Header/header";
import {MoviesList} from "./Components/MoviesList/MoviesList";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Card} from "./Components/actions/action";

 // const LightTheme = {
 //     pageBackground:"white",
 //     titleColor:"#dc658b",
 //     tagLineColor:"black",
 // }
 // const DarkTheme ={
 //     pageBackground:"#282c36",
 //     titleColor:"lightpink",
 //     tagLineColor:"lavender",
 // }
 //
 // const themes = {
 //     light:LightTheme,
 //     dark:DarkTheme
 // }




function App() {

  return (

      <BrowserRouter >
          <Header/>
                  <div className={`contentWrap light`}>
          <Switch>
              <Route path={'/home'} component={MoviesList}/>
              <Route path={'/about'} component={Card}/>
              <MoviesList/>
          </Switch>
                  </div>
      </BrowserRouter>


  );
}


export default App
