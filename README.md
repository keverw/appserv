#appserv 0.1.1 for node.js#

This is a simple application server in node.js, A starting point for apps. Tested on node.js version 0.6.15

to start run `node app.js`

This is built on top of express.js, connect and node.js

##Static file server##

`public_files` holds static file, like images, css, client side js. So if you put `profile.png` as an image, 'serveraddress/profile.png' will load it.

What I would do is, create a `js` folder within `public_files` and put my client side JS scripts in there. So for exmaple `serveraddress/js/main.js`

##Routing##
You put your routes in `routes.js`, refer to express documentation for more details on how theses work http://expressjs.com/guide.html#view-rendering

##Templating##
to organize the app, I store pages in `/pages` similar to a controller in other frameworks I guess.

I put views in `/views`

The template engine I perfer is EJS http://embeddedjs.com/

to use http://expressjs.com/guide.html#view-rendering

##config.js##
`config.js` is where app config info should go.

##Classes
`classes` should store namespaces/classes of custom functions.

This app comes up an example index and class

##Custom 404 page##

If you want to make a custom 404 page edit `/views/errors/404.ejs` and set `custom404` to true in `config.js`

##Specific JS or CSS files, for a certain view##
if you want to have certain js files in a certain view only, not in the `layout.ejs` then send an a varable call `js_files` with an array of the js files to that view. You can also send an array to the `css_files` varable for css files.


	res.render('index', {
		locals: {
					js_files: ['indexonly', 'socialwidget'],
					css_files: ['socialwidget']
				}
		});
		
##Todo##
Make js_files and css_files a global funtion, to render in the template with one line.

##License##
The license for this, except whats in the node_modules, is under the BSD(aka, I don't really care). I hacked this together and just putting it out in case anyone finds it useful, and for myself.

##Redownload packages##

This comes with the packages already to ensure that it will work out of the box. But if you really want to reinstall/download use the following, also it would be best to make a backup before doing this just to be safe.

	npm install express
	npm install ejs
