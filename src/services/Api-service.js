import config from "./config";
import TokenService from "./Token-service";
const RecipeApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAllRecipes(recipeId) {
    return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      debugger;
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
  createRecipes(recipe) {
    debugger;
    return fetch(`${config.API_ENDPOINT}/`, {
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
    return fetch(`${config.API_ENDPOINT}/${id}`, {
      method: "DELETE",
      "Content-type": "application/json",
      authorization: `bearer ${TokenService.getAuthToken()}`,
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateRecipes() {
    const newValue = this.target.value;
    const id = this.target.id;
    return fetch(`${config.API_ENDPOINT}/${id}`, {
      method: "PATCH",
      "Content-type": "application/json",
      authorization: `bearer ${TokenService.getAuthToken()}`,
      body: JSON.stringify({
        newValue,
      }),
    });
  },
};

export default RecipeApiService;
