$(function () {
   

$("#Start").on("click", function () {
            var total = 0
            $("#points").text(total);
            var winsTotal = 1
            $("#wins").text(winsTotal);
            var lossesTotal = 2
            $("#losses").text(lossesTotal);
            var beatMe = "";
            var random = Math.floor(Math.random() * 120) + 19;
            beatMe = random;
            $("#moves").text(beatMe);
            

            var broPoints = [, , , ];
            for (var i = 0; i < 4; i++) {
                var broValue = Math.floor(Math.random() * 12) + 1;
                broPoints[i] = broValue;

            }

                $("#barry").on("click", function () {
                    total = (total + broPoints[0]);
                    $("#points").text(total);
                    if (total === beatMe) {
                        winsTotal++;
                        $("#wins").text(winsTotal);
                        
                    } else if (total > beatMe) {
                        lossesTotal++;
                        $("#losses").text(lossesTotal);
                        
                    } else {
                        return;
                        
                    }
                });

                $("#robin").on("click", function () {
                    total = (total + broPoints[1]);
                    $("#points").text(total);
                    if (total === beatMe) {
                        winsTotal++;
                        $("#wins").text(winsTotal);
                        
                    } else if (total > beatMe) {
                        lossesTotal++;
                        $("#losses").text(lossesTotal);
                        
                    } else {
                        return;
                        
                    }
                });

                $("#maurice").on("click", function () {
                    total = (total + broPoints[2]);
                    $("#points").text(total);
                    if (total === beatMe) {
                        winsTotal++;
                        $("#wins").text(winsTotal);
                        
                    } else if (total > beatMe) {
                        lossesTotal++;
                        $("#losses").text(lossesTotal);
                        
                    } else {
                        return;
                        
                    }
                });

                $("#andy").on("click", function () {
                    total = (total + broPoints[3]);
                    $("#points").text(total);
                    if (total === beatMe) {
                        winsTotal++;
                        $("#wins").text(winsTotal);
                        
                    } else if (total > beatMe) {
                        lossesTotal++;
                        $("#losses").text(lossesTotal);
                        
                    } else {
                        return;
                        
                    }
                });
                



            });
            
            
        });
