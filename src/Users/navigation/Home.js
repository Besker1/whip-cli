import { Link, HashRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import TokenService from "../../services/Token-service";

// export default function Home() {
//   return (
//     <Router>
//       <div className="menu">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//         </ul>
//       </div>
//     </Router>
//   );
// }
export default class Home extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <li>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </li>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <li>
          <Link to="/signUp">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </ul>
        </div>
      </Router>
    );
  }
}
