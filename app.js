
const express = require('express');

const app = express();

app.use(express.json())

// import routes
const postsRoutes = require('./routers/posts');
const authorsRoutes = require('./routers/authors');
const booksRoutes = require('./routers/books');

app.get('/',(req, res, next) => {
    res.status(200).json("API for collect data about eazy training")
})

app.use('/posts', postsRoutes);
app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

module.exports = app;