'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
	tagName: 'li',
	className: 'card',
	template: require('./CardViewTemplate.html'),
	events: {
		'click .card__delete': 'onDelete'
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.destroy);
	},
	onDelete: function(e) {
		this.model.destroy();
	}
});
