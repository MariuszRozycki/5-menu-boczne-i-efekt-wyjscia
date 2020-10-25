$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.main-menu').toggleClass('open');
    $('.main-menu-item a').click(function (event) {
      event.preventDefault();
      $('body').fadeOut(2000, function () {
        console.log(window.location);
        window.location.href = $(event.target).attr('href');
      });

    });
  });
});