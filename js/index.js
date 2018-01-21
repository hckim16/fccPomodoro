$(function() {
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#num").html());
    var count2 = parseInt($("#breakNum").html());

    $("#session").hide();

    $("#start").click(function() {
        var counter = setInterval(timer, 1000);
        count *= 1;
        count2 *= 1;

        function timer() {
            $("#start, #m5Time, #m5Break, #a5Time, #a5Break, #title1, #reset, #breakNum").hide();
            $("#session").show();
            $("#session").html("Session Time: ");
            count -= 1;
            if(count === 0){
                buzzer.play();
                clearInterval(counter);
                $("#num").hide();
                var startBreak = setInterval(breakTimer, 1000);
            }
            $("#num").html(count);
            
            if(count % 60 >= 10){
                $("#num").html(Math.floor(count/60) + ":" + count % 60)
            }
            else{
                $("#num").html(Math.floor(count/60) + ":" + "0" + count % 60)
            }
            
            function breakTimer(){
                $("#session").html("Break Time: ");
                $("#breakNum").show();
                
                count2 -= 1;
                
                if(count2 === 0){
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset").show();
                    $("#breakNum, #session").hide();
                }
                
                $("#breakNum").html(count2);
                
                if(count2 % 60 >= 10){
                    $("#breakNum").html(Math.floor(count2/60) + ":" + count2 % 60)
                }
                else{
                    $("#breakNum").html(Math.floor(count2/60) + ":" + "0" + count2 % 60)
                }
            }
        }
    });

    $("#m5Time").click(function() {
        if (count > 5) {
            count -= 5;
            $("#num").html(count);
        }
        event.preventDefault();
    });

    $("#a5Time").click(function() {

        count += 5;
        $("#num").html(count);
        event.preventDefault();
    });

    $("#m5Break").click(function() {
        if (count2 > 5) {
            count2 -= 5;
            $("#breakNum").html(count2);
        }
        event.preventDefault();
    });

    $("#a5Break").click(function() {

        count2 += 5;
        $("#breakNum").html(count2);
        event.preventDefault();
    });

    $("#reset").click(function() {
        location.reload();
    });
});
