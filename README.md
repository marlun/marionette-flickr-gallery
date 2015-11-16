# Flickr Gallery

Very simple Backbone.js/Marionette.js example which uses the public Flickr API
to show images for a couple of tags.

## Installation

Download the code and run

	npm install

## Testing

Run all test in a headless browser by running

	npm test

## Development

You can run the app locally by running the following after installing the
dependencies (see Installation)

	npm start

* A browser will be opened and the app will start running with live reload support
* SASS is automatically compiled on change by node-sass
* JavaScript is automatically compiled using watchify with support for underscore templates ending in .html
* src/index.html will me automatically moved on change to dist/index.html

## Deployment

Deployment is made to marlun-axis.surge.sh by running

	npm run deploy

* SASS will be compiled and compressed using node-sass
* JavaScript will be compiled with browserify and minified using uglify.js
* src/index.js will be minified using html-minifier and moved to dist/index.html
