import Homepage from "./pages/Homepage";
import AboutEachPokemon from "./pages/AboutEachPokemon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MissingPage from "./components/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about/:id">
          <AboutEachPokemon />
        </Route>
        <Route path="*" component={MissingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
