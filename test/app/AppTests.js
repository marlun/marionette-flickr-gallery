var test = require('tape');
var App = require('../../src/js/modules/app/App.js');

test('adds a default layout', function(t) {
	t.plan(1);
	var app = new App();
	t.ok(app.hasOwnProperty('layout'), 'has default layout');
});
