// 1. jquery
$(function(){ // 문서를 로딩후에 읽어라
  // menu
  $('.menu>li').mouseover(function(){
    $('.submenu').stop().slideDown();
  });
  $('.menu>li').mouseout(function(){
    $('.submenu').stop().slideUp();
  });

  // slider
  $('.slideWrapper').append($('.slide').first().clone(true));
  let currentIndex = 0;
  let slideHeight = 300;

  setInterval(function(){
    currentIndex++;
    $('.slideWrapper').animate({marginTop: -(slideHeight * currentIndex)+'px'}, 600);

    if(currentIndex == 3) {
      setTimeout(function(){
        $('.slideWrapper').animate({marginTop: 0}, 0);
        currentIndex = 0;
      });
    }
  }, 3000);

  // tab
  $('.tab-title p').eq(0).click(function(){
    $('.notice').css('display', 'block');
    $('.gallery').css('display', 'none');
    $(this).addClass('is-active');
    $('.tab-title p').eq(1).removeClass('is-active');
  });
  $('.tab-title p').eq(1).click(function(){
    $('.notice').css('display', 'none');
    $('.gallery').css('display', 'flex');
    $(this).addClass('is-active');
    $('.tab-title p').eq(0).removeClass('is-active');
  });

  // popup
  $('.notice li').first().click(function(){
    $('#popup').addClass('is-open');
  });
  $('#popup .close').click(function(){
    $('#popup').removeClass('is-open');
  });
});