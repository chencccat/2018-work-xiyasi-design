$(function() {
  var swiper = new Swiper('.swiper-container', {
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      }
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});
