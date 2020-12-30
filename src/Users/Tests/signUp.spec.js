import React from "react";
import ReactDOM from "react-dom";
import SignUp from "../Signup/SignForm";
import RegistrationPage from "../Signup/SignUpPage";

it("RegistrationPage works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RegistrationPage />, div);
});
it("SignUp works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUp />, div);
});
