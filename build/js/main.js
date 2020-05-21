
$(window).on('load', function () {
  $('.preloader').delay(500).fadeToggle(500);


  if (window.matchMedia("(min-width: 861px)").matches) {

    // var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

    var tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.to(".background", { delay: 1, x: '100%' })
          .from(".header__logo", { x: '-2%', opacity: 0 }, "-=.5")
          // .from(".header__burger", { x: '-3%', opacity: 0 }, "-=.5")
          .from(".intro__title", { y: '20%', opacity: 0 }, "-=.7")
          .from(".intro__subtitle", { y: '25%', opacity: 0 }, "-=.3")
          .from(".intro__btn", { opacity: 0 }, "-=.3")
          .from(".intro__arrow", { opacity: 0 }, "-=.3")

          .from(".main__title", { y: '20%', opacity: 0 }, "-=3")
          .from(".main__subtitle", { y: '40%', opacity: 0 }, "-=2.5")

    var tl = gsap.timeline({ defaults: { duration: 1 } });
        // tl.to(".background", { delay: 1, x: '100%' })
          tl.from(".error__num", { y: '20%', opacity: 0 }, "-=1")
          .from(".error__title", { y: '20%', opacity: 0 }, "-=.9")
          .from(".error__text", { y: '20%', opacity: 0 }, "-=.8")
          .from(".error__btn", {  opacity: 0 }, "-=.7")

    var tl = gsap.timeline({ defaults: { duration: 1 } });
        // tl.to(".background", { delay: 1, x: '100%' })
          tl.from(".main__title", { y: '20%', opacity: 0 }, "-=.1")
          .from(".main__subtitle", { y: '20%', opacity: 0 }, "-=.4")
          


    console.log('large')
  } else {

    var tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.to(".background", { delay: 1, y: '-100%' })
          .from(".header__logo", { y: '20%', opacity: 0 }, "-=.5")
          .from(".intro__title", { y: '20%', opacity: 0 }, "-=.7")
          .from(".intro__subtitle", { y: '25%', opacity: 0 })
          .from(".intro__btn", { opacity: 0 }, "-=.3")
          .from(".intro__arrow", { opacity: 0 }, "-=.3")

          .from(".main__title", { y: '20%', opacity: 0 }, "-=3.5")
          .from(".main__subtitle", { y: '15%', opacity: 0 }, "-=3")

          .from(".error__num", { y: '20%', opacity: 0 }, "-=.7")
          .from(".error__title", { y: '20%', opacity: 0 }, "-=.7")
          .from(".error__text", { y: '20%', opacity: 0 }, "-=.7")
          .from(".error__btn", {  opacity: 0 }, "-=.7")

          


    // var tl = gsap.timeline({ defaults: { duration: 1 } });
    //     tl.from(".error__num", { y: '20%', opacity: 0 }, "-=.7")
    //       .from(".error__title", { y: '20%', opacity: 0 }, "-=.7")
    //       .from(".error__text", { y: '20%', opacity: 0 }, "-=.7")
    //       .from(".error__btn", {  opacity: 0 }, "-=.7")

    // var tl = gsap.timeline({ defaults: { duration: 1 } });
    //     tl.from(".main__title", { y: '20%', opacity: 0 }, "-=.1")
    //       .from(".main__subtitle", { y: '20%', opacity: 0 }, "-=.4")

          


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



  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function(){
    var max = -219.99078369140625;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
    percent = value.getAttribute('data-progress');
      value.querySelector('.progress__fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
      value.querySelector('.progress__value').innerHTML = percent + '%';
    });
  }





  // Mixitup
  var mixer = mixitup('.works__inner');



  // Stroke-offset = path
  //  const logo = document.querySelectorAll("#logo path");

  //  for(let i = 0; i<logo.length; i++){
  //    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  //  }


});