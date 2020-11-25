import { Link, HashRouter as Router } from "react-router-dom";
// import Footer from './Footer'
import React from "react";

export default function Menu() {
  return (
    <Router>
      <div className="logo">
        <div className="moto">
          <h1>
            <Link to="/"> WhipItUp </Link>
          </h1>
          <p className="moto">"Cooking made Easy"</p>
        </div>

        <img
          src="https://www.logolynx.com/images/logolynx/fe/fea10b396e4a92efc903422051f27b75.png"
          alt="logo"
        />
      </div>
    </Router>
  );
}
