import { Link, HashRouter as Router } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <Router>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about"> About</Link>
          </li>

          {/* <li>
              <Link to="/signup"> Sign Up</Link>
            </li> */}
        </ul>
      </div>
    </Router>
  );
}
