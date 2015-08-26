var texts = require('./langs.js').texts();

function disconnect(){
	localStorage.removeItem('login');
	localStorage.removeItem('password');
	localStorage.removeItem('lang');
	window.plugins.toast.showShortTop(texts['#Logout'].text);
	require('./login.js').checkIsConnected();
}

function createSettingsPage() {

	var settingsPage = tabris.create('Page', {
		id: 'JobSettings',
		background: 'white'
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

	tabris.create('Button', {
		id: 'Save',
		layoutData: {right: 40, top: ['#pref2Field',40], width: 220}
	}).on('select', function() {
		window.plugins.toast.showShortTop(texts['#SaveOk'].text);
	}).appendTo(settingsPage);

	tabris.create('Picker', {
		id: 'langPicker',
		layoutData: {right: 40, top: ['#Save', 18], width: 220}
	}).on('change:selection', function(widget, selection, options) {
	    if (options.index > 0) {
	      localStorage.setItem('lang',selection);
	    }
  	}).appendTo(settingsPage);

	tabris.create('Button', {
		id: 'Logout',
		layoutData: {right: 40, top: ['#langPicker',40], width: 220}
	}).on('select', function() {
		disconnect();
	}).appendTo(settingsPage);


	settingsPage.apply(texts);


	return settingsPage;

}

module.exports.createSettingsPage = createSettingsPage;