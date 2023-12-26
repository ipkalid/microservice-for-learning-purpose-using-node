const Joi = require('joi'); // For validation
const axios = require("axios");




const userRegisterValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const register = async (req, res) => {
    const { error, value } = userRegisterValidation.validate(req.body);

    if (error) {
        // Send a 400 Bad Request if validation fails
        return res.status(400).send({ "error": error.details[0].message });
    }




    let data = {
        name: value.name,
        email: value.email,
        password: value.password
    };

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://us-central1-quantum-backup-406615.cloudfunctions.net/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };


    axios.request(config)
        .then((response) => {
            return res.json(response.data);
        })
        .catch((error) => {
            return res.status(400).send({ error: error });
        });
};


const userLoginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
const login = async (req, res) => {
    const { error, value } = userLoginValidation.validate(req.body);

    if (error) {
        // Send a 400 Bad Request if validation fails
        return res.status(400).send({ "error": error.details[0].message });
    }




    let data = {
        email: value.email,
        password: value.password
    };

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://us-central1-quantum-backup-406615.cloudfunctions.net/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    console.log("kkk")

    axios.request(config)
        .then((response) => {
            return res.json(response.data);
        })
        .catch((error) => {
            return res.status(400).send({ error: error });
        });

};

module.exports = {
    register,
    login,
};
