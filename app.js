var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.headers['user-agent']);
});


app.listen(3000, () => console.log('Listening on port 3000'));
