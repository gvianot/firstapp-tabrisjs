function openAllPages() {
	require('./news.js').createNewsPage().open();
	require('./settings.js').createSettingsPage().open();
	require('./jobListing.js').createJobListingPage().open();
}

function closeAllPages() {
	tabris.ui.children('Page').forEach(function(page) {
		if(page.get('id') !== 'loginPage') {
			page.dispose();
		}
	});
}
module.exports.openAllPages = openAllPages;
module.exports.closeAllPages = closeAllPages;