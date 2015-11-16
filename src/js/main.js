'use strict';

var Backbone = require('backbone');
var Application = require('./modules/app/App');
var GalleryRouter = require('./modules/gallery/GalleryRouter');

var app = window.App = new Application();

app.gallery = new GalleryRouter({
	rootView: App.layout
});

app.on('start', function() {
	Backbone.history.start();
});

app.start();
