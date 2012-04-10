module.exports = function(app){
	app.get('/', Page('index').page);
}