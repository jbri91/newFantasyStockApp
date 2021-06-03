import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReportPage from "./components/ReportPage";
import SummaryPage from "./components/SummaryPage";
import CreateAccount from "./components/CreateAccount";

function App() {
  let [authentication, setAuthentication] = useState("");
  const [userId, setUserId] = useState("");
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [fetchBuyingPower, setFetchBuyingPower] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("id") > 0) {
      fetch("/api/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: localStorage.getItem("id"),
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          setCreateUsername(
            data[1],
            setCreatePassword(
              data[2],
              setUserId(data[0]),
              setFetchBuyingPower(data[3])
            )
          )
        )
        .catch((error) => console.log(error));

      setAuthentication(true);
    }
  }, []);

  const userAuthorization = {
    isAuthenticated: authentication,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return userAuthorization.isAuthenticated === true ? (
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
          <NavigationBar
            setAuthentication={setAuthentication}
            authentication={authentication}
            setUserId={setUserId}
            userId={userId}
            createUsername={createUsername}
            createPassword={createPassword}
            setFetchBuyingPower={setFetchBuyingPower}
          />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/report">
              <ReportPage 
              userId={userId} 
              fetchBuyingPower={fetchBuyingPower} />
            </PrivateRoute>
            <PrivateRoute path="/summary">
              <SummaryPage
                userId={userId}
                fetchBuyingPower={fetchBuyingPower}
              />
            </PrivateRoute>
            <Route
              path="/createAccount"
              render={(props) => (
                <CreateAccount
                  setAuthentication={setAuthentication}
                  setUserId={setUserId}
                  authentication={authentication}
                  setCreateUsername={setCreateUsername}
                  setCreatePassword={setCreatePassword}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
