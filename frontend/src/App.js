import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchbar";
import Home from "./containers/Home";
import ViewArticle from './containers/ViewArticle';
import NotFound from './containers/NotFound';
import MyProfile from './containers/MyProfile';
import AddArticle from './containers/AddArticle';
import Login from './containers/Login';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('isAuthenticated') === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/cas",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
				<SearchBar />
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/redirect" component={() => {
              return <Redirect to={'/login'} />
            }} />
            <Route path='/cas' component={() => {
              window.location.href = 'https://cas.usherbrooke.ca/login?service=http://localhost:3000/login'; 
              return null;
            }}/>
            <PrivateRoute path="/backend" component={Home} />
            <PrivateRoute path="/ViewArticle/:id" component={ViewArticle} />
            <PrivateRoute path="/MyProfile" component={MyProfile} />
            <PrivateRoute path="/AddArticle" component={AddArticle} />
            <PrivateRoute component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App
