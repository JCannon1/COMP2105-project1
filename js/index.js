// Change the background colour from black to white when the switch is turned on
function backgroundColor(color) {
    document.body.style.background = color;
 }
// JQuery Hover function to change the background colour when the image is hovered over
$(function(){
    $('img').hover(function() {
      $('body').addClass('hover');
    }, function() {
      $('body').removeClass('hover');
    })
  })
  