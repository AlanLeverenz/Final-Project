import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import {/* getCookie, */ authenticateUser, logOut} from "./utils/handleSessions";
import "./style.css"


class App extends React.Component {
//  check cookie
//  getCookie();

  state = {
    authenticated: false,
    loading: false,
    isLoggedin: false
  }

  authenticate = () => authenticateUser()
    .then(auth => this.setState({authenticated: auth.data, isLoggedin: true, loading:false}))
    .catch(err => console.log(err))
  
  logout = () => logOut()
    .then(res => {
      console.log('redirecting');
      this.authenticate()
    })
    .catch(err => console.log(err))

  componentWillMount(){
    this.authenticate();
  }
  
  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ (props) => (
      this.state.authenticated === true 
        ? <Component {...props} />
        : this.state.loading === true
          ?<div><p>Still loading...</p></div>
          : <Redirect to='/' />
    )} />
  )

  render(){
    return (
    <Router>
      <div>
        <Nav user={this.userName} loggedIn={this.isLoggedin} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={(props) => <Search {...props} state={this.state} />} />
          <Route exact path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/signup"  render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route path="/saved" render={(props) => <Saved {...props} state={this.state} />} /> 
  {/*           <Route path="/saved" component={Saved} /> */}
  {/*           <this.PrivateRoute exact path="/saved" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
   </Router>
  )}
}

export default App;
