/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var element = document.getElementById("mainnav");
  element.classList.toggle("responsive");
};
// Changes classes and images based on mobile or desktop site
function alterSize(){
  if($(window).width() > 600) {
      $('.body2').addClass('body1');
      $('.body1').removeClass('body2');
      if(document.getElementById('football')){
        document.getElementById('football').src='assets/images/football.png';
        document.getElementById('house').src='assets/images/house.png';
        document.getElementById('lightbulb').src='assets/images/lightbulb.png';
        document.getElementById('pencil').src='assets/images/pencil.png';
        document.getElementById('computer').src='assets/images/computer.png';
        document.getElementById('aboutimage').src='assets/images/about_image_desktop.png';
      };
  }else{
      $('.body1').addClass('body2');
      $('.body2').removeClass('body1');
      if(document.getElementById('football')){
        document.getElementById('football').src='assets/images/football_mobile.png';
        document.getElementById('house').src='assets/images/house_mobile.png';
        document.getElementById('lightbulb').src='assets/images/lightbulb_mobile.png';
        document.getElementById('pencil').src='assets/images/pencil_mobile.png';
        document.getElementById('computer').src='assets/images/computer_mobile.png';
        document.getElementById('aboutimage').src='assets/images/about_image_mobile.png';
      };
  };
};
// On startup and changing screen width, set appropriate classes/images
$(window).on('resize', alterSize);
alterSize();
// When visible, start animation
function animate(className,addClass){
  $(className).each(function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $(this).offset().top + $(this).height();
    if (scroll_pos > element_pos) {
        $(this).addClass(addClass);
    };
  });
}

if($(window).width() < 600) {
  $(window).on('scroll', function(){
    animate('.left','animateRight');
  });
  $(window).on('scroll', function(){
    animate('.right','animateRight');
  });
} else{
  $(window).on('scroll', function(){
    animate('.left','animateLeft');
  });
  $(window).on('scroll', function(){
    animate('.right','animateRight');
  });
};
$(window).on('scroll', function(){
  animate('.enlarge','animateSize');
});
