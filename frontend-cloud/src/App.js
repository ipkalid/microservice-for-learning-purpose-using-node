// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RandomRecipePage from './pages/RandomRecipePage';
import AllRecipesPage from './pages/AllRecipesPage';
import AllRecipesPageGraphQL from './pages/AllRecipesPageGraphQL';
import RandomRecipePageGraphQL from './pages/RandomRecipePageGraphQL';
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/random-recipe">Random Recipe</Link></li>
          <li><Link to="/all-recipes">All Recipes</Link></li>
          <li><Link to="/all-recipes-graphql">ALL Recipe GraphQL</Link></li>
          <li><Link to="/random-recipe-graphql">Random GraphQL</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/random-recipe" element={<RandomRecipePage />} />
        <Route path="/all-recipes" element={<AllRecipesPage />} />
        <Route path="/all-recipes-graphql" element={<AllRecipesPageGraphQL/>} />
        <Route path="/random-recipe-graphql" element={<RandomRecipePageGraphQL/>} />
      </Routes>
    </Router>
  );
};

export default App;