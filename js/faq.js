$(function () {
  $('.faq-question').on('click', function () {
    var $button = $(this), $answer = $('#' + $button.attr('aria-controls'));
    var opening = $button.attr('aria-expanded') !== 'true';
    $button.attr('aria-expanded', String(opening));
    $answer.stop(true, true);
    if (opening) { $answer.prop('hidden', false).hide().slideDown(250); }
    else { $answer.slideUp(250, function () { $answer.prop('hidden', true); }); }
  });
});
