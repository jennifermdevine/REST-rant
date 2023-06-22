const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Root route hit!');
    res.send('<h1>Hello world!</h1>');
})












app.listen(3000, function() {
    console.log('Server is running!');
})