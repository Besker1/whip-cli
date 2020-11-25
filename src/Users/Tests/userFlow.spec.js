import React from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";
import Menu from "../Menu";
import Nav from "../Nav";
import FrontPage from "../FrontPage";
import AboutPage from "../AboutPage";

it("aboutpage works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AboutPage />, div);
});

it("footer works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("menu works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu />, div);
});

it("navigation works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav />, div);
});

it("frontpage works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FrontPage />, div);
});
