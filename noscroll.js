$(document).ready(function() {
	
$("body").css("overflow","hidden");
    $('body').on({
        'mousewheel': function(e) {
            if (e.target == 'body') return;
            e.preventDefault();
            e.stopPropagation();
        }
    })

});