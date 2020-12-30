import React, { Component } from "react";
import ApiContext, { whipUpContext } from "../contexts/ApiContext";
import RecipeApiService from "../services/Api-service";

export default class CreateRecipes extends Component {
  state = {
    title: "",
    content: "",
    meal: "",
    is_vegan: false,
  };
  static contextType = whipUpContext;
  static contextType = ApiContext;
  handleSubmit = (ev) => {
    ev.preventDefault();
    // debugger;
    RecipeApiService.createRecipes(this.state).then((res) =>
      this.props.history.push("/allRecipes")
    );
  };

  debugger;

  handleTitle = (title) => {
    this.setState({
      title,
    });
  };

  handleMeal = (meal) => {
    this.setState({
      meal,
    });
  };
  handleRecipe = (recipes) => {
    const newRep = recipes.split("\n");
    this.setState({
      content: newRep,
    });
  };

  handleVegan = (is_vegan) => {
    this.setState({
      is_vegan,
    });
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
            <input
              name="vegan"
              type="checkbox"
              value="vegan"
              onChange={(ev) => this.handleVegan(!this.state.vegan)}
            />
          </div>

          <label htmlFor="title" name="title">
            Recipe name
          </label>
          <input
            type="text"
            name="title"
            placeholder="Recipes title"
            onChange={(ev) => this.handleTitle(ev.target.value)}
          />

          <select onChange={(ev) => this.handleMeal(ev.target.value)}>
            <option>Meal</option>
            <option value="breakfast"> breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </select>

          <label htmlFor="recipe" name="recipe">
            Enter your recipe
          </label>
          <textarea
            name="recipes"
            placeholder="recipe"
            rows="10"
            onChange={(ev) => this.handleRecipe(ev.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
