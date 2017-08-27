var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({bye: 'bye birdie'});
});

app.listen(port, () => {
    console.log("Server started!");
});