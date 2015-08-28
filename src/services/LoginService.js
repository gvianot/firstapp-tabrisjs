Promise = require('promise');
require('whatwg-fetch');

function checkLogin(email, password, cb) {
	/*var xhr = new tabris.XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
		  window.plugins.toast.showShortTop('Reading OK ' + xhr.responseText);
		  cb();
		}
	};
	xhr.open('GET', 'http://www.telize.com/geoip');
	xhr.send();*/

	fetch('http://www.telize.com/geoip')
	.then(function(response) {
	  	return response.json();
	}).then(function(json) {
		window.plugins.toast.showShortTop('ip' + json.ip);
	}).catch(function(error) {
	  console.log('There has been a problem with your fetch operation: ' + error.message);
	});

	//window.plugins.toast.showShortTop('email:' + email + ' pwd:' + password);
	cb(email,password);
}

module.exports.checkLogin = checkLogin;