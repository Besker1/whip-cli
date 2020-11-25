import { Link, HashRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import React from "react";

// import RecipesRouter from '../RecipesFolder/RecipesRouters'

export default function FrontPage(props) {
  return (
    <Router>
      <div className="front-page">
        {/* <!-- get recipe will be placed in the middle of the page --> */}
        <div className="entry">
          <button
            className="get-recipe-page entry-button"
            // onClick={props.getRecipes}
          >
            <Link to="./recipe">Get Recipe</Link>
          </button>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
