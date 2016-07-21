var express = require('express'),
	app = express();

app.use(require('body-parser')());

//app.use(require(__dirname + '/assets/js/router.js')(express.Router()));
app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
	console.log('Web API server started successfully');
});