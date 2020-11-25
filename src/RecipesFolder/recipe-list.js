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
  const recipes = recipeList[Math.floor(Math.random() * recipeList.length)];
  return <div>{recipes}</div>;
}
