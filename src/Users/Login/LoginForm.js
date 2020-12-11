import Footer from "../navigation/Footer";
// import Apicontext from "";
import React, { Component } from "react";
import TokenService from "../../services/Token-service";
import AuthApiService from "../../services/auth-api-service";

// import { Link } from "react-router-dom";
export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;
    console.log(user_name);
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        const destination = (this.props.location.state || {}).from || "/";
        this.props.history.push(destination);
        // this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="body">
        <h1>Login</h1>
        <form
          action="post"
          className="sign-form"
          onSubmit={this.handleSubmitBasicAuth}
        >
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <label htmlFor="user_name"> Username</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
