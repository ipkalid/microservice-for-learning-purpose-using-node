import React, { useEffect, useState } from 'react';

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await fetch('api/recipe/allRecipe', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token'),
          },
        });
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching all recipes:', error);
      }
    };

    fetchAllRecipes();
  }, []);

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="recipe-card">
          <h2>{recipe.name}</h2>
          <p>Calories: {recipe.calories}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesPage;