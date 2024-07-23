import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipe_list = async () => {
      const res = await axios.get(
        "http://localhost//recipes-control-backend/recipes/read-recipe.php"
      );
      setRecipes(res.data.recipes);
      console.log(res.data);
    };
    recipe_list();
  }, []);

  return (
    <div className="page">
      <h1 className="flex center">All Recipes</h1>
      <div className="full-width flex space-between padding primary-bg">
        <h4>recipe name</h4>
        <h4>recipe description</h4>
        <h4>recipe ingredients</h4>
      </div>
      <div className="full-width ">
        <ul>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="full-width flex space-between padding"
              >
                <p>{recipe.name}</p>
                <p>{recipe.description}</p>
                <p>Ingredients: {recipe.ingredients}</p>
              </li>
            ))
          ) : (
            <p>No recipes available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
