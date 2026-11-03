$(function () {
  function update() { var count = $('#favList').children().length; $('#favCount').text(count); $('#favEmpty').toggle(count === 0); }
  $('#favForm').on('submit', function (event) {
    event.preventDefault(); var value = $('#favInput').val().trim();
    if (!value) { $('#favError').text('Please type something before adding.'); return; }
    $('#favError').text('');
    var $item = $('<li>');
    $('<span>').text(value).appendTo($item);
    $('<button>', { type: 'button', class: 'remove-btn' }).text('Remove').attr('aria-label', 'Remove ' + value).appendTo($item);
    $('#favList').append($item); $('#favInput').val('').trigger('focus'); update();
  });
  $('#favList').on('click', '.remove-btn', function () { $(this).closest('li').remove(); update(); });
  update();
});
