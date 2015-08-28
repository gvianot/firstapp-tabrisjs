var texts = require('./langs.js').texts();


function createJobDetailsPage(job) {

	var jobDetailsPage = tabris.create('Page', {
		id: 'jobDetailsPage',
		background: 'white'
	});

	tabris.create('TextView', {
		id: 'jobTitle',
		layoutData: {left: 10, top: 18, width: 120}
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		layoutData: {left: ['#jobTitle', 10], right: 10, baseline: '#jobTitle'},
		markupEnabled: true,
    	text: '<b>' + job.title + '</b>'
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		id: 'jobArea',
		layoutData: {left: 10, top: ['#jobTitle', 18], width: 120}
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		layoutData: {left: ['#jobArea', 10], right: 10, baseline: '#jobArea'},
		markupEnabled: true,
    	text: '<b>' + job.area.label + '</b>'
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		id: 'jobCreationDate',
		layoutData: {left: 10, top: ['#jobArea', 18], width: 120}
	}).appendTo(jobDetailsPage);

	tabris.create('TextView', {
		layoutData: {left: ['#jobCreationDate', 10], right: 10, baseline: '#jobCreationDate'},
		text: job.openDate.slice(0, 10)
	}).appendTo(jobDetailsPage);


	jobDetailsPage.apply(texts);


	return jobDetailsPage;

}

module.exports.createJobDetailsPage = createJobDetailsPage;