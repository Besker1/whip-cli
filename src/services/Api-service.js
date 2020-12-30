import config from "./config";
import TokenService from "./Token-service";
const RecipeApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipe`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getRecipeWithId(recipeId) {
    return fetch(`${config.API_ENDPOINT}/recipe/${recipeId}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  createRecipes(recipe) {
    debugger;
    return fetch(`${config.API_ENDPOINT}/recipe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(recipe),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteRecipes(id) {
    return fetch(`${config.API_ENDPOINT}/recipe/${id}`, {
      method: "DELETE",
      authorization: `bearer ${TokenService.getAuthToken()}`,
    });
  },

  updateRecipes(newValue) {
    debugger;
    return fetch(`${config.API_ENDPOINT}/recipe/${newValue.id}`, {
      method: "PATCH",
      "Content-type": "application/json",
      authorization: `bearer ${TokenService.getAuthToken()}`,
      body: JSON.stringify(newValue),
    }).then((res) => {
      debugger;
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default RecipeApiService;
