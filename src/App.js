import './App.css';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//Components
import Header from "./components/Header"
import Home from "./components/Home"
import Flags from "./components/Flags"
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/flags" exact component={Flags}/>
          <Route path="/flags/:country">
            <CountryInfo />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
