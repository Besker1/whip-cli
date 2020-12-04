import React, { Component } from "react";

export const nullRecipe = {
  author: {},
  tags: [],
};

const RecipeContext = React.createContext({
  recipe: nullRecipe,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setRecipe: () => {},
  addRecipes: () => {},
  clearRecipe: () => {},
  setComments: () => {},
  addComment: () => {},
});

export default RecipeContext;

export class RecipeProvider extends Component {
  state = {
    recipe: nullRecipe,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setRecipe = (recipe) => {
    this.setState({ recipe });
  };

  setComments = (comments) => {
    this.setState({ comments });
  };

  clearRecipe = () => {
    this.setArticle(nullRecipe);
    this.setComments([]);
  };

  addRecipes = (recipe) => {
    this.setRecipe([...this.state.recipe, recipe]);
  };

  addComment = (comment) => {
    this.setComments([...this.state.comments, comment]);
  };

  render() {
    const value = {
      recipe: this.state.article,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRecipe: this.setRecipe,
      setComments: this.setComments,
      clearRecipe: this.clearRecipe,
      addComment: this.addComment,
    };
    return (
      <RecipeContext.Provider value={value}>
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}
