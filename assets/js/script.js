/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var element = document.getElementById("mainnav");
  element.classList.toggle("responsive");
}

function alterSize(){
  if($(window).width() > 600) {
      $('.body2').addClass('body1');
      $('.body1').removeClass('body2');
      document.getElementById('football').src='assets/images/football.png';
      document.getElementById('house').src='assets/images/house.png';
      document.getElementById('lightbulb').src='assets/images/lightbulb.png';
      document.getElementById('pencil').src='assets/images/pencil.png';
      document.getElementById('computer').src='assets/images/computer.png';
      document.getElementById('aboutimage').src='assets/images/about_image_desktop.png';
  }else{
      $('.body1').addClass('body2');
      $('.body2').removeClass('body1');
      document.getElementById('football').src='assets/images/football_mobile.png';
      document.getElementById('house').src='assets/images/house_mobile.png';
      document.getElementById('lightbulb').src='assets/images/lightbulb_mobile.png';
      document.getElementById('pencil').src='assets/images/pencil_mobile.png';
      document.getElementById('computer').src='assets/images/computer_mobile.png';
      document.getElementById('aboutimage').src='assets/images/about_image_mobile.png';
  }
}
$(window).on('resize', alterSize);
alterSize();
