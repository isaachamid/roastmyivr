require('dotenv').config()
const axios = require('axios');

//GET '/'
const index = (req, res, next) => {
    res.send('Test IVR API!');
};

//POST '/ivr/start'
const start = (req, res, next) => {
    const apiPath = `${process.env.BASE_API}/portal/ivvrs`;
    const config = {
        headers: {
            'x-api-key': process.env.ROAST_API_KEY,
            'x-secret-key': process.env.ROAST_SECRET_KEY
        }
    }
    axios.post(apiPath, req.body, config)
        .then((response) => res.json(response.data))
        .catch((err) => {
            console.log(err);
            res.status(err.response.status).send({
                message: err.message,
                data: err.response.data
            });
        });
};


//GET '/ivr/:ivrId'
const getReport = (req, res, next) => {
    const apiPath = `${process.env.BASE_API}/portal/ivrs/${req.params.ivrId}`;
    const config = {
        headers: {
            'x-api-key': process.env.ROAST_API_KEY,
            'x-secret-key': process.env.ROAST_SECRET_KEY
        }
    }

    axios.get(apiPath, {}, config)
        .then((response) => res.json(response.data))
        .catch((err) => {
            console.log(err);
            res.status(err.response.status).send({
                message: err.message,
                data: err.response.data
            });
        });
};

//PATCH '/ivr/:ivrId/terminate'
const terminate = (req, res, next) => {
    const apiPath = `${process.env.BASE_API}/portal/ivrs/${req.params.ivrId}/process/terminate`;
    const config = {
        headers: {
            'x-api-key': process.env.ROAST_API_KEY,
            'x-secret-key': process.env.ROAST_SECRET_KEY
        }
    }

    axios.patch(apiPath, { "task": "FailProcess" }, config)
        .then((response) => res.json(response.data))
        .catch((err) => {
            console.log(err);
            res.status(err.response.status).send({
                message: err.message,
                data: err.response.data
            });
        });
};

//PATCH '/ivr/:ivrId/cancel-retry'
const cancelRetry = (req, res, next) => {
    const apiPath = `${process.env.BASE_API}/portal/ivrs/${req.params.ivrId}/process/cancel-retry`;
    const config = {
        headers: {
            'x-api-key': process.env.ROAST_API_KEY,
            'x-secret-key': process.env.ROAST_SECRET_KEY
        }
    }

    axios.patch(apiPath, {}, config)
        .then((response) => res.json(response.data))
        .catch((err) => {
            console.log(err);
            res.status(err.response.status).send({
                message: err.message,
                data: err.response.data
            });
        });
};

//export controller functions
module.exports = {
    index,
    start,
    getReport,
    terminate,
    cancelRetry
};