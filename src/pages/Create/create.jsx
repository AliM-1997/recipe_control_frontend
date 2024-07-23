import React, { useState, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import Button from "../../component/Button";
import Input from "../../component/Input";

const Create = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    gsap.fromTo(
      ".new-recipe-title",
      { y: -100 },
      { y: 0, duration: 2, ease: "bounce.out" }
    );
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = 1;
    try {
      const response = await axios.post(
        "http://localhost//recipes-control-backend/recipes/adding-recipe.php",
        {
          name,
          ingredients,
          description,
          user_id: userId,
        }
      );

      if (response.data.status === "success") {
        console.log("Recipe created successfully");
      } else {
        console.error(response.data.message);
      }
    } catch (err) {
      console.error("There was an error creating the recipe:", err);
    }
  };

  return (
    <div className="new-recipe-page">
      <h1 className="new-recipe-title">Create New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Recipe Name"
          placeholder="Enter the recipe name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Input
          label="Ingredients"
          placeholder="Enter ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          type="text"
        />
        <Input
          label="Description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <Button type="submit">Create Recipe</Button>
      </form>
    </div>
  );
};

export default Create;
