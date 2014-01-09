$(function() {
    $('#query').keypress(function(e) {
        var $results = $('#results');
        if (e.which === 13) {
            _.forEach(unjumble("a"), function(result) {
                $results.append($('<ul>').html(result));
            });
        }
    });
});