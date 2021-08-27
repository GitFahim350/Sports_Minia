import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Teamdetails from './Components/Teamdetails/Teamdetails';
import SocialLink from './Components/SocialLink/SocialLink';

function App() {
  return (

    <Router>
     


      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/team/:teamid">
          <Teamdetails></Teamdetails>

        </Route>
        
        <Route path="*">
          <h1>Not Found!!!</h1>
        </Route>

      </Switch>

    </Router>




  );
}

export default App;
