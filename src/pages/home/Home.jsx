import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipe_list = async () => {
      const res = await axios.get(
        "http://localhost//recipes-control-backend/recipes/read-recipe.php"
      );
      setRecipes(res.data.recipes || []);
      console.log(res.data);
    };
    recipe_list();
  }, []);

  const handleDelete = async (recipeName) => {
    try {
      const res = await axios.post(
        "http://localhost/recipes-control-backend/recipes/delete-recipe.php",
        { name: recipeName }
      );

      if (res.data.status === "success") {
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.name !== recipeName)
        );
        console.log("Recipe deleted successfully");
      } else {
        console.error("Failed to delete recipe:", res.data.message);
      }
    } catch (err) {
      console.error("There was an error deleting the recipe:", err);
    }
  };

  return (
    <div className="page">
      <h1 className="flex center">All Recipes</h1>
      <div className="full-width flex space-between padding primary-bg">
        <h4>recipe name</h4>
        <h4>recipe description</h4>
        <h4>recipe ingredients</h4>
        <h4>actions</h4>
      </div>
      <div className="full-width">
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
                <button onClick={() => handleDelete(recipe.name)}>
                  Delete
                </button>
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
