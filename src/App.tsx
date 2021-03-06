import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { State } from "./redux/store/store";
import Dev from "./pages/Dev";
import MyModal from "./components/MyModal";
import firebase from "./firebase/firebase";
import { GetUser } from "./redux/actions/usersActions";
import { UserType } from "./redux/actions/usersActionsTypes";
import AccountPage from "./pages/AccountPage";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    // primary: {
    //   main: "#1a237e",
    // },
    // secondary: {
    //   main: "#880e4f",
    // },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  const { theme } = useSelector((state: State) => state.uiReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        const newUser: UserType = { uid: "", email: "" };
        newUser.uid = user.uid;
        newUser.email = user.email;
        dispatch(GetUser(newUser));
      } else console.log("user not logged");
    });

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(
    //     "michal.trabski123123dsadasd@gmail.com",
    //     "123123"
    //   )
    //   .then((user) => {
    //     // Signed in
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });

    firebase
      .auth()
      .signInWithEmailAndPassword("michal.trabski@gmail.com", "123123");
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* {console.log("x", theme)} */}
      {/* <Paper> */}
      <Router>
        <Navbar />

        <Switch>
          <Route exact path={label.topMenuHome.url} component={HomePage} />
          <Route path={label.topMenuLogin.url} component={Login} />
          <Route path={label.topMenuRegister.url} component={Register} />
          <Route path={label.topMenuExam95.url} component={Exam95} />
          <Route path={label.topMenuExam.url} component={ExamPage} />
          <Route path={label.topMenuMyAccount.url} component={AccountPage} />
          <Route path="/dev" component={Dev} />
        </Switch>
        <Footer />
      </Router>

      {/* <MyModal /> */}
      {/* </Paper> */}
    </ThemeProvider>
  );
}

export default App;
