$(function () {
  var $cards = $('.sport-card');
  function filter() {
    var query = $('#sportSearch').val().trim().toLowerCase(), category = $('#sportCategory').val(), count = 0;
    $cards.each(function () {
      var $card = $(this), matches = $card.text().toLowerCase().includes(query) && (category === 'all' || $card.attr('data-category') === category);
      $card.prop('hidden', !matches); if (matches) count++;
    });
    $('#searchCount').text('Showing ' + count + ' of ' + $cards.length + ' activities');
    $('#noResults').prop('hidden', count !== 0);
  }
  $('#sportSearch').on('input', filter); $('#sportCategory').on('change', filter);
  $('#clearFilters').on('click', function () { $('#sportSearch').val(''); $('#sportCategory').val('all'); filter(); });
  filter();
});
