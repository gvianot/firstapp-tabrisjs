var PAGE_MARGIN = 16;
var texts = require('./langs.js').texts();

var jobListingPage;


function createJobsList(jobsList) {

  tabris.create('TextView', {
    layoutData: {right: ['#Search', 80], top: 0},
    markupEnabled: true,
    text:jobsList.length + ' ' + texts['#offersLabel'].text
  }).appendTo(jobListingPage);

  return tabris.create('CollectionView', {
    layoutData: {left: 0, right: 0, top: 30, bottom: 0},
    itemHeight: 72,
    items: jobsList,
    initializeCell: function(cell) {

      var imageView = tabris.create('ImageView', {
        layoutData: {left: PAGE_MARGIN, centerY: 0, width: 32, height: 48},
        scaleMode: 'fit'
      }).appendTo(cell);

      var titleTextView = tabris.create('TextView', {
        layoutData: {left: 64, right: PAGE_MARGIN, top: PAGE_MARGIN},
        markupEnabled: true,
        textColor: '#4a4a4a'
      }).appendTo(cell);

      var jobLabelTextView = tabris.create('TextView', {
        layoutData: {left: 64, right: PAGE_MARGIN, top: [titleTextView, 4]},
        markupEnabled: true,
        textColor: '#4a4a4a'
      }).appendTo(cell);

      cell.on('change:item', function(widget, job) {
        imageView.set('image', 'images/eye.png');
        titleTextView.set('text', job.title);
        jobLabelTextView.set('text',job.area.label + ',' + job.country.label + '-' + job.openDate.slice(0, 10));
      });
    }
  }).on('select', function(target, value) {
    require('./jobDetails.js').createJobDetailsPage(value).open();
  });
}

function createJobListingPage() {


  jobListingPage = tabris.create('Page', {
        id: 'JobListingPage',
        background: 'white',
        topLevel: true
  });

  tabris.create('Button', {
    id: 'Search',
    layoutData: {right: 40, top: 0}
  }).on('select', function() {
      createJobsList(require('./jobs.json')).appendTo(jobListingPage);

  }).appendTo(jobListingPage);

  jobListingPage.apply(texts);

	return jobListingPage;

}



module.exports.createJobListingPage = createJobListingPage;