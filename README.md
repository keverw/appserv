This is a simple application server in node.js, A starting point for apps

to start

node app.js

This is built on top of express.js, connect and node.js

to redownload packages(if needed) use:

`npm install express
npm install ejs`

`public_files` holds static file, like images, css, client side js. So if you put `profile.png` as an image, 'serveraddress/profile.png' will load it.

What I would do is, create a `js` folder within `public_files` and put my client side JS scripts in there. So for exmaple `serveraddress/js/main.js`

You put your routes in `routes.js`, refer to express documentation for more details. http://expressjs.com/guide.html#view-rendering

to orginize the app, I store pages in `/pages` simuilar to a controller in other frameworks I guess.

I put views in `/views`

The template engine I perfer is EJS http://embeddedjs.com/

to use http://expressjs.com/guide.html#view-rendering

`config.js` is where app config info should go.

`classes` should store namespaces/classes of custom functions.


This app comes up an example index and class

If you want to make a custom 404 page edit `/views/errors/404.ejs` and set `custom404` to true in `config.js`

The license for this, except whats in the node_modules, is under the BSD(aka, I don't really care). I hacked this together and just putting it out in case anyone finds it useful, and for myself.


if you want to have certian js files in a view, not in the `layout.ejs` then send an a varable call `js_files` with an array of the js files to that view 

eg:

`res.render('index', {
			locals: {
				js_files: ['foo', 'bar', 'baz']
			}
		});`