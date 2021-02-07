import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReportPage from "./components/ReportPage";
import SummaryPage from "./components/SummaryPage";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div className="App">
    <header className="App-header">
         <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/report" component={ReportPage} />
            <Route path="/summary" component={SummaryPage} />
            <Route path='/createAccount' component={CreateAccount} />
          </Switch>
        </BrowserRouter>
        </header>
        </div>
  );
}

export default App;
