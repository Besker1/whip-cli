import React from "react";
import ReactDOM from "react-dom";
import Footer from "../navigation/Footer";
import Home from "../navigation/Home";
import Menu from "../navigation/Menu";
import Nav from "../navigation/Nav";

it("footer works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});
it("Home works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});
it("Nav works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav />, div);
});
it("Menu works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu />, div);
});
