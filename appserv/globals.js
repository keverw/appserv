global.Page = function(path) {
	return require('../pages/'+path);
}

global.Class = function(path) {
	return require('../classes/'+path);
}

global.error_page = function(req, res, code, msg) {
	//msg is is if you wanna add more info, only.
	if (code == 404)
	{
		if (global.custom404)
		{
			var error_tpl = 'errors/404';
		}
		else
		{
			var error_tpl = 'errors/error';
		}
		
		var title = '404 Not Found';
		var message = 'The requested URL ' + req.url + ' was not found on this server.';
	}
	else if (code == 500)
	{
		var error_tpl = 'errors/error';
		var title = '500 Internal Server Error';
		var message = 'Internal Server Error.';
	}
	else
	{
		var error_tpl = 'errors/error';
		var title = code + ' Unknown Server Error';
		var message = 'Unknown Server Error.';
	}
	
	if (msg) {
		message += '<br>' + msg;
	}
	
	res.render(error_tpl, {layout: false, 'Content-Type': 'text/html', status: 500,
		locals:
		{
			title: title,
			message: message,
			port: global.port,
			url: req.url,
			server: global.domain
		}
	});
}