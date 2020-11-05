import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import NavbarMobile from "./components/NavbarMobile";

import Exams95 from "./pages/Exams95";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getQuestions } from "./redux/actions/questionsActions";
import { label } from "./settings/settings";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={label.login.url} component={Login} />
          <Route path={label.register.url} component={Register} />
          <Route path={label.exams95.url} component={Exams95} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
