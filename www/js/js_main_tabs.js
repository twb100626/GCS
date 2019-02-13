var page_loaded = [false,false,false];
$(document).ready(function(){
  var page_names = ["biblereading"]; 
  var tab_names = ["Bible Reading"];
  
  var stemp = "<div class=\"scrollmenu\" style=\"font-size-adjust: 0.7;\">";
  $.each(page_names, function(index, value) {
    stemp += "<a onclick=\"openCity(event, '" + value + "')\">" + tab_names[index] + "</a>"; 
  })
  stemp += "</div>";
  $.each(page_names, function(index, value) {
    stemp += "<div id=\"" + value +"\" class=\"tabcontent\"><p>" + value + "</p></div>"; 
  })
  $("#content_tabs").append(stemp);
  
  openCity(null, page_names[0]);
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, cityIndex = -1;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        if (tabcontent[i].id == cityName) {
          cityIndex = i;
        }
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    if (evt != null) evt.currentTarget.className += " active";
    
    //alert(page_loaded[cityIndex]);
    if (cityIndex >= 0 && !page_loaded[cityIndex]) {
      $("#" + cityName).empty();
      $("#" + cityName).load( cityName + ".html" );
      page_loaded[cityIndex] = true;
    }
} 