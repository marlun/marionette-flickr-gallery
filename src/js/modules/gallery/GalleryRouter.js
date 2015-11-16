'use strict';

var Marionette = require('backbone.marionette');
var GalleryController = require('./GalleryController');

// The values of the appRoutes are function on the controller which will be
// called automatically when the user navigates to the corresponding URL
module.exports = Marionette.AppRouter.extend({
	initialize: function() {
		this.controller = new GalleryController(this.options);
	},
	appRoutes: {
		'': 'home'
	}
});

