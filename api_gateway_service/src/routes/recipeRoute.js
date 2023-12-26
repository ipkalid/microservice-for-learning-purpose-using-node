const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route for user registration
router.get('/randomRecipe', recipeController.randomRecipe);

// Route for user login
router.get('/allRecipe', recipeController.allRecipe);



module.exports = router;