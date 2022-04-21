import "./App.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import ShowPage from "./components/ShowPage";
import ShowSearch from "./components/ShowSearch";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Nav value={value} setValue={setValue} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/show/:id">
          <ShowPage />
        </Route>

        <Route path="/search/:search">
          <ShowSearch value={value} setValue={setValue} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
