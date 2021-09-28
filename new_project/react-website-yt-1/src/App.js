import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Components/home/Home";



function App() {
  return (
   <Router>
     <NavBar/>
       <Switch>
           <Route path={'/'} exact component={Home} />
       </Switch>
   </Router>
  );
}

export default App;
