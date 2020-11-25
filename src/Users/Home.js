import { Link, HashRouter as Router } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <Router>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
