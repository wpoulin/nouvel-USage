import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Home from "./containers/Home";
import ViewArticle from './containers/ViewArticle';
import NotFound from './containers/NotFound';
import MyProfile from './containers/MyProfile';
import MySales from './containers/MySales';
import AddSale from './containers/AddSale';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
				<SearchBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ViewArticle/:id" component={ViewArticle} />
            <Route path="/MyProfile" component={MyProfile} />
            <Route path="/MySales" component={MySales} />
            <Route path="/AddSale" component={AddSale} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
