import './App.css';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Works from './Works'
import Design from './Design'
import Skills from './Skills'
import Contact from './Contact'
import Profile from './Profile'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/works">
            <Works/>
          </Route>

          <Route path="/design">
            <Design/>
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/skills">
            <Skills/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
