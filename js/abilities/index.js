var RATING_MIN = 0;
var RATING_MAX = 5;

function renderRating(val) {
    var nodeFullStar = "<img class='rating-star' src='" + IMG_DIR + "/star_full.png' />";
    var nodeEmptyStar = "<img class='rating-star' src='" + IMG_DIR + "/star_empty.png' />";
    var nodeTotal = "";
    for (var i = RATING_MIN; i < val; i++) {
        nodeTotal += nodeFullStar;
    }
    for (var i = val; i < RATING_MAX; i++) {
        nodeTotal += nodeEmptyStar;
    }
    $(nodeTotal).appendTo("span.rating-" + val);
}

$(document).ready(function () {
    for (var i = RATING_MIN; i <= RATING_MAX; i++) {
        renderRating(i);
    }
});
