import React from "react";
export default function Recipes(props) {
  return (
    <div className="container">
      <div className="recipe">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
