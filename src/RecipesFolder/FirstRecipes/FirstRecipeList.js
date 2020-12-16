import Recipes from "./RecipeD.js";
import React from "react";

export default function FirstRecipeList(props) {
  let recipes = props.recipes;
  if (!recipes) {
    recipes = [];
  }
  const recipeList = recipes.map((recipe, index) => {
    return (
      <Recipes
        key={index}
        title={recipe.title}
        // image={recipe.img}
        content={recipe.content}
      />
    );
  });
  // upcoming features
  // const recipesL = recipeList[Math.floor(Math.random() * recipeList.length)];
  return <div>{recipeList}</div>;
}
