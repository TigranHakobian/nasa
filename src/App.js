import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import NearbyAsteroids from "./pages/NearAsteroids";
import AstronomyPictureOfTheDay from "./pages/AstronomyPictureOfTheDay";
import NewPlanet from "./pages/NewPlanet";

const App = () => {
  return (
              <Router>
                  <Switch>
                     <Route path="/home"  exact component={Home}/>
                     <Route path="/nearbyasteroids" component={NearbyAsteroids}/>
                     <Route path="/astronomypictureoftheday" component={AstronomyPictureOfTheDay}/>
                     <Route path="/newplanet" component={NewPlanet}/>
                  </Switch>
              </Router>
  );
}

export default App;


