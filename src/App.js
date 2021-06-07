import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import React,{useEffect} from "react";
import NearbyAsteroids from "./pages/NearbyAsteroids";
import AstronomyPictureOfTheDay from "./pages/AstronomyPictureOfTheDay";
import NewPlanet from "./pages/NewPlanet";





 function App() {
  return (
              <Router>
                  <Header/>
                  <Switch>
                     <Route path="/home"  exact component={Home}/>
                     <Route path="/astronomypictureoftheday" component={NearbyAsteroids}/>
                     <Route path="/nearbyasteroids" component={AstronomyPictureOfTheDay}/>
                     <Route path="/newplanet" component={NewPlanet}/>
                  </Switch>
              </Router>
  );
}

export default App;


