var settingsPage;
var lang;
var texts = require('./langs.js').texts();

function disconnect() {
	// localStorage.clear();
	require('./pagesApp.js').closeAllPages();
}

function createSettingsPage() {

	settingsPage = tabris.create('Page', {
		id: 'JobSettings',
		background: 'white',
		topLevel: true
	});

	tabris.create('TextView', {
		id: 'pref1Label',
		layoutData: {left: 10, top: 18, width: 120}
	}).appendTo(settingsPage);

	tabris.create('TextInput', {
		id: 'pref1Field',
		layoutData: {left: ['#pref1Label', 10], right: 10, baseline: '#pref1Label'}
	}).appendTo(settingsPage);

	tabris.create('TextView', {
		id: 'pref2Label',
		layoutData: {left: 10, top: ['#pref1Label', 18], width: 120}
	}).appendTo(settingsPage);

	tabris.create('TextInput', {
		id: 'pref2Field',
		layoutData: {left: ['#pref2Label', 10], right: 10, baseline: '#pref2Label'}
	}).appendTo(settingsPage);

	tabris.create('TextView', {
		id: 'pref3Label',
		layoutData: {left: 10, top: ['#pref2Label', 18], width: 120}
	}).appendTo(settingsPage);

	tabris.create('Picker', {
		id: 'langPicker',
		layoutData: {left: ['#pref3Label', 10], right: 10, baseline: '#pref3Label'}
	}).on('change:selection', function(widget, selection, options) {
	    if (options.index > 0) {
	    	lang = selection;
	    }
  	}).appendTo(settingsPage);

  	tabris.create('Button', {
		id: 'Save',
		layoutData: {right: 40, top: ['#pref3Label',40], width: 220}
	}).on('select', function() {
		localStorage.setItem('lang',lang);
		tabris.ui.children('Page').forEach(function(page) {
			page.apply(require('./langs.js').texts());
		});
	}).appendTo(settingsPage);

	tabris.create('Button', {
		id: 'Logout',
		layoutData: {right: 40, top: ['#Save',40], width: 220}
	}).on('select', function() {
		disconnect();
	}).appendTo(settingsPage);

	settingsPage.apply(texts);

	return settingsPage;

}

module.exports.createSettingsPage = createSettingsPage;
