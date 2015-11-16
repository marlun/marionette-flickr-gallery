'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	el: 'body',
	template: require('./MainViewTemplate.html'),
	regions: {
		sidebar: '.site-nav',
		body: '.site-body',
	}
});
