import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "../Login/LoginForm";
import LoginPage from "../Login/Loginpage";
it("LoginForm works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm />, div);
});
it("LoginPage works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginPage />, div);
});
