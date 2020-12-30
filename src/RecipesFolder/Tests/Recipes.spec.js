import React from "react";
import Recipes from "../Recipes";
import RecipeList from "../recipe-list";
import RecipeSearch from "../RecipeSearchPage";
import ReactDOM from "react-dom";
import EditRecipes from "../EditRecipes";
import CreateRecipes from "../CreateRecipe";

it("RecipeSearch works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeSearch />, div);
});
it("Recipes works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Recipes />, div);
});
it("RecipeList works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeList />, div);
});
it("CreateRecipes works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateRecipes />, div);
});
it("editrecipes works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditRecipes />, div);
});
