
$(window).on('load', function () {
  $('.preloader').delay(500).fadeToggle(500);


  if (window.matchMedia("(min-width: 851px)").matches) {

    // var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

    // var tl = gsap.timeline({ defaults: { duration: 1 } });
    // tl.from(".intro__bg", { delay: 1, x: '-100%' })
    //   .from(".header__bg", { x: '-100%', opacity: 0 }, "-=.5")


    console.log('large')
  } else {


    console.log('small')
  }

});


$(function () {

  // Fixed header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, introH);
  let nav = $("#nav")

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);

  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  // Smooth scroll
  $("[data-scroll").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    nav.removeClass("active"),
      $(".burger").toggleClass("active"),


      $("html, body").animate({
        scrollTop: elementOffset - 70
      }, 700);
  });






  $('.burger').click(function () {
    $(this).toggleClass('active')
  })



  // SLider
  $('.tab__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.testimonials__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      },
    ]
  });


  // TABS

  $('.tabs a').click(function () {

    $('.tab__inner').hide();
    $('.tabs a.active').removeClass('active');
    $(this).addClass('active');

    var panel = $(this).attr('href');
    $(panel).fadeIn(1000);

    $('.tab__slider').slick('setPosition');

    return false;


  });

  $('.tabs li:first a').click();


  // Menu overlay
  $('.burger').click(function () {
    $('.nav').toggleClass('active');
    $('#overlay').toggleClass('open');
  });









  // Intro Scroll Arrow down
  if (window.matchMedia("(min-width: 1201px)").matches) {

    $('.intro__arrow').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 170 }, 500, 'linear');
    });
    
  } else {

    $('.intro__arrow').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 500, 'linear');
    });
    
  }
  

  // Back to Top
  var amountScrolled = 1080;
  var amountScrolledNav = 25;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });

  $('button.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });





  // Mixitup
  var mixer = mixitup('.works__inner');



  // Stroke-offset = path
  //  const logo = document.querySelectorAll("#logo path");

  //  for(let i = 0; i<logo.length; i++){
  //    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  //  }


});