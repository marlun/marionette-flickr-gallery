var test = require('tape');
var MainView = require('../../src/js/modules/app/MainView');

test('has required regions', function(t) {
	t.plan(2);
	var view = new MainView();
	t.ok(view.regions.hasOwnProperty('sidebar'), 'has sidebar region');
	t.ok(view.regions.hasOwnProperty('body'), 'has body region');
});
