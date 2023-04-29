function timer()
{
    if (appuserid) 
    {
        if ((appsos) && (appeos))
        {
            var booksos = appdate + " " + appsos;
            var bookeos = appdate + " " + appeos;
            var booksosdis = new Date(booksos).getTime();
            var bookeosdis = new Date(bookeos).getTime();
            var now = new Date().getTime();
            var distance1 = booksosdis - now;
            var distance2 = bookeosdis - now;
            var distance3 = bookeosdis - booksosdis;
            var cloc = window.location.href;
            var bookhours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var bookminutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            if (distance1 >= 0) {
                $("#TimerModal").removeData();
                document.getElementById("TimerModalBtnResult").onclick = function () {
                    $("#TimerModal").modal('hide')
                    return false;
                };
                document.getElementById("TimerModalPic").src = "./images/start.png";
                document.getElementById("TimerModalbody1").innerHTML = "Η Κράτηση σου θα διαρκέσει:<br>" + bookhours + " Ώρες και " + bookminutes + " Λεπτά" +"<br>Ξεκινάει σε :";
                document.getElementById("TimerModalbody2").innerHTML = "";
                var countDownDate = new Date(booksos).getTime();
                var extra = new Date(booksos).getTime() + 11000;
                var control = true;
                document.getElementById("timer").style.visibility = "visible";
                //document.getElementById("modalbody2div").style.display = "none";
                // Update the count down every 1 second
                var x = setInterval(function () {

                    // Get today's date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }


                    // Display the result in the element with id="demo"
                    document.getElementById("counterDownHeader").innerHTML = hours + ":"
                        + minutes + ":" + seconds;
                    document.getElementById("TimerModalbody2").innerHTML = hours + ":"
                        + minutes + ":" + seconds;
                    // If the count down is finished, write some text 
                    if (distance < 1001) {
                        if (control) {
                            countDownDate = extra;
                            control = false;
                            //document.getElementById("modalbody1").innerHTML = "Η Κράτηση σου θα διαρκέσει τοσο <Br> Ξεκινάει σε : ";
                            //document.getElementById("modalbody2div").style.display = "inline";
                            var regextimer = new RegExp("ElGrecoPlatform", "i");
                            var regextimer2 = new RegExp("AdventureIntro", "i");
                            if ((regextimer.test(cloc))) {
                                if ($("#BlocksModal").hasClass("show")) {
                                    $("#BlocksModal").modal("hide");
                                }
                                if ($("#OutputModal").hasClass("show")) {
                                    $("#OutputModal").modal("hide");
                                }
                                if ($("#FlashModal").hasClass("show")) {
                                    $("#FlashModal").modal("hide");
                                }
                            }
                            else if((regextimer2.test(cloc))){
                                if ($("#OutputModal").hasClass("show")) {
                                    $("#OutputModal").modal("hide");
                                }
                            }
                            $("#TimerModal").modal();
                        }
                        else {
                            clearInterval(x);
                            location.reload();
                        }
                        // if  plays from profile level window.location.href = window.location.href + "?Level=" + Level;;
                    }
                }, 1000);//htan 1000


            }
            else if (distance2 > 0) {
                var regextimer = new RegExp("ElGrecoPlatform", "i");
                if ((regextimer.test(cloc))) {
                    document.getElementById('block3').style.display = 'block';
                }
                var regextimer2 = new RegExp("Level", "i");
                if ((regextimer2.test(cloc))) {
                    document.getElementById('block3').style.display = 'block';
                }
                $("#TimerModal").removeData();
                document.getElementById("TimerModalPic").src = "./images/end.png";
                document.getElementById("TimerModalBtnResult").onclick = function () {
                    $("#TimerModal").modal('hide')
                    return false;
                };
                document.getElementById("TimerModalbody1").innerHTML = "Ελπίζουμε να το διασκέδασες!!<br>Η κρατησή σου τελειώνει σε :";
                document.getElementById("TimerModalbody2").innerHTML = "";
                var countDownDate = new Date(bookeos).getTime();
                var extra = new Date(bookeos).getTime() + 11000;
                var control = true;
                document.getElementById("timer").style.visibility = "visible";
                //document.getElementById("modalbody2div").style.display = "none";
                // Update the count down every 1 second
                var x = setInterval(function ()
                {

                    // Get today's date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }


                    // Display the result in the element with id="demo"
                    document.getElementById("counterDownHeader").innerHTML = hours + ":"
                        + minutes + ":" + seconds;
                    document.getElementById("TimerModalbody2").innerHTML = hours + ":"
                        + minutes + ":" + seconds;
                    // If the count down is finished, write some text 
                    if (distance < 1001)
                    {
                        if (control) {
                            countDownDate = extra;
                            control = false;
                            //document.getElementById("modalbody1").innerHTML = "Η Κράτηση σου θα διαρκέσει τοσο <Br> Ξεκινάει σε : ";
                            //document.getElementById("modalbody2div").style.display = "inline";
                            var regextimer = new RegExp("ElGrecoPlatform", "i");
                            var regextimer2 = new RegExp("AdventureIntro", "i");
                            if ((regextimer.test(cloc))) {
                                if ($("#BlocksModal").hasClass("show")) {
                                    $("#BlocksModal").modal("hide");
                                }
                                if ($("#OutputModal").hasClass("show")) {
                                    $("#OutputModal").modal("hide");
                                }
                                if ($("#FlashModal").hasClass("show")) {
                                    $("#FlashModal").modal("hide");
                                }
                            }
                            else if ((regextimer2.test(cloc))) {
                                if ($("#OutputModal").hasClass("show")) {
                                    $("#OutputModal").modal("hide");
                                }
                            }
                            
                            $("#TimerModal").modal();
                        }
                        else {
                            clearInterval(x);
                            $.ajax({
                                type: 'POST',
                                url: 'http://' + urlServer + '/EL_GRECO/php/getuserbookinginfo.php',
                                data: { userid: appuserid },
                                success: function () {
                                    location.reload();
                                   }
                            });     
                        }
                        // if  plays from profile level window.location.href = window.location.href + "?Level=" + Level;;
                    }
                }, 1000);//htan 1000

            }
            else
            {
                
            }
        }
        else
        {
            //donothing
        }
    }
    return false;
}
