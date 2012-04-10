module.exports = {
page: function (req, res, next){
		var demo = Class('demo');
		res.render('index', {
			locals: {
				name: demo.hi(),
				//name: 'Kevin',
				js_files: ['foo', 'bar', 'baz']
			}
		});
	}
}