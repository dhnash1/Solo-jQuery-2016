var r = 0;
var b = 0;
var g = 0;
var y = 0;
$(document).ready(function(){
$('.color-button').on('click', function(){
  val = $(this).data('color');//get that button data yo
    $('.container').append("<div class='" + val + " color-cube'></div>");
    place();
  });//end on clicku
});//end ready
function place(){
    if (val == "red"){
      r++;
      $('#red').html("Total red:" + r);
    }else if (val == "blue") {
      b++;
      $('#blue').html("Total blue:" + b);
    }else if (val == "green"){
      g++;
      $('#green').html("Total green:" + g);
    }else if (val == "yellow"){
      y++;
      $('#yellow').html("Total yellow:" + y);
      }
    }
