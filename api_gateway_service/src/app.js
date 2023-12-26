

const express = require('express');
const authRoutes = require('./routes/authRoutes'); // Adjust path as necessary
const recipeRoute = require('./routes/recipeRoute'); // Adjust path as necessary
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
const schema = require('./graphql/recipeSchema'); // The schema file created earlier

const app = express();




main()

async function main() {
    app.use(express.json());
    app.use('/api/auth', authRoutes);
    app.use('/api/recipe', recipeRoute);
    // app.use(
    //     "/graphql",
    //     graphqlHTTP({
    //         schema: schema,
    //         rootValue: root,
    //         graphiql: true,
    //     })
    // )
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true, // Enables the GraphiQL IDE
    }));
    const PORT = 8080;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}