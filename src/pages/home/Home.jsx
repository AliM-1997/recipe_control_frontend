import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipe_list = async () => {
      const res = await axios.get(
        "http://localhost//recipes-control-backend/recipes/read-recipe.php"
      );
      setRecipes(res.data);
      console.log(res.data);
    };
    recipe_list();
  }, []);

  return <div className=" page"></div>;
};

export default Home;
