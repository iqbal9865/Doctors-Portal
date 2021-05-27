import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
