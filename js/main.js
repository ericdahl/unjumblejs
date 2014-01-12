$(function() {
    $.getJSON('words.json', function(data) {
        $('form').submit(function(e) {
            var $results = $('#results');
            $results.empty();
            _.forEach(unjumble.solve(data, $('#query').val()), function(result) {
                $results.append($('<ul>').html(result));
            });
            e.preventDefault();
        });
    });
});
