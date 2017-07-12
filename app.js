var express = require("express")
var app = express();


app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.get('/me', function(req, res) {
    res.send('@StephM')
});

app.get('/who/:name?', function(req, res) {
    var name = req.params.name;
    res.send(`hello ${name}`)
});

app.get('/:name?/:title?', function(req, res) {
    var name = req.params.name;
    var title = req.params.title;
    res.send(`<p> ${name} - ${title}</p>`)
    console.log(`name: ${name}, title: ${title}`)
});

app.get('*', function(req, res) {
    res.send('Bad route')
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000')
});
