/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const axios = require('axios');


exports.register = (req, res) => {


    if (req.method !== "POST") {
        return res.status(401).json({
            message: "Not allowed"
        });
    }

    let data = {
        "email": req.body.email,
        "password": req.body.password
    };

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://app-tpsnv5ozsq-uc.a.run.app/api/auth/login',
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
