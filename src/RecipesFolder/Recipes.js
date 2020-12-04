import React from "react";
import TokenService from "../services/Token-service";
export default function Recipes(props) {
  let content = props.content;
  if (!content) {
    content = [];
  }
  const newContent = content.map((cont, index) => <li key={index}>{cont}</li>);
  return (
    <div className="container">
      <div className="recipe">
        <h1>{props.title}</h1>
        {TokenService.hasAuthToken ? <ul>{newContent}</ul> : ""}
      </div>
    </div>
  );
}
