$(document).ready(function(){
  var width_min = 180;
  var width_max = 500;
  var height_min = 70;
  
  var window_width = $(window).width();
  var window_height = $(window).height();
  var position = $('#fbpframe').position();
  var diff_width = window_width;
  var diff_height = window_height;
  diff_width = diff_width < width_min ? width_min : diff_width;
  diff_width = diff_width > width_max ? width_max : diff_width;
  diff_height = diff_height < height_min ? height_min : diff_height;
  
  embstring = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGraceSanxia&tabs=timeline'
  + '&width=' + diff_width + '&height=' + diff_height
  + '&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId';
  $("#fbpframe").width(diff_width);
  $("#fbpframe").height(diff_height);
  adjustFramePositionLeft();
  document.getElementById('fbpframe').src = embstring;
});

$(window).resize(function() {
  adjustFramePositionLeft();
});

function adjustFramePositionLeft() {
  var window_width = $(window).width();
  var frame_width = $('#fbpframe').width();
  
  var new_pos_left = (window_width - frame_width) / 2;
  new_pos_left = new_pos_left >= 0 ? new_pos_left : 0; 
  $("#fbpframe").css({"left": new_pos_left});
}