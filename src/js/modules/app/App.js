'use strict';

var Marionette = require('backbone.marionette');
var MainView = require('./MainView');

module.exports = Marionette.Application.extend({
	initialize: function() {
		this.layout = new MainView();
		this.layout.render();
	}
});
