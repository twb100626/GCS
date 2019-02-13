$(document).ready(function(){
    var prefixURL = 'https://cors-anywhere.herokuapp.com/';
    var url = 'https://www.biblegateway.com/reading-plans/mcheyne/next?version=RCU17TS';
    $.ajax({
        type: "GET",
        url: prefixURL + url,
        //dataType: "html",
        success: function (data) {
            $('#content_show').empty();
            var temp_content = $('<div id=\"jjjiiikkk\">');
            try {
              temp_content.append(data);
            } catch (err) {}
            //$('#content_show').append(temp_content);
            if (temp_content.find('.rp-content').length) {
                foundTags = true;
                temp_content.find('.rp-content').appendTo('#content_show');
                $( "div" ).remove('.read-more');
                $( "div" ).remove('.hidden');
                $('a[href^="#rp-passage"]').each(function(index, element) {
                    $(element).removeAttr("href");
                });
            }
        },
        failure: function (response) {
            alert(response.d);
        }
    });
});