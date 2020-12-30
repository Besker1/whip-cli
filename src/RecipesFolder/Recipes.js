import React, { Component } from "react";
import TokenService from "../services/Token-service";
import ApiService from "../services/Api-service";
import { Link } from "react-router-dom";
import { render } from "react-dom";
export default function Recipes(props) {
  let content = props.content;
  if (!content) {
    content = [];
  }

  const handleDelete = () => {
    ApiService.deleteRecipes(props.recipeId).then((response) => {
      const destination = (props.location.state || {}).from || "/";
      this.props.history.push(destination);
      // this.props.onLoginSuccess();
    });
  };

  const newContent = content.map((cont, index) => <li key={index}>{cont}</li>);
  return (
    <div className="container">
      <div className="recipe">
        <h1>{props.title}</h1>
        <h2>{props.meal}</h2>
        <h4>{props.vegan}</h4>
        {TokenService.hasAuthToken ? <ul>{newContent}</ul> : ""}
        <button
          onClick={(e) => {
            handleDelete();
          }}
          value="delete"
        >
          Delete
        </button>
        <Link to={`/edit/${props.recipeId}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}
