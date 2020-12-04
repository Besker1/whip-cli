import Footer from "../navigation/Footer";
// import Apicontext from "";
import React, { Component } from "react";
import TokenService from "../../services/Token-service";
import { Link } from "react-router-dom";
export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form
          action="post"
          className="sign-form"
          onSubmit={this.handleSubmitBasicAuth}
        >
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <label htmlFor="user_name"> Username</label>
          <input type="text" name="user_name" placeholder="Username" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="" placeholder="password" />
          <button>Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}
