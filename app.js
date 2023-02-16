
const express = require('express');

const app = express();

app.use(express.json())

// import routes
const postsRoutes = require('./routers/posts');

app.get('/',(req, res, next) => {
    res.status(200).json("API for collect data about eazy training")
})

app.use('/posts', postsRoutes);

module.exports = app;