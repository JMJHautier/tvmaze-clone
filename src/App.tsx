import "./App.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import ShowPage from "./components/ShowPage";
import ShowSearch from "./components/ShowSearch";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/show/:id">
          <ShowPage />
        </Route>

        <Route path="/search/:search">
          <ShowSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
