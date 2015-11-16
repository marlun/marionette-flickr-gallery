'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
	tagName: 'li',
	className: 'tag',
	template: require('./TagViewTemplate.html'),
	triggers: {
		'click': 'click'
	},
	select: function() {
		this.el.classList.add('tag--selected');
		return this;
	},
	unselect: function() {
		this.el.classList.remove('tag--selected');
		return this;
	}
});
