const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
} = require("graphql");
const axios = require("axios");

// Define Recipe type
const RecipeType = new GraphQLObjectType({
    name: "Recipe",
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        calories: { type: GraphQLInt },
        ingredients: { type: new GraphQLList(GraphQLString) },
    }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        allRecipes: {
            args: {
                token: { type: GraphQLString },
            },
            type: new GraphQLList(RecipeType),
            resolve(parent, args) {
                // Fetch data from your existing API
                return axios
                    .get(
                        "https://recemmmendation-app-tpsnv5ozsq-uc.a.run.app/api/recipe/allRecipe",
                        {
                            headers: { token: args.token },
                        }
                    )
                    .then((res) => res.data.recipes);
            },
        },
        randomRecipe: {
            type: RecipeType,
            args: {
                token: { type: GraphQLString },
            },
            resolve(parent, args) {
                // Fetch data from your existing API
                return axios
                    .get(
                        "https://recemmmendation-app-tpsnv5ozsq-uc.a.run.app/api/recipe/randomRecipe",
                        {
                            headers: { token: args.token },
                        }
                    )
                    .then((res) => res.data.recipes);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
