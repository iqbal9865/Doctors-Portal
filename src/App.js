import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment/Appointment'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
        <Route path='/about'>
            <About />
        </Route>
         <Route path='/appointment'>
            <Appointment />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
