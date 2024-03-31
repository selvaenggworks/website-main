
$(document).ready(function () {
  $('body').on('mouseenter mouseleave', '.dropdown-hover', function (e) {
    let dropdown = $(e.target).closest('.dropdown-hover');
    dropdown.addClass('show');
    setTimeout(function () {
      dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
  });

  function myFunction(x) {
    if (x.matches) {
    } else {
      $(".slider").slick({
        dots: true,
        speed: 500,
        infinite: true,
        // the magic
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }

        }, {

          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true
          }

        }, {

          breakpoint: 300,
          settings: "unslick" // destroys slick

        }]
      });

      $('.dc-list').slick({
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
      });

      $('.clients-list').slick({
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
      });
    }
  }

  var x = window.matchMedia("(max-width: 767px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  new WOW().init();
});