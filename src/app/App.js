import "./App.css";
import "../index.css";
import { React, Component } from "react";
import FrontPage from "../Users/FrontPage";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import AboutPage from "../Users/AboutPage";
import LoginPage from "../Users/Login/LoginForm";
import SignUpPage from "../Users/Signup/SignUpPage";
import RecipeSearchPage from "../RecipesFolder/RecipeSearchPage";
import Menu from "../Users/navigation/Menu";
import Nav from "../Users/navigation/Nav";
import { whipUpContext } from "../contexts/ApiContext";
import Home from "../Users/navigation/Home";
import PublicOnlyRoute from "../Users/Utils/PublicRoute";
import PrivateRoute from "../Users/Utils/PrivateRoute";
import CreateRecipes from "../RecipesFolder/CreateRecipe";
import RecipeFrontPage from "../RecipesFolder/FirstRecipes/RecipeFront";
import EditRecipes from "../RecipesFolder/EditRecipes";

export default class App extends Component {
  state = {
    recipes: [],
    vegan: false,
    meal: "",
    url: "http://localhost:8000",
  };
  // "https://glacial-savannah-22512.herokuapp.com/"
  /// search for recipes using the api based on the data which can be vegan or nothing
  componentDidMount() {
    const url = this.state.url;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer SECRET",
      },
    };

    fetch(`${url}`, options)
      .then((res) => res.json())
      .then((res) => this.handleRecipe(res));
  }
  /// push the recipe to the recipes found from fetch to the recipes in the state;
  handleRecipe = (data) => {
    this.setState({
      recipes: data || [],
    });
  };
  // fiilter get called if the state of vegan is true, thus function should be called
  filterRecipeType = (meal) => {
    this.setState({
      // recipes: newData,
      meal,
    });
  };
  filterVeganType = (vegan) => {
    this.setState({
      vegan,
    });
  };

  render() {
    return (
      <whipUpContext.Provider value={this.state}>
        <Router>
          <div className="front-page">
            <main>
              <header>
                <nav className="navigation">
                  <Menu />
                  <Route exact path="/">
                    <Nav />
                  </Route>

                  <Route exact path="/about">
                    <Home />
                  </Route>
                  <Route exact path="/recipe">
                    <Home />
                  </Route>
                </nav>
              </header>
            </main>
            <div>
              <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route path="/edit/:id" component={EditRecipes} />
                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/recipe">
                  <RecipeFrontPage
                    filterRecipeType={this.filterRecipeType}
                    filterVeganType={this.filterVeganType}
                  />
                </Route>
              </Switch>
              {/* <Route exact path="/" component={RecipeFrontPage} /> */}

              {/* <Route path="/recipe"></Route> */}
              <PublicOnlyRoute path="/login" component={LoginPage} />
              <PublicOnlyRoute path="/signUp" component={SignUpPage} />

              <PrivateRoute path="/allRecipes">
                <RecipeSearchPage
                  filterRecipeType={this.filterRecipeType}
                  filterVeganType={this.filterVeganType}
                />
              </PrivateRoute>

              <PrivateRoute path="/create" component={CreateRecipes} />
            </div>
          </div>
        </Router>
      </whipUpContext.Provider>
    );
  }
}
