$(document).ready(function(){
  var links = ["main_tabs.html"];
  var menu_tags = ["Grace Church Sanxia"];
  var pageindex = -1;
  function MyFunction(index) {
    if (index == pageindex) return;
    $("#hTitle").text(menu_tags[index]);
    openCity(null, 'd' + index);
    pageindex = index;
  }
  
  $('#contenttobeloaded').empty();
  $.each(menu_tags, function(index, value) {
    $('<div id=\"d' + index + '\" class=\"menucontent\">abc</div>').appendTo('#contenttobeloaded');
    $('#d' + index).load(links[index], function(responseTxt, statusTxt, xhr){
        //if(statusTxt == "success")
        //    alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
  
  MyFunction(0);
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
} 