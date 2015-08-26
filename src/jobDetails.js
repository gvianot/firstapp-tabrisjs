var texts = require('./langs.js').texts();


function createJobDetailsPage(job) {

	var jobDetailsPage = tabris.create('Page', {
		id: 'jobDetailsPage',
		background: 'white'
	});

	tabris.create('TextView', {
		id: 'pref1Label',
		layoutData: {left: 10, top: 18, width: 120}
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		layoutData: {left: ['#pref1Label', 10], right: 10, baseline: '#pref1Label'},
		markupEnabled: true,
    	text: '<b>' + job.title + '</b>'
	}).appendTo(jobDetailsPage);


	jobDetailsPage.apply(texts);


	return jobDetailsPage;

}

module.exports.createJobDetailsPage = createJobDetailsPage;