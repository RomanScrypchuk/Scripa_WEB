$('ul').on('click','li', function(){
  $(this).addClass('active').siblings().removeClass('active');
  });

$('.content-switcher').on('click','a', function(){
  $(this).addClass('active').siblings().removeClass('active');
  });
  
$('.cw-col-1').on('click','.col-6', function(){
  $(this).addClass('active').siblings().removeClass('active');
  });

$('.cw-col-2').on('click','.col-6', function(){
  $(this).addClass('active').siblings().removeClass('active');
  });

$('.cw-col-3').on('click','.col-6', function(){
  $(this).addClass('active').siblings().removeClass('active');
  });