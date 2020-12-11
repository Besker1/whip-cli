import Footer from "../navigation/Footer";
import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";

export default class SignUp extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then((user) => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        const destination = (this.props.location.state || {}).from || "/";
        this.props.history.push(destination);
        // this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div className="body">
        <h1>Signup</h1>
        <form className="sign-form" onSubmit={this.handleSubmit}>
          <input type="text" name="full_name" placeholder="Fullname" />
          <input type="text" name="user_name" placeholder="Username" Email />
          <input type="text" name="password" id="" placeholder="password" />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="confirm password"
          />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}
