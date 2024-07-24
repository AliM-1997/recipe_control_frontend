import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          "http://localhost/recipes-control-backend/recipes/read-recipe.php"
        );
        setRecipes(res.data.recipes || []);
        console.log(res.data);
      } catch (err) {
        console.error("There was an error fetching the recipes:", err);
      }
    };
    fetchRecipes();
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

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (recipeId) => {
    try {
      await axios.post(
        "http://localhost/recipes-control-backend/comments/add-comment.php",
        {
          recipe_id: recipeId,
          content: newComment,
        }
      );
      setNewComment("");
      setSelectedRecipeId(null);
    } catch (err) {
      console.error("There was an error adding the comment:", err);
    }
  };

  return (
    <div className="page">
      <h1 className="flex center">All Recipes</h1>
      <div className="full-width flex space-between padding primary-bg">
        <h4>Recipe Name</h4>
        <h4>Recipe Description</h4>
        <h4>Recipe Ingredients</h4>
        <h4>Actions</h4>
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
                <button onClick={() => setSelectedRecipeId(recipe.id)}>
                  Comment
                </button>
                {selectedRecipeId === recipe.id && (
                  <div className="comment-section">
                    <textarea
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="Add a comment"
                    />
                    <button onClick={() => handleCommentSubmit(recipe.id)}>
                      Submit Comment
                    </button>
                  </div>
                )}
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
