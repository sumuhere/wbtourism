//<-------------navbar-links color change------------->

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $('nav').addClass('nav-fixed');
  } else {
    $('nav').removeClass('nav-fixed');
  }
});

// ,<-------------nav-header color change-------------->

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
      $('.nav-header').css('color', '#000');
    } else {
      $('.nav-header').css('color', '#fff');
    }
  });
});

//<-----------carousel slider------------->

//destination carousel
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-slider', {
    // cover: true,
    height: '500px',
    gap: '15px',
    speed: 600,
    interval: 2000,
    type: 'loop',
    perPage: 3,
    autoplay: true,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
    //brand-logo carousel
  new Splide('#logo-slide', {
    // cover: true,
    height: '300px',
    gap: '15px',
    speed: 400,
    interval: 1500,
    type: 'loop',
    perPage: 3,
    autoplay: true,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
});

//top to scroll button

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#arrow i').fadeIn();
    } else {
      $('#arrow i').fadeOut();
    }
  });
  $('#arrow i').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});
