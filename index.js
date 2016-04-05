var main=function(){
  $('.menu-toggle').hide();
  $('.menu-click').click(function(){
    $('.menu-toggle').toggle();
  });
  $('.arrow-next').click(function(){
    var current=$('.start-shift');
    var next=current.next();
    if(next.length===0){
      next=$('.shift').first();
    }
    current.fadeOut().removeClass('start-shift');
    next.fadeIn().addClass('start-shift');
    var currentdot=$('.start-dot');
    var nextdot=currentdot.next();
    if(nextdot.length===0){
      nextdot=$('.dot').first();
    }
    currentdot.removeClass('start-dot');
    nextdot.addClass('start-dot');
  });
  $('.prev-arrow').click(function(){
    var current=$('.start-shift');
    var prev=current.prev();
    var currentdot=$('.start-dot');
    var prevdot=currentdot.prev();
    if(prev.length===0){
      prev=$('.shift').last();
      prevdot=$('.dot').last();
    }
    current.fadeOut().removeClass('start-shift');
    prev.fadeIn().addClass('start-shift');

    currentdot.removeClass('start-dot');
    prevdot.addClass('start-dot');
  });
}

$(document).ready(main);
