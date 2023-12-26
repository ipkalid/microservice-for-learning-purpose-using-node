const User = require("../models/users"); // Assuming you have a User model
const Joi = require('joi'); // For validation
const { getDatabase } = require('../config/database');


const jwt = require('jsonwebtoken');
const crypto = require("crypto")



const userRegisterValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const register = async (req, res) => {
    const data = req.body;
    const { error, value } = userRegisterValidation.validate(req.body);

    if (error) {
        // Send a 400 Bad Request if validation fails
        return res.status(400).send({ "error": error.details[0].message });
    }

    // Process the data...
    console.log(value);

    let database = await getDatabase()
    let usersCollections = database.collection("users")
    let user = await usersCollections.findOne({ email: value.email })
    if (user != null) {
        return res.status(400).send({ "error": "user already register" });
    }

    let hashedPassword = crypto.createHash("sha256").digest('hex');

    console.log(hashedPassword)

    let result = await usersCollections.insertOne({ name: value.name, email: value.email, password: hashedPassword })
    console.log(result)

    // Send a response
    res.json({ message: 'Registration successful', userData: value });
};


const userLoginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
const login = async (req, res) => {
    const data = req.body;
    const { error, value } = userLoginValidation.validate(req.body);

    if (error) {
        return res.status(400).send({ "error": error.details[0].message });
    }

    let hashedPassword = crypto.createHash("sha256").digest('hex');

    let database = await getDatabase()
    let usersCollections = database.collection("users")
    let user = await usersCollections.findOne({ email: value.email, password: hashedPassword })
    if (user == null) {
        return res.status(400).send({ "error": "wrong email or password" });
    }

    res.json({ message: 'Login successful', userId: user._id });

};

module.exports = {
    register,
    login,
};
