import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReportPage from "./components/ReportPage";
import SummaryPage from "./components/SummaryPage";
import CreateAccount from "./components/CreateAccount";

function App() {


  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100); // fake async
    },
  };

  fakeAuth.isAuthenticated = true;


  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return fakeAuth.isAuthenticated === true ? (
            children
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/report">
              <ReportPage />
            </PrivateRoute>
            <PrivateRoute path="/summary">
              <SummaryPage />
            </PrivateRoute>
            <Route path="/createAccount" component={CreateAccount} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
