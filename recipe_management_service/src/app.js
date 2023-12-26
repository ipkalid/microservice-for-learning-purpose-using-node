

const express = require('express');
const authRoutes = require('./routes/authRoutes'); // Adjust path as necessary
const recipeRoute = require('./routes/recipeRoute'); // Adjust path as necessary
const app = express();







main()

async function main() {
    app.use(express.json());
    app.use('/api/auth', authRoutes);
    app.use('/api/recipe', recipeRoute);
    const PORT = 8080;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}