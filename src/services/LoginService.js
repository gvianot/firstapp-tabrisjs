
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
	window.plugins.toast.showShortTop('email:' + email + ' pwd:' + password);
	cb(email,password);
}

module.exports.checkLogin = checkLogin;