import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReportPage from "./components/ReportPage";
import SummaryPage from "./components/SummaryPage";
import CreateAccount from "./components/CreateAccount";
import axios from 'axios';


function App() {
  const [authentication, setAuthentication] = useState("");
  const [reviewOrderErrors, setReviewOrderErrors] = useState("");
  const [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    buyingPower: 0,
  });
  
  const { id } = user;

  useEffect(() => {
    getUserCredentials()
  }, [id]);
  
 
  const getUserCredentials = async () => {
    const user = localStorage.getItem('id');
    const body = {userId: user};  
    console.log('user', user)

    if (user) { 
      console.log(body)
      const response = await axios.post('/api/credentials', body)
      const { data } = response;
      
      // Data comes back all string because of json.dumps() in server side. 
      console.log(data.split(','))
      setUser({
        id: data[0],
        username: data[1],
        password: data[2],
        buyingPower: data[3],
      })
      setAuthentication(true)
    }

  }


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
            user={user} 
            setUserId ={setUser}
            setAuthentication={setAuthentication}
            authentication={authentication}
          />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/report">
              <ReportPage 
              userId={id}  />
            </PrivateRoute>
            <PrivateRoute path="/summary">
              <SummaryPage
                userId={id}
                user={user}
                reviewOrderErrors={reviewOrderErrors}
                setReviewOrderErrors={setReviewOrderErrors}
              />
            </PrivateRoute>
            <Route
              path="/createAccount"
              render={(props) => (
                <CreateAccount
                  setAuthentication={setAuthentication}
                  authentication={authentication}
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
