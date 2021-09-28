import './App.css';
import {Header} from "./Components/Header/header";
import {MoviesList} from "./Components/MoviesList/MoviesList";
import {GlobalStyles} from "./Components/themes/globalStyles";
import {lightTheme,darkTheme} from "./Components/themes/Themes";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Card} from "./Components/actions/action";
import {ThemeProvider} from "styled-components";
import {useState} from "react";




     function App() {

         const [theme, setTheme] = useState ( 'light');



         const themeToggler = () => {

             theme === 'light' ? setTheme('dark') : setTheme('light')

         }






  return (

      <BrowserRouter >
          <ThemeProvider theme = {theme === 'light'? lightTheme: darkTheme}>
                  <div className = "App">
                        <div className={`contentWrap`}>
                      <button onClick = {themeToggler} className={'change_theme'}> Switch Theme </button>
                         <Header/>
                     <Switch>
                         <Route path={'/home'} component={MoviesList}/>
                         <Route path={'/about'} component={Card}/>
                          <MoviesList/>
                      </Switch>
                       </div>
                  </div>
                  <GlobalStyles/>
          </ThemeProvider>
      </BrowserRouter>


  );
     }

export default App
