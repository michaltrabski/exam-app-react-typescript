import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/SideMenu";
import ExamPage from "./pages/ExamPage";

import Exam95 from "./pages/Exam95";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getQuestions } from "./redux/actions/questionsActions";
import { label } from "./settings/settings";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path={label.topMenuHome.url} component={HomePage} />
            <Route path={label.topMenuLogin.url} component={Login} />
            <Route path={label.topMenuRegister.url} component={Register} />
            <Route path={label.topMenuExam95.url} component={Exam95} />
            <Route path={label.topMenuExam.url} component={ExamPage} />
          </Switch>
          <Footer />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
