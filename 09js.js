$(document).ready(function(){
    $("#startscreen *").addClass("animated fadeInDown");
    
    // Fixed nav menu collapse when click in mobile view
    $('ul.nav a, a.navbar-brand').on('click', function () {
      if ($("#bs-example-navbar-collapse-1").hasClass('in')) {
        $(".navbar-header button").click();
      }
    });
    
    // ScrollSpy
      $('body').scrollspy({
          target: '.navbar-fixed-top',
          offset: 50
      });
    
    // Scroll to top
    $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $('#scroll-to-top').fadeIn(700);
          } else {
              $('#scroll-to-top').fadeOut();
          }
      });
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function () {
          $('a.page-scroll').bind('click', function (event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: ($($anchor.attr('href')).offset().top - 50)
              }, 1000, 'easeInOutCubic');
              event.preventDefault();
          });
      });
  });