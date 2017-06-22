var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/')));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.set('views', path.join(__dirname, './client/views'));


require('./config/mongoose_setup.js');
require('./config/routes.js')(app);

app.listen(8000, function(){
    console.log('listening on port 8000');
})