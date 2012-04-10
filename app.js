require('./globals.js');
require('./config.js');

global.siteurl = global.protocol + '://' + global.domain; //use this if you need to refer to the domain itself, like in a email

var express = require('express');
var app = express.createServer();

app.use(express.static(__dirname + '/public_files'));
app.use(express.bodyParser()); //req.body
app.use(express.cookieParser());
app.use(express.session({secret: global.sess_secret}));

app.set('views', __dirname + '/views'); // Makes the director '/views' the place where all EJS files should be stored
app.set('view engine', 'ejs'); // Makes EJS the default template engine
app.set('view options', { // Makes the <? and ?> open and close tags, like how PHP has <? and ?>
	open: '<?',
	close: '?>'
});

//setup the errors
app.error(function(err, req, res, next){
	if (err instanceof NotFound) {
		error_page(req, res, 404);
	}
	else {
		error_page(req, res, 500);
	}
});

require('./routes')(app);

app.all('*', function(req, res){ //Keep this as the last route
	throw new NotFound;
});

function NotFound(msg){
	this.name = 'NotFound';
	Error.call(this, msg);
	Error.captureStackTrace(this, arguments.callee);
}
NotFound.prototype.__proto__ = Error.prototype;

app.listen(global.port);

console.log('server running at http://' + global.domain + ':' + port + '\nCTRL + C to shutdown');