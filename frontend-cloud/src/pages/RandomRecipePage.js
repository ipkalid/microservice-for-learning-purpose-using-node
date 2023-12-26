import React, { useEffect, useState } from 'react';

const RandomRecipePage = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch('/api/recipe/randomRecipe', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token'),
        },
      });
     
      const data = await response.json();
      console.log(data);
      setRecipe(data.recipes);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
          <p>Calories: {recipe.calories}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button onClick={fetchRandomRecipe}>Fetch New Recipe</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomRecipePage;