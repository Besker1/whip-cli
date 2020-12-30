import React, { Component } from "react";
import ApiService from "../services/Api-service";
export default class EditRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: "",
      meal: "",
      is_vegan: false,
      img: "",
    };
  }

  handleSubmit(ev) {
    const newRecipe = {
      title: this.state.title,
      content: this.state.content,
      meal: this.state.meal,
      is_vegan: this.state.is_vegan,
      img: this.state.value,
    };
    let id = this.state.id;
    console.log(newRecipe);
    ev.preventDefault();
    ApiService.updateRecipes(id, newRecipe);
  }

  componentWillMount() {
    this.getRecipeDetails();
  }
  /// get the details of the items that is being edited using the fecth methode with with is
  getRecipeDetails = () => {
    let id = this.props.match.params.id;
    this.setState({
      id,
    });

    ApiService.getRecipeWithId(id).then((response) => {
      response.map((obj) =>
        this.setState({
          id: obj.id,
          title: obj.title,
          content: obj.content,
          meal: obj.meal,
        })
      );
    });
  };
  debugger;
  ///// this handle changes in the inputs to make changes in the sections.///

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
        <h1>Edit Recipe</h1>
        <form className="formAction" onSubmit={this.handleSubmit.bind(this)}>
          <div className="posing">
            <label htmlFor="vegan" name="vegan" value={this.state.vegan}>
              Vegan?
            </label>
            <input
              name="vegan"
              ref="vegan"
              type="checkbox"
              checked={this.state.is_vegan ? true : false}
              onChange={(ev) => this.handleVegan(!this.state.vegan)}
            />
          </div>

          <label htmlFor="title" name="title">
            Recipe name
          </label>
          <input
            type="text"
            name="title"
            ref="title"
            placeholder="Recipes title"
            defaultValue={this.state.title}
            onChange={(ev) => this.handleTitle(ev.target.value)}
          />

          <select
            onChange={(ev) => this.handleMeal(ev.target.value)}
            defaultValue={this.state.meal}
            ref="Meal"
          >
            <option value={this.state.meal}>{this.state.meal}</option>
            <option value="breakfast"> breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </select>

          <label htmlFor="recipe" name="recipe">
            Enter your recipe
          </label>
          <textarea
            name="recipes"
            ref="recipes"
            placeholder="recipe"
            defaultValue={this.state.content}
            rows="10"
            onChange={(ev) => this.handleRecipe(ev.target.value)}
          />
          <input type="submit" value="Save changes" />
        </form>
      </div>
    );
  }
}
