/* globals fetch: false, Promise: true*/
var texts = require('./langs.js').texts();


function createLoginPage() {

	var loginPage = tabris.create('Page', {
		id: 'loginPage',
		background: 'white',
		topLevel: true
	});


	tabris.create('TextView', {
		id: 'loginLabel',
		layoutData: {left: 10, top: 18, width: 120}
	}).appendTo(loginPage);

	var login = tabris.create('TextInput', {
		id: 'loginField',
		layoutData: {left: ['#loginLabel', 10], right: 10, baseline: '#loginLabel'}
	}).on('change:text', function(widget, text) {
		localStorage.setItem('login',text);
	}).appendTo(loginPage);

	tabris.create('TextView', {
		id: 'passwordLabel',
		layoutData: {left: 10, top: ['#loginLabel', 18], width: 120}
	}).appendTo(loginPage);

	var password = tabris.create('TextInput', {
		id: 'passwordField',
		type: 'password',
		layoutData: {left: ['#passwordLabel', 10], right: 10, baseline: '#passwordLabel'}
	}).on('change:text', function(widget, text) {
		localStorage.setItem('password',text);
	}).appendTo(loginPage);

	var button = tabris.create('Button', {
		id: 'loginButton',
		layoutData: {right: 40, top: ['#passwordField',40]}
	}).appendTo(loginPage);

	button.on('select', function() {

		var login = localStorage.getItem('login');
		var pwd = localStorage.getItem('password');
		console.log('login ' + login + ' pwd ' + pwd);

		require('./jobListing.js').createJobListingPage().open();
		

	});



	loginPage.apply(texts);

	return loginPage;

}
function checkIsConnected() {
	var login = localStorage.getItem('login');
	var pwd = localStorage.getItem('password');


	if( login === null &&  pwd === null) {
		createLoginPage().open();
	}else{
		require('./jobListing.js').createJobListingPage().open();
	}
}

checkIsConnected();
module.exports.checkIsConnected = checkIsConnected;
module.exports.createLoginPage = createLoginPage;

