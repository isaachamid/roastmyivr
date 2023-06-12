require('dotenv').config()
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Test API!'));

// add ivr and start roasting and save user data
app.post('/ivr/start', async (req, res) => {
    const apiPath = `${process.env.BASE_API}/portal/ivrs`;
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
});

// get IVR roasting report that include every things
app.get('/ivr/:ivrId', async (req, res) => {
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
});

// terminate roasting process
app.patch('/ivr/:ivrId/terminate', async (req, res) => {
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
});

// cancel retry roasting process
app.patch('/ivr/:ivrId/cancel-retry', async (req, res) => {
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
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});