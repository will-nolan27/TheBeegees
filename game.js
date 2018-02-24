$(document).ready(function () {

    var broPoints = [, , , ];
    var total = 0;
    var winsTotal = 0;
    var lossesTotal = 0;
    var beatMe = "";

    function start() {
        total = 0
        $("#points").text(total);
        winsTotal = 0
        $("#wins").text(winsTotal);
        lossesTotal = 0
        $("#losses").text(lossesTotal);

        randomNum = function getRandomIntInclusive(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
          }
        beatMe = randomNum();
        $("#moves").text(beatMe);

        for (var i = 0; i < 4; i++) {
            var broValue = Math.floor(Math.random() * (12 -1)) + 1;
            broPoints[i] = broValue;
        };
    };

    function reset() {
        total = 0;
        beatMe= 0;
        $("#points").text(total);
        randomNum = function getRandomIntInclusive(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
          }
        beatMe = randomNum();
        $("#moves").text(beatMe);

        for (var i = 0; i < 4; i++) {
            var broValue = Math.floor(Math.random() * 12) + 1;
            broPoints[i] = broValue;
        };

    }

   function remo () {
        $('#toggle').toggleClass('hid')};

    $("#Rules").on("click",remo);
    $("#Start").on("click", start);

    $("#barry").on("click", function () {
        total = (total + broPoints[0]);
        $("#points").text(total);
        comp();
    });

    $("#robin").on("click", function () {
        total = (total + broPoints[1]);
        $("#points").text(total);
        comp();
    });

    $("#maurice").on("click", function () {
        total = (total + broPoints[2]);
        $("#points").text(total);
        comp();
    });

    $("#andy").on("click", function () {
        total = (total + broPoints[3]);
        $("#points").text(total);
        comp();
    });

    function comp() {
        if (total === beatMe) {
            winsTotal++;
            $("#wins").text(winsTotal);
            reset();

        } else if (total > beatMe) {
            lossesTotal++;
            $("#losses").text(lossesTotal);
            reset();
        };
    };

});