
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

  $('.burger').on('click', function () {
    $('.nav').toggleClass('active')
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
  });

  $('.testimonials__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true
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














  // Mixitup
  var mixer = mixitup('.works__inner');


});