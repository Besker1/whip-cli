import React from "react";
import ReactDOM from "react-dom";
import FirstRecipeList from "../FirstRecipes/FirstRecipeList";
import RecipeFrontPage from "../FirstRecipes/RecipeFront";
import RecipeD from "../FirstRecipes/RecipeD";

it("FirstRecipesList works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FirstRecipeList />, div);
});
it("Recipes works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeD />, div);
});
it("RecipeList works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeFrontPage />, div);
});
