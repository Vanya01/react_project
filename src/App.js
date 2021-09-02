import './App.css';
import {Header} from "./Components/Header/header";
import {MoviesList} from "./Components/MoviesList/MoviesList";



function App() {

  return (
     <div className="Main_div">
         <Header/>
         <MoviesList/>
    </div>
  );
}

export default App;
