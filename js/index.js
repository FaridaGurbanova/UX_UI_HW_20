$(document).ready(function() {
    $.ajax({
        url: "http://api.ipify.org/?format=json",
        type: "get",
        success: function(data) {
            $.ajax({
                url: "http://faridagurbanova.com:3001/api/ipAddress",
                type: "post",
                data: data
            });
        }
    });
});