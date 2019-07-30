import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Home from "./containers/Home";
import ViewArticle from './containers/ViewArticle';
import NotFound from './containers/NotFound';
import MyProfile from './containers/MyProfile';
import AddArticle from './containers/AddArticle';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
				<SearchBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/redirect" component={() => {
              window.location.replace('www.google.ca')
              return null
            }} />
            <Route path="/backend" component={Home} />
            <Route path="/ViewArticle/:id" component={ViewArticle} />
            <Route path="/MyProfile" component={MyProfile} />
            <Route path="/AddArticle" component={AddArticle} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
