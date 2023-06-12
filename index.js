require('dotenv').config()
const express = require('express');
const routes = require('./routes'); // import the routes
const app = express();
app.use(express.json());
app.use('/', routes); //to use the routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});