const axios = require("axios");

const randomRecipe = async (req, res) => {
    let token = req.headers.token;

    if (token == null) {
        return res.status(400).send({ error: "no token" });
    }

    const config = {
        headers: { token: token },
    };

    try {
        let response = await axios.get(
            "https://app-tpsnv5ozsq-uc.a.run.app/api/recipe/randomRecipe",
            config
        );



        if (response.status != 200) {
            return res.status(400).send({ error: "error status code" });
        }

        res.json(response.data);
    } catch (error) {
        return res.status(400).send({ error: error });
    }
};

const allRecipe = async (req, res) => {
    let token = req.headers.token;

    if (token == null) {
        return res.status(400).send({ error: "no token" });
    }

    const config = {
        headers: { token: token },
    };

    try {
        let response = await axios.get(
            "https://app-tpsnv5ozsq-uc.a.run.app/api/recipe/allRecipe",
            config
        );



        if (response.status != 200) {
            return res.status(400).send({ error: "error status code" });
        }

        res.json(response.data);
    } catch (error) {
        return res.status(400).send({ error: error });
    }
};

module.exports = {
    allRecipe,
    randomRecipe,
};
