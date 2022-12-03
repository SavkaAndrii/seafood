$(function(){

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-up.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-down.svg" alt=""></button>',
        vertical: true
    });

    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-up.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-down.svg" alt=""></button>',
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
      });

});