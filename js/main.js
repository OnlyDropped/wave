$(function(){
      $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active')
  });

  $('.slider-inner').slick({
    arrows: false,
    dots: true
  });


  var mixer = mixitup('.portfolio__content');

});
  


$('.menu-burger__header').toggleClass('open-menu');






