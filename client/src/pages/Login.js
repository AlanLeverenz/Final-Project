import React, { Component } from "react";

import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
      email: "",
      password: "",
      message: ""
    };
    
  // UNSAFE_componentWillMount() {
  // this.props.authenticate
  // }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if(res.status === 200 ){
            this.props.authenticate();
            return <Redirect to="/search" />
          } 
        })
        .catch(() =>
        this.setState({
          message: "Login not recognized. Try again or sign up."
        })
      );
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <div style={{margin:30,maxWidth:500}}> 
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="(required)"
                  type="password"
                />
                
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Login
                </FormBtn>
              </form>
            </div>  
          </Col>
          
        </Row>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/search'/> : 
        <div>
          <h3 style={{marginLeft:20}}>{this.state.message}</h3>
        </div>}
      </Container>
    );
  }
}

export default Login;
