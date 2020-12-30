import Recipes from "./Recipes.js";
import React, { Component } from "react";
import { whipUpContext } from "../contexts/ApiContext";

export default function RecipeList(props) {
  // static contextType = whipUpContext;

  // static defaultProps = {
  //   location: {},
  //   history: {
  //     push: () => {},
  //   },
  //   recipes: [],
  // };

  // state = {
  //   recipes: this.props.recipes || [],
  // };

  // let recipes = this.context;
  let recipes = props.recipes;
  if (!recipes) {
    recipes = [];
  }
  const recipeList = recipes.map((recipe, index) => {
    return (
      <Recipes
        // {...this.props}
        key={index}
        recipeId={recipe.id}
        title={recipe.title}
        meal={recipe.meal}
        vegan={recipe.is_vegan ? "Woww! vegan options" : ""}
        image={recipe.img}
        content={recipe.content}
      />
    );
  });
  // upcoming features
  // const recipesL = recipeList[Math.floor(Math.random() * recipeList.length)];
  return <div>{recipeList}</div>;
}
