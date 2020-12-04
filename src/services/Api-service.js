import config from "./config";
import TokenService from "./Token-service";
const RecipeApiService = {
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAllRecipes(recipeId) {
    return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  createRecipes(recipeId, recipe) {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        recipe_id: recipeId,
        recipe,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getArticleComments(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}/comments`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postComment(articleId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: articleId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default RecipeApiService;
