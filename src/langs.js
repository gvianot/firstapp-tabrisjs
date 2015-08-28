module.exports.texts = function() {

	var lang = localStorage.getItem('lang');

	lang = lang || tabris.device.get('language').replace(/-.*/, '');

	console.log(lang);
	  try {
	    return require('./lang/' + lang + '.json');
	  } catch (ex) {
	  	console.log(ex);
	    return require('./lang/en.json');
	  }
};
