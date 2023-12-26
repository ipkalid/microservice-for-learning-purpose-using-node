const User = require("../models/users"); // Assuming you have a User model
const Joi = require('joi'); // For validation
const { getDatabase } = require('../config/database');


const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const { Db } = require("mongodb");

/**
 * 
 * @param {Db} database 
 * @param {string} token 
 * @returns {Promise<Dbboolean>}
 */

async function validateToken(database, token) {
    let usersCollections = database.collection("users")
    var ObjectId = require('mongodb').ObjectId;

    try {
        var o_id = new ObjectId(token);
        let user = await usersCollections.findOne({ _id: o_id })
        if (user == null) {
            return false
        }
        return true
    } catch {
        return false
    }

}



const randomRecipe = async (req, res) => {
    let token = req.headers.token

    if (token == null) {
        return res.status(400).send({ "error": "no token" });
    }
    let database = await getDatabase()

    let isValidateToken = await validateToken(database, token)

    if (!isValidateToken) {
        return res.status(400).send({ "error": "Invalid token" });
    }





    let recipesCollections = database.collection("recipes")
    let randomList = await recipesCollections.find().toArray();
    var randomRecipe = randomList[Math.floor(Math.random() * randomList.length)];





    res.json({ message: 'successful', recipes: randomRecipe });
};


const allRecipe = async (req, res) => {

    let token = req.headers.token

    if (token == null) {
        return res.status(400).send({ "error": "no token" });
    }
    let database = await getDatabase()

    let isValidateToken = await validateToken(database, token)

    if (!isValidateToken) {
        return res.status(400).send({ "error": "Invalid token" });
    }

    let recipesCollections = database.collection("recipes")
    let recipes = await recipesCollections.find({}).toArray()



    res.json({ message: 'successful', recipes: recipes }).t;
};




module.exports = {
    allRecipe, randomRecipe
}

