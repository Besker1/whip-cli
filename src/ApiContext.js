import React from 'react'
export  const whipUpContext = React.createContext({
    recipes: [],
    vegan: false,
    meal: "",
    url: 'http://localhost:8000/'
});