$(function() {
    $.getJSON('words.json', function(data) {
        $('#query').keypress(function(e) {
            var $results = $('#results');
            $results.empty();
            if (e.which === 13) {
                _.forEach(unjumble(data, $('#query').val()), function(result) {
                    $results.append($('<ul>').html(result));
                });
            }
        });
    });
});
