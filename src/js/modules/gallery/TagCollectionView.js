'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var TagView = require('./TagView.js');

module.exports = Marionette.CompositeView.extend({
	template: require('./TagCollectionViewTemplate.html'),
	childView: TagView,
	childViewContainer: 'ul',
	events: {
		'keypress .js-tag-form': 'addNewTag',
	},
	childEvents: {
		'click': 'onTagClick'
	},
	initialize: function() {
		this.collection = new Backbone.Collection([
			{ name: 'Cat' },
			{ name: 'Jaguar' },
			{ name: 'Tiger' },
			{ name: 'Lion' },
		]);
	},
	onTagClick: function(view) {
		this.selectTag(view);
	},
	selectTag: function(view) {
		if (this.hasOwnProperty('selected')) {
			if (this.selected.cid !== view.cid) {
				this.selected.unselect();
				this.selected = view.select();
			}
		} else {
			this.selected = view.select();
		}
		App.trigger("gallery:load", this.selected.model.get('name'));
	},
	addNewTag: function(e) {
		if (e.which === 13) {
			this.collection.add({
				name: e.target.value
			});
			e.target.value = '';
		}
	}
});
