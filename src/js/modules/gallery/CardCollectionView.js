'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var CardView = require('./CardView.js');
var fetchImages = require('./fetcher');

module.exports = Marionette.CollectionView.extend({
	tagName: 'ul',
	className: 'gallery',
	childView: CardView,
	initialize: function() {
		App.on('gallery:load', function(tags) {
			fetchImages(tags, function(data) {
				this.collection = new Backbone.Collection(data.items);
				this.render();
			}.bind(this));
		}.bind(this));
	},
});
