var texts = require('./langs.js').texts();
var newsPage;


function createNewsPage() {
	newsPage = tabris.create('Page', {
	    id: 'News',
	    background: 'white',
	    topLevel: true
  });


	tabris.create('TextView', {
			id: 'jobTitle',
			layoutData: {left: 10, top: 18, width: 120}
		}).appendTo(newsPage);

	return newsPage.apply(texts);
}

module.exports.createNewsPage = createNewsPage;