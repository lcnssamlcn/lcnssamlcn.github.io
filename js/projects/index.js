function computeTotalDevTime() {
    var devTimeTableTrs = $("table.dev-time-table tr");
    var totalDevTimeMin = 0;
    for (var i = 1; i < devTimeTableTrs.length; i++) {
        var devTime = devTimeTableTrs.eq(i).children().eq(1).text();
        var matcher = /(\d+)hr (\d+)min/;
        DEBUG && console.log("devTime[" + i + "]: \"" + devTime + "\"");
        var devTimeHr = parseInt(devTime.replace(matcher, "$1"), 10);
        var devTimeMin = parseInt(devTime.replace(matcher, "$2"), 10);
        DEBUG && console.log("devTimeHr: \"" + devTimeHr + "\"");
        DEBUG && console.log("devTimeMin: \"" + devTimeMin + "\"");

        totalDevTimeMin = totalDevTimeMin + devTimeHr * 60 + devTimeMin;
    }

    return totalDevTimeMin;
}

function min2TimeStr(totalMin) {
    var hr = Math.floor(totalMin / 60);
    var min = totalMin % 60;

    return hr + "hr " + min + "min";
}

$(document).ready(function () {
    $(
        "<tr>" +
            "<td style='font-weight: bold;'>Total</td>" +
            "<td>" + min2TimeStr(computeTotalDevTime()) + "</td>" +
        "</tr>"
    ).appendTo("table.dev-time-table");
});
