$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://faridagurbanova.com:4000/api/contact",
            type: "post",
            data: $('#contactForm').serialize(),
            success: function() {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }
        });
    });
});