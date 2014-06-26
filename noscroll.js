$(document).ready(function() {

    $('body').on({
        'mousewheel': function(e) {
            if (e.target == 'body') return;
            e.preventDefault();
            e.stopPropagation();
        }
    })

});