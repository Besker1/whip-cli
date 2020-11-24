import Recipes from "./Recipes.js";
import React from "react";

export default function RecipeList(props) {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <Recipes
        key={index}
        title={recipe.title}
        image={recipe.img}
        content={recipe.content}
      />
    );
  });
  //feature to be added
  // const recipes = recipeList[Math.floor(Math.random() * recipeList.length)];
  return <div>{recipeList}</div>;
}
