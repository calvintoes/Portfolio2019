$(document).ready(function() {

 $('#portfolioMenu div').click(function() {

var chosenFilter = $(this).attr('data-filter');

$('#portfolioMenu div').removeClass('active');

$(this).addClass('active');

if(chosenFilter == 'all') {

  $('#contentHolder').children('div').show();
}
else {

  $('#contentHolder').children('div:not(.' + chosenFilter + ')').hide();

  $('#contentHolder').children('div.' + chosenFilter).show();

}

return false;

  });

});