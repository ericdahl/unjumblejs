$(function() {
    $.getJSON('words.json', function(words) {

        $('#solve').click(function() {
            app.solve(words);
        });
        $('#query').keypress(function(e) {
            if (e.which === 13) {
                app.solve(words);
            }
        });
        $('#hint').click(function() {
            app.hint(words);
        });
    });

});

var app = (function() {
    var hints = {},
        solve = function(words) {
            var $results = $('#results');
            $results.empty();
            _.forEach(unjumble.solve(words, $('#query').val()), function(result) {
                $results.append($('<ul>').html(result));
            });
        },
        hint = function(words) {
            var $query = $('#query');
            var queryValue = $query.val(),
                $results = $('#results');

            if (!hints[queryValue]) {
                hints[queryValue] = unjumble.hints(words, queryValue);
            }
            $results.empty().append(_.map(hints[queryValue](), function(result) {
                return $('<ul>').html(result);
            }));
        };

    return {
        solve: solve,
        hint: hint
    }
}());
