var PAGE_MARGIN = 16;
var texts = require('./langs.js').texts();


function createJobsList(jobsList) {

  return tabris.create('CollectionView', {
    layoutData: {left: 0, right: 0, top: 30, bottom: 0},
    itemHeight: 72,
    items: jobsList,
    initializeCell: function(cell) {

      var titleTextView = tabris.create('TextView', {
        layoutData: {left: 64, right: PAGE_MARGIN, top: PAGE_MARGIN},
        markupEnabled: true,
        textColor: '#4a4a4a'
      }).appendTo(cell);

      cell.on('change:item', function(widget, job) {
        titleTextView.set('text', 'ID' + job.identifier + ' ' + job.title);

      });
    }
  }).on('select', function(target, value) {
    require('./jobDetails.js').createJobDetailsPage(value).open();
  });
}

function createJobListingPage() {

	tabris.create('Action', {
	  id: 'JobSettings',
	  image: {src: 'images/action_settings.png', scale: 3}
	}).on('select', function() {
	  require('./settings.js').createSettingsPage().open();
	});

  var jobListingPage = tabris.create('Page', {
        id: 'JobListingPage',
        background: 'white',
        topLevel: true
  });


  tabris.create('Button', {
    id: 'Search',
    layoutData: {right: 40, top: 0}
  }).on('select', function() {
      var jobs = require('./jobs.json');
      createJobsList(jobs).appendTo(jobListingPage);

  }).appendTo(jobListingPage);


  jobListingPage.apply(texts);



	return jobListingPage;

}



module.exports.createJobListingPage = createJobListingPage;