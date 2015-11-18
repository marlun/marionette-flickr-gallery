'use strict';

var $ = require('jquery');

module.exports = function(tags, callback) {
	var link = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var opts = {
		tags: tags,
		tagmode: "any",
		format: "json"
	};
	$.getJSON(link, opts, callback);
};
