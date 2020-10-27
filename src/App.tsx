import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GlobalStateProvider from "./store/GlobalStateProvider";
function App() {
  return (
    <>
      <GlobalStateProvider>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </GlobalStateProvider>
    </>
  );
}

export default App;
