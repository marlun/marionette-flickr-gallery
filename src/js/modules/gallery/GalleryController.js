'use strict';

var Marionette = require('backbone.marionette');
var CardCollectionView = require('./CardCollectionView');
var TagCollectionView = require('./TagCollectionView');

// We are given the container which we can use to show our views. The return
// value should be an object with all the controller actions linked to in the
// appRoutes property of the router.
module.exports = Marionette.Object.extend({
	initialize: function(opts) {
		this.rootView = opts.rootView;
	},
	home: function() {
		var tagsView = new TagCollectionView();
		this.rootView.getRegion('sidebar').show(tagsView);
		var cardsView = new CardCollectionView();
		this.rootView.getRegion('body').show(cardsView);

		// TODO Move this somewhere that make sense
		tagsView.selectTag(tagsView.children.first());
	}
});
