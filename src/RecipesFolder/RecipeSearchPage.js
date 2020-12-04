// import RecipeList from "./recipe-list";
import React from "react";
import { whipUpContext } from "../contexts/ApiContext";
import RecipeList from "./recipe-list";

export default function RecipeSearchPage(props) {
  //// use props to get the filter function from app.js
  /// use context to access other items from the state
  return (
    <whipUpContext.Consumer>
      {({ vegan, meal, recipes }) => (
        <div className="body">
          <h2>Try these and whipUp later</h2>
          <form>
            <select
              className="selections"
              onChange={(e) => {
                e.preventDefault();
                meal = e.target.value;
                props.filterRecipeType(e.target.value);
              }}
            >
              <option value="meals">Meals</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>

            <div className="vegan">
              <label htmlFor="vegan-option">Vegan</label>
              <input
                type="checkbox"
                name="Vegan-option"
                id="vegan"
                /// toggle vegan true or false
                onChange={(e) => {
                  props.filterVeganType(!vegan);
                }}
              />
            </div>
          </form>

          <div className="results">
            <RecipeList
              /// filter out possible functions on ui by meals or vegan
              recipes={recipes
                .filter((recipe) => {
                  if (meal === "meals" || !meal) {
                    return true;
                  } else {
                    return recipe.meal === meal;
                  }
                })
                .filter((recipe) => {
                  if (vegan) {
                    return recipe.is_vegan;
                  }
                  return true;
                })}
            />
          </div>
        </div>
      )}
    </whipUpContext.Consumer>
  );
}
