$(function () {
  function welcome() {
    var name = $('#nameInput').val().trim();
    $('#welcomeMessage').text(name ? 'Welcome to Healthy, ' + name + '! Pick your first activity.' : 'Please enter your name first.').toggleClass('error', !name);
  }
  $('#welcomeBtn').on('click', welcome);
  $('#nameInput').on('keydown', function (event) { if (event.key === 'Enter') { event.preventDefault(); welcome(); } });
});
