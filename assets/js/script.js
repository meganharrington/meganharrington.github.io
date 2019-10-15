/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var element = document.querySelector(".mainnav");
    element.classList.toggle("responsive");
};
// Changes classes and images based on mobile or desktop site
function alterSize(){
  if($(window).width() > 600) {
      $('.body2').addClass('body1');
      $('.body1').removeClass('body2');
      if(window.location.pathname == '/about.html'){
        document.querySelector('.football').src='assets/images/about/football.png';
        document.querySelector('.house').src='assets/images/about/house.png';
        document.querySelector('.lightbulb').src='assets/images/about/lightbulb.png';
        document.querySelector('.pencil').src='assets/images/about/pencil.png';
        document.querySelector('.computer').src='assets/images/about/computer.png';
        document.querySelector('.aboutimage').src='assets/images/about/about_image_desktop.png';
      };
  }else{
      $('.body1').addClass('body2');
      $('.body2').removeClass('body1');
      if(window.location.pathname == '/about.html'){
        document.querySelector('.football').src='assets/images/about/football_mobile.png';
        document.querySelector('.house').src='assets/images/about/house_mobile.png';
        document.querySelector('.lightbulb').src='assets/images/about/lightbulb_mobile.png';
        document.querySelector('.pencil').src='assets/images/about/pencil_mobile.png';
        document.querySelector('.computer').src='assets/images/about/computer_mobile.png';
        document.querySelector('.aboutimage').src='assets/images/about/about_image_mobile.png';
      };
  };
};
// On startup and changing screen width, set appropriate classes/images
$(window).on('resize', alterSize);
alterSize();
// When visible, start animation
function animate(className,addClass){
    $(className).each(function () {
        scroll_pos = $(window).scrollTop() + $(window).height();
        element_pos = $(this).offset().top + $(this).height();
        if (scroll_pos > element_pos) {
            $(this).addClass(addClass);
        };
        if (($(window).scrollTop() > element_pos) || (scroll_pos < $(this).offset().top)){
            $(this).removeClass(addClass);
        }
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
