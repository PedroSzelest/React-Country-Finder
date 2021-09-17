import './App.css';
import React, { useState, useEffect } from "react"
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//Components
import Header from "./components/Header"
import Home from "./components/Home"
import Flags from "./components/Flags"
import CountryInfo from './components/CountryInfo';
import Loading from "./hooks/Loading"

function App() {
  const [loading, setLoading] = useState()

  const loader = ()=> {
    setLoading(true)
    setTimeout(()=> {
        setLoading(false)
    }, 1000)
  }

  useEffect(()=> {
      loader()
  }, [])

  if(loading) {
    return (
      <Loading />
    )  
  } else {
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

}

export default App;
