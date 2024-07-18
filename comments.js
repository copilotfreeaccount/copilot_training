// Create web server
// 1. Import express
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Define a port
const port = 3000;

// 4. Define the route for the homepage
app.get('/', (req, res) => {
    res.send('Hello world');
});

// 5. Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// 6. Define the route for the comments
app.get('/comments', (req, res) => {
    res.send('Comments page');
});
// 7. Define the route for a specific comment
app.get('/comments/:commentId', (req, res) => {
    res.send(`Comment ID: ${req.params.commentId}`);
});

// 8. Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});