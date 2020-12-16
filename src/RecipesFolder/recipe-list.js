import Recipes from "./Recipes.js";
import React from "react";

export default function RecipeList(props) {
  let recipes = props.recipes;
  if (!recipes) {
    recipes = [];
  }
  const recipeList = recipes.map((recipe, index) => {
    return (
      <Recipes
        key={index}
        recipeId={recipe.id}
        title={recipe.title}
        image={recipe.img}
        content={recipe.content}
      />
    );
  });
  // upcoming features
  // const recipesL = recipeList[Math.floor(Math.random() * recipeList.length)];
  return <div>{recipeList}</div>;
}
