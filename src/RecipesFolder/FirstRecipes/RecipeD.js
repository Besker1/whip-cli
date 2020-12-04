import React from "react";
import { Link } from "react-router-dom";
export default function Recipes(props) {
  return (
    <Link to="/allRecipes">
      <div className="container">
        <div className="recipe">
          <h1>{props.title}</h1>
          <img src={props.img} alt="food" />
        </div>
      </div>
    </Link>
  );
}
