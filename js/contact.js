$(function () {
  var $form = $('#contactForm'), $fields = $form.find('input, textarea'), $success = $('#contactSuccess');
  function mark(field) {
    var $field = $(field), value = $field.val().trim(), valid;
    if (field.id === 'contactName') valid = value.length >= 2;
    else if (field.id === 'contactEmail') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    else valid = value.length >= 10 && value.length <= 500;
    $field.toggleClass('is-valid', valid).toggleClass('is-invalid', !valid).attr('aria-invalid', String(!valid));
    return valid;
  }
  $fields.on('blur', function () { mark(this); }).on('input', function () {
    if (this.id === 'contactMessage') $('#messageCount').text($(this).val().length + ' / 500');
    if ($(this).hasClass('is-valid') || $(this).hasClass('is-invalid')) mark(this);
    $success.stop(true, true).fadeOut(150);
  });
  $form.on('submit', function (event) {
    event.preventDefault(); $success.stop(true, true).hide().removeClass('d-none');
    var valid = true; $fields.each(function () { if (!mark(this)) valid = false; });
    if (valid) $success.fadeIn(250); else $fields.filter('.is-invalid').first().trigger('focus');
  });
  $form.on('reset', function () { $fields.removeClass('is-valid is-invalid').removeAttr('aria-invalid'); $success.stop(true, true).hide(); $('#messageCount').text('0 / 500'); });
});
