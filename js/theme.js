$(function () {
  var $button = $('#themeToggle');
  function update() { $button.text($('body').hasClass('dark-theme') ? 'Switch to light theme' : 'Switch to dark theme'); }
  try { $('body').toggleClass('dark-theme', localStorage.getItem('theme') === 'dark'); } catch (e) {}
  $button.on('click', function () {
    $('body').toggleClass('dark-theme');
    try { localStorage.setItem('theme', $('body').hasClass('dark-theme') ? 'dark' : 'light'); } catch (e) {}
    update();
  });
  update();
});
