var express     = require('express');
var bodyParser  = require('body-parser');
var router      = express.Router();
var app         = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


var users = require("./data/authent");

app.use('/',users);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


