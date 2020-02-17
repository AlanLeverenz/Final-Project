<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Preview from "./pages/Preview";
import Search from "./pages/Search";
import Visuals from "./pages/Visuals";
import Nav from "./components/Nav";
import {/* getCookie, */ authenticateUser, logOut} from "./utils/handleSessions";
import "./style.css"

class App extends React.Component {
//  check cookie
//  getCookie();

  state = {
    authenticated: false,
    email: "",
    loading: false,
    logout: false,
    message: ""
  }

  authenticate = () => authenticateUser()
    .then(auth => this.setState({
      authenticated: auth.data, 
      loading: false,
      email: auth.data.email
    }))
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
        <Nav user={this.userName} authenticated={this.state.authenticated} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={(props) => <Preview {...props} state={this.state} />} />
          <Route path="/search" render={(props) => <Search {...props} state={this.state} />} />
          <Route path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route path="/signup" render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route path="/saved" render={(props) => <Saved {...props} state={this.state} />} /> 
          <Route path='/demo' component={() => { 
     window.location.href = 'https://harpster11.github.io/newsit-news-polarizer-deck/'; 
     return null;
          }}/>
          <Route path="/visuals" render={(props) => <Visuals {...props} state={this.state} />} /> 
          <Route component={NoMatch} />
        </Switch>
      </div>
   </Router>
  )}
}

export default App;
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Visuals from "./pages/Visuals";
import Nav from "./components/Nav";
import {/* getCookie, */ authenticateUser, logOut} from "./utils/handleSessions";
import "./style.css"

class App extends React.Component {
//  check cookie
//  getCookie();

  state = {
    authenticated: false,
    loading: false,
    logout: false
  }

  authenticate = () => authenticateUser()
    .then(auth => this.setState({authenticated: auth.data, loading:false}))
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
        <Nav user={this.userName} authenticated={this.state.authenticated} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={(props) => <Search {...props} state={this.state} />} />
          <Route path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route path="/signup"  render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route path="/saved" render={(props) => <Saved {...props} state={this.state} />} /> 
          <Route path='/demo' component={() => { 
     window.location.href = 'https://harpster11.github.io/newsit-news-polarizer-deck/'; 
     return null;
}}/>
          <Route path="/visuals" render={(props) => <Visuals {...props} state={this.state} />} /> 
 {/*           <Route path="/saved" component={Saved} /> */}
  {/*           <this.PrivateRoute exact path="/saved" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
   </Router>
  )}
}

export default App;
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
