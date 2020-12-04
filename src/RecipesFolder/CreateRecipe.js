import React, { Component } from "react";
import { whipUpContext } from "../contexts/ApiContext";
import RecipeApiService from "../../Services/API";

export default class CreateRecipes extends Component {
  static contextType = whipUpContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { recipe } = this.context;
    const { title, vegan, recipes } = ev.target;
    const leRecipe = [recipes];
    let newRecipe = {
      title,
      vegan,
      leRecipe,
    };

    RecipeApiService.createRecipes(recipe.id, newRecipe)
      .then(this.context.addRecipes)
      .then(() => {
        newRecipe = {};
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <div className="formClass">
        <h1>Proud of your what you whipped up? Share it with the world!</h1>
        <form className="formAction" onSubmit={this.handleSubmit}>
          <div className="posing">
            <label htmlFor="vegan" name="vegan" value="vegan">
              Vegan?
            </label>
            <input name="vegan" type="checkbox" value="vegan" />
          </div>
          <label htmlFor="title" name="title">
            Recipe name
          </label>
          <input type="text" name="title" placeholder="Recipes title" />
          <label htmlFor="recipe" name="recipe">
            Enter your recipe
          </label>
          <textarea name="recipes" placeholder="recipe" rows="10" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
