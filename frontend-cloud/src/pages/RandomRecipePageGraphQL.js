import React, { useEffect, useState } from 'react';

const RandomRecipePageGraphQL = () => {
    const [recipe, setRecipe] = useState(null);

    const fetchRandomRecipe = async () => {
        try {
            const response = await fetch('/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  query: `
                    {
                        randomRecipe(token: "${localStorage.getItem('token')}") {
                        name
                        ingredients
                      }
                    }
                  `,
                }),
              });
            const data = await response.json();
            setRecipe(data.data.randomRecipe);
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

export default RandomRecipePageGraphQL;