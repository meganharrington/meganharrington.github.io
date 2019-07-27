/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var element = document.getElementById("mainnav");
  element.classList.toggle("responsive");
}

function alterSize(){
  if($(window).width() > 600) {
      $('.body2').addClass('body1');
      $('.body1').removeClass('body2');
  }else{
      $('.body1').addClass('body2');
      $('.body2').removeClass('body1');
  }
}
$(window).on('resize', alterSize);
alterSize();
