import Footer from "../navigation/Footer";
import React from "react";

export default function SignUp() {
  return (
    <div>
      <h1>Signup</h1>
      <form action="post" className="sign-form">
        <label for="uer_name"> Username:</label>
        <input type="text" placeholder="email" Email />
        <label for="password">Password</label>
        <input type="text" name="password" id="" placeholder="password" />
        <label for="password"> confirm password</label>
        <input
          type="text"
          name="password"
          id=""
          placeholder="confirm password"
        />
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}
