var urlServer = "localhost"; //του πανεπιστημίου μάλλον 195.251.166.47
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkifEle(srcel, outp) {
    var regex3 = /(Forward\(\d+\))|(Backwards\(\d+\))|(Emerge\(\d+\))|(Dive\(\d+\))|(Turn_Right\(\d+\))|(Turn_Left\(\d+\))|(Turn_Up\(\d+\))|(Turn_Down\(\d+\))|(Roll_Right\(\d+\))|(Roll_Left\(\d+\))/;
    if (regex3.test(srcel)) {
        if(window.stepenabled=='1'){
            window.initplayback();
        }
        else{
            $("#OutputModal").removeData();
            document.getElementById("OutputModalBtnResult2").style.display = "none";
            document.getElementById("OutputPic").src = "./images/success1.png";
            document.getElementById("OutputModalbody1").innerHTML = "Ο EDUV λέει:\nΘα τρέξω τον κώδικα σε 10 δευτερόλεπτα!!\nΤο αποτέλεσμα του κώδικα που έτρεξες:";
            document.getElementById("OutputModalbody2").innerHTML = outp;
            document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
            $('#OutputModal').on('hidden.bs.modal', function () {
                document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                $('#OutputModal').off('hidden');
            })
            setTimeout(function () {
                $("#OutputModal").modal('hide');
            }, 5000);
            document.getElementById("checkCodeP").disabled = false;
            document.getElementById("runPython").disabled = false;
            document.getElementById("runElGrecoP").disabled = false;
            document.getElementById("runBlockly").disabled = false;
            document.getElementById("showCode").disabled = false;
            document.getElementById("checkCode").disabled = false;
            document.getElementById("runElGreco").disabled = false;
            $("#OutputModal").modal();
            $.ajax({
                url: 'http://' + urlServer + '/EDUV - CODE/parsecode.php',
                type: 'POST',
                dataType: 'json',
                data: { functionname: 'add', arguments: [srcel] },

                success: function (obj, textstatus) {
                    if (!('error' in obj)) {
                        yourVariable = obj.result;
                        //alert(yourVariable);
                    }
                    else {
                        console.log(obj.error + "Λάθος στον κώδικα");
                    }
                }
                ,
                error: function (jqXHR, textStatus, errorThrown) {
                    //console.log(jqXHR);
                    //console.log(textStatus);
                    //console.log(errorThrown);
                    //document.getElementById("checkCodeP").disabled = false;
                    //document.getElementById("runPython").disabled = false;
                    //document.getElementById("runElGrecoP").disabled = false;
                    //document.getElementById("runBlockly").disabled = false;
                    //document.getElementById("showCode").disabled = false;
                    //document.getElementById("checkCode").disabled = false;
                    //document.getElementById("runElGreco").disabled = false;
                    //$("#OutputModal").removeData();
                    //document.getElementById("OutputModalBtnResult2").style.display = "none";
                    //document.getElementById("OutputPic").src = "./images/fail.png";
                    //document.getElementById("OutputModalbody1").innerHTML = "Ο El Greco λέει:\nΥπάρχει κάποιο τεχνικό πρόβλημα και δεν μπορώ να διαβάσω τον κώδικα σου!!!\nΕπικοίνωνησε με την ομάδα Aegean Robotics.";
                    //document.getElementById("OutputModalbody2").innerHTML = "";
                    //document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
                    //document.getElementById("OutputModalBtnResult1").onclick = function () {
                       //$("#OutputModal").modal('hide');
                        //return false;
                    //};
                    //$("#OutputModal").modal();
                
                }
            });
        }
    }
    else {
        document.getElementById("checkCodeP").disabled = false;
        document.getElementById("runPython").disabled = false;
        document.getElementById("runElGrecoP").disabled = false;
        document.getElementById("runBlockly").disabled = false;
        document.getElementById("showCode").disabled = false;
        document.getElementById("checkCode").disabled = false;
        document.getElementById("runElGreco").disabled = false;
        $("#OutputModal").removeData();
        document.getElementById("OutputModalBtnResult2").style.display = "none";
        document.getElementById("OutputPic").src = "./images/fail.png";
        document.getElementById("OutputModalbody1").innerHTML = "Ο EDUV λέει:\nΌ κωδίκας σου δεν περιέχει συνάρτηση μου!!!\nΓια να ανταποκριθώ στις εντολές σου πρέπει ο κώδικας σου να περιέχει τουλάχιστον μια συνάρτηση μου.";
        document.getElementById("OutputModalbody2").innerHTML = "";
        document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
        document.getElementById("OutputModalBtnResult1").onclick = function () {
            $("#OutputModal").modal('hide');
            return false;
        };
        $("#OutputModal").modal();
    }
}


function playback(framenumber) {
    if (window.cancel == 0) {
        //var framenumber = 0;
        if (framenumber <= window.maxframe) {
            var frame = "frame" + framenumber;
            var retrievedframe = sessionStorage.getItem(frame);
            var frameinfo = JSON.parse(retrievedframe);
            framenumber = framenumber + 1;
            editor2.removeLineClass(window.previousframeline, 'wrap', 'styled-background');
            editor2.addLineClass(frameinfo[0], 'wrap', 'styled-background');
            window.delline = frameinfo[0];
            window.previousframeline = frameinfo[0];
            if (window.mode == 'simple') {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1];
                loop(framenumber);
            }
            else if ((window.mode == 'ElGreco') && (window.previousframeinfo != frameinfo[1])) {
                var regex5 = /\d+/;
                var regex4 = /(EDUV προχώρα μπροστά για \d+ δευτερόλεπτα!!!)|(EDUV προχώρα πίσω για \d+ δευτερόλεπτα!!!)|(EDUV αναδύσου για \d+ δευτερόλεπτα!!!)|(EDUV καταδύσου για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε αριστερά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα πάνω για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα κάτω για \d+ δευτερόλεπτα!!!)(EDUV κύλισε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV κύλισε αριστερά για \d+ δευτερόλεπτα!!!)/;
                var reglastline = /.*\s*$/;
                var lastline = reglastline.exec(frameinfo[1]);
                if (regex4.test(lastline)) {
                     setTimeout(function () {
                        document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    }, 5000);
                    setTimeout(function () {
                        document.getElementById("blocklyArea").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    }, 15000);
                    sessionStorage.removeItem(frame)
                    sessionStorage.setItem(frame, JSON.stringify([frameinfo[0], frameinfo[1], 'change']));
                    $("#BrythonModal").removeData();
                    document.getElementById("BrythonModalbody1").innerHTML = "Ο El Greco λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                    var dur = regex5.exec(lastline);
                    switch (regex4.exec(lastline)[0]) {
                        case ('EDUV προχώρα μπροστά για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Forward import Forward\nForward('+ dur +')\n';
                            break;
                        case ('EDUV προχώρα πίσω για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Backwards import Backwards\nBackwards('+ dur +')\n';
                            break;
                        case ('EDUV αναδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Emerge import Emerge\nEmerge('+ dur + ')\n';
                            break;
                        case ('EDUV καταδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Dive import Dive\nDive('+ dur +')\n';
                            break;
                        case ('EDUV στρίψε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Turn_Right import Turn_Right\nTurn_Right('+ dur +')\n';
                            break;
                        case ('EDUV στρίψε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Turn_Left import Turn_Left\nTurn_Left('+ dur +')\n';
                            break;
                        case ('EDUV στρίψε προς τα πάνω για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Turn_Up import Turn_Up\nTurn_Up('+ dur +')\n';
                            break;
                        case ('EDUV στρίψε προς τα κάτω για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Turn_Down import Turn_Down\nTurn_Down('+ dur +')\n';
                            break;
                        case ('EDUV κύλισε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Roll_Right import Roll_Right\nRoll_Right('+ dur +')\n';
                            break;
                        case ('EDUV κύλισε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                            var code = 'from Roll_Left import Roll_Left\nRoll_Left('+ dur +')\n';
                            break; 
                    }
                    $.ajax({
                        url: 'http://' + urlServer + '/EDUV - CODE/parsecode.php',
                        type: 'POST',
                        dataType: 'json',
                        data: { functionname: 'add', arguments: [code] },

                        success: function (obj, textstatus) {
                            if (!('error' in obj)) {
                                yourVariable = obj.result;
                                //alert(yourVariable);
                            }
                            else {
                                console.log(obj.error + "Λάθος στον κώδικα");
                            }
                        }
                        ,
                        error: function (jqXHR, textStatus, errorThrown) {
                            //console.log(jqXHR);
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            //document.getElementById("checkCodeP").disabled = false;
                            //document.getElementById("runPython").disabled = false;
                            //document.getElementById("runElGrecoP").disabled = false;
                            //document.getElementById("runBlockly").disabled = false;
                            //document.getElementById("showCode").disabled = false;
                            //document.getElementById("checkCode").disabled = false;
                            //document.getElementById("runElGreco").disabled = false;
                            //$("#OutputModal").removeData();
                            //document.getElementById("OutputModalBtnResult2").style.display = "none";
                            //document.getElementById("OutputPic").src = "./images/fail.png";
                            //document.getElementById("OutputModalbody1").innerHTML = "Ο El Greco λέει:\nΥπάρχει κάποιο τεχνικό πρόβλημα και δεν μπορώ να διαβάσω τον κώδικα σου!!!\nΕπικοίνωνησε με την ομάδα Aegean Robotics.";
                            //document.getElementById("OutputModalbody2").innerHTML = "";
                            //document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
                            //document.getElementById("OutputModalBtnResult1").onclick = function () {
                                //$("#OutputModal").modal('hide');
                                //throw new Error("communication with El Greco Lost");
                                //return false;
                            //};
                            if (window.sh == 0) {
                                $("#OutputModal").modal();
                                window.sh = 1;
                                window.cancel = 1;
                                throw new Error("communication with El Greco Lost");
                            }
                        }
                    });
                    window.previousframeinfo = frameinfo[1];
                    loopel(framenumber);
                }
                else {
                    $("#BrythonModal").removeData();
                    document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1];
                    window.previousframeinfo = frameinfo[1];
                    loop(framenumber);
                }
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1];
                window.previousframeinfo = frameinfo[1];
                loop(framenumber);
            }
        } 
        else {
            var frame = "frame" + window.maxframe;
            var retrievedframe = sessionStorage.getItem(frame);
            var frameinfo = JSON.parse(retrievedframe);
            window.currentframe=window.maxframe;
            window.stopexecb = 1;
            window.delline = window.previousframeline;
            document.getElementById("StopCodeExecP").disabled = false;
            document.getElementById("PythonStepF").disabled = false;
            document.getElementById("PythonStepB").disabled = false;
            $('.modal.left').find('button#StopCodeExecP2').prop('disabled', false);
            $('.modal.left').find('button#PythonStepB').prop('disabled', false);
            $('.modal.left').find('button#PythonStepF').prop('disabled', false);
            document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + "\n\n Η εκτέλεση του προγραμμάτος σου ολοκληρώθηκε!!\nΜπορείς να περιηγηθείς στα βήματα εκτέλεσης του προγραμμάτος σου, χρησιμοποιώντας τα αντίστοιχα κουμπιά που υπάρχουν στο κάτω μέρος αυτού του εικονιδίου!!";
        }
    }
    else {
        $('.modal.left').find('button#StopCodeExecP2').prop('disabled', false);
        if (window.previousframeline != undefined) {
            editor2.removeLineClass(window.previousframeline, 'wrap', 'styled-background');
        }
        if (window.currentframe != undefined) {
            editor2.removeLineClass(window.currentframe, 'wrap', 'styled-background');
        }
        throw new Error("user stop");
    }  
}

async function loop(framenumber) {
    $("#BrythonModal").modal();
    await sleep(1000);
    playback(framenumber);
}

async function loopel(framenumber) {
    $("#BrythonModal").modal();
    await sleep(18000);
    playback(framenumber);
}

function initplayback() {
    $('.modal.left').find('button#StopCodeExecP2').prop('disabled', false);
    window.stopexecb = 0;
    window.delline = -100;
    window.cancel = 0;
    window.previousframeline = -100;
    window.trap = 0;
    window.framenu = -1;
    window.sh = 1;
    window.previousframeinfo = 'dssfadfda';
    playback(0);
}

function StopCodeExecP2() {
    if (window.cancel == 1 || window.stopexecb == 1) {
        editor2.removeLineClass(window.delline, 'wrap', 'styled-background');
        document.getElementById("PythonStepF").disabled = true;
        document.getElementById("PythonStepB").disabled = true;
        document.getElementById("StopCodeExecP").disabled = true;
        $('.modal.left').find('button#StopCodeExecP2').prop('disabled', true);
        $('.modal.left').find('button#PythonStepB').prop('disabled', true);
        $('.modal.left').find('button#PythonStepF').prop('disabled', true);
        document.getElementById("checkCodeP").disabled = false;
        document.getElementById("runPython").disabled = false;
        document.getElementById("runElGrecoP").disabled = false;
        document.getElementById("runBlockly").disabled = false;
        document.getElementById("showCode").disabled = false;
        document.getElementById("checkCode").disabled = false;
        document.getElementById("runElGreco").disabled = false;
        $('#BrythonModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
    else {
        window.cancel = 1;
        editor2.removeLineClass(window.delline, 'wrap', 'styled-background');
        document.getElementById("PythonStepF").disabled = true;
        document.getElementById("PythonStepB").disabled = true;
        document.getElementById("StopCodeExecP").disabled = false;
        $('.modal.left').find('button#StopCodeExecP2').prop('disabled', false);
        $('.modal.left').find('button#PythonStepB').prop('disabled', true);
        $('.modal.left').find('button#PythonStepF').prop('disabled', true);
        document.getElementById("checkCodeP").disabled = false;
        document.getElementById("runPython").disabled = false;
        document.getElementById("runElGrecoP").disabled = false;
        document.getElementById("runBlockly").disabled = false;
        document.getElementById("showCode").disabled = false;
        document.getElementById("checkCode").disabled = false;
        document.getElementById("runElGreco").disabled = false;
    }  
}

function StopCodeExecP3() {
    window.cancel = 1;
    editor2.removeLineClass(window.delline, 'wrap', 'styled-background');
    document.getElementById("PythonStepF").disabled = true;
    document.getElementById("PythonStepB").disabled = true;
    document.getElementById("StopCodeExecP").disabled = true;
    $('.modal.left').find('button#StopCodeExecP2').prop('disabled', true);
    $('.modal.left').find('button#PythonStepB').prop('disabled', true);
    $('.modal.left').find('button#PythonStepF').prop('disabled', true);
    document.getElementById("checkCodeP").disabled = false;
    document.getElementById("runPython").disabled = false;
    document.getElementById("runElGrecoP").disabled = false;
    document.getElementById("runBlockly").disabled = false;
    document.getElementById("showCode").disabled = false;
    document.getElementById("checkCode").disabled = false;
    document.getElementById("runElGreco").disabled = false;
}

function PythonStepF() {
    if (window.currentframe == window.maxframe) {
        window.previousframe = window.currentframe;
        var framenumbercurrent = "frame" + window.maxframe;
        var retrievedframe = sessionStorage.getItem(framenumbercurrent);
        var frameinfo = JSON.parse(retrievedframe);
        window.delline = frameinfo[0];
        editor2.addLineClass(frameinfo[0], 'wrap', 'styled-background');
        if ($('#BrythonModal').is(':visible')) {
            document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + "Έφτασες στο τέλος του προγραμμάτος σου!!";
        }
        else {
            $("#BrythonModal").removeData();
            document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
            document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + "Έφτασες στο τέλος του προγραμμάτος σου!!";
            $("#BrythonModal").modal();
        }  
    }
    else {
        window.previousframe = window.currentframe;
        var framenumberprevious = "frame" + window.previousframe;
        var retrievedframepre = sessionStorage.getItem(framenumberprevious);
        var frameinfopre = JSON.parse(retrievedframepre);
        window.currentframe = window.currentframe + 1;
        var framenumbercurrent = "frame" + window.currentframe;
        var retrievedframecur = sessionStorage.getItem(framenumbercurrent);
        var frameinfocur = JSON.parse(retrievedframecur);
        editor2.removeLineClass(frameinfopre[0], 'wrap', 'styled-background');
        editor2.addLineClass(frameinfocur[0], 'wrap', 'styled-background');
        window.delline = frameinfocur[0];
        if (window.mode == 'simple') {
            if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                $("#BrythonModal").modal();
            }  
        }
        else if ((window.mode == 'ElGreco') && (frameinfopre[1] != frameinfocur[1])) {
            var regex4 = /(EDUV προχώρα μπροστά για \d+ δευτερόλεπτα!!!)|(EDUV προχώρα πίσω για \d+ δευτερόλεπτα!!!)|(EDUV αναδύσου για \d+ δευτερόλεπτα!!!)|(EDUV καταδύσου για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε αριστερά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα πάνω για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα κάτω για \d+ δευτερόλεπτα!!!)(EDUV κύλισε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV κύλισε αριστερά για \d+ δευτερόλεπτα!!!)/;
            var reglastline = /.*\s*$/;
            var lastline = reglastline.exec(frameinfocur[1]);
            if (regex4.test(lastline)) {
                $('.modal.left').find('button#PythonStepB').prop('disabled', true);
                $('.modal.left').find('button#PythonStepF').prop('disabled', true);
                document.getElementById("PythonStepF").disabled = true;
                document.getElementById("PythonStepB").disabled = true;
                    setTimeout(function () {
                    document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                }, 5000);
                setTimeout(function () {
                    document.getElementById("blocklyArea").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    $('.modal.left').find('button#PythonStepB').prop('disabled', false);
                    $('.modal.left').find('button#PythonStepF').prop('disabled', false);
                    document.getElementById("PythonStepF").disabled = false;
                    document.getElementById("PythonStepB").disabled = false;
                }, 15000);
                if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                }
                else {
                    $("#BrythonModal").removeData();
                    document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                    $("#BrythonModal").modal();
                }     
                var regex5 = /\d+/;
                var dur = regex5.exec(lastline);
                switch (regex4.exec(lastline)[0]) {
                    case ('EDUV προχώρα μπροστά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Forward import Forward\nForward('+ dur +')\n';
                        break;
                    case ('EDUV προχώρα πίσω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Backwards import Backwards\nBackwards('+ dur +')\n';
                        break;
                    case ('EDUV αναδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Emerge import Emerge\nEmerge('+ dur + ')\n';
                        break;
                    case ('EDUV καταδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Dive import Dive\nDive('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Right import Turn_Right\nTurn_Right('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Left import Turn_Left\nTurn_Left('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε προς τα πάνω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Up import Turn_Up\nTurn_Up('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε προς τα κάτω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Down import Turn_Down\nTurn_Down('+ dur +')\n';
                        break;
                    case ('EDUV κύλισε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Roll_Right import Roll_Right\nRoll_Right('+ dur +')\n';
                        break;
                    case ('EDUV κύλισε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Roll_Left import Roll_Left\nRoll_Left('+ dur +')\n';
                        break; 
                }
                $.ajax({
                    url: 'http://' + urlServer + '/EDUV - CODE/parsecode.php',
                    type: 'POST',
                    dataType: 'json',
                    data: { functionname: 'add', arguments: [code] },

                    success: function (obj, textstatus) {
                        if (!('error' in obj)) {
                            yourVariable = obj.result;
                            //alert(yourVariable);
                        }
                        else {
                            console.log(obj.error + "Λάθος στον κώδικα");
                        }
                    }
                    ,
                    error: function (jqXHR, textStatus, errorThrown) {
                        //console.log(jqXHR);
                        //console.log(textStatus);
                        //console.log(errorThrown);
                        //document.getElementById("checkCodeP").disabled = false;
                        //document.getElementById("runPython").disabled = false;
                        //document.getElementById("runElGrecoP").disabled = false;
                        //document.getElementById("runBlockly").disabled = false;
                        //document.getElementById("showCode").disabled = false;
                        //document.getElementById("checkCode").disabled = false;
                        //document.getElementById("runElGreco").disabled = false;
                        //$("#OutputModal").removeData();
                        //document.getElementById("OutputModalBtnResult2").style.display = "none";
                        //document.getElementById("OutputPic").src = "./images/fail.png";
                        //document.getElementById("OutputModalbody1").innerHTML = "Ο El Greco λέει:\nΥπάρχει κάποιο τεχνικό πρόβλημα και δεν μπορώ να διαβάσω τον κώδικα σου!!!\nΕπικοίνωνησε με την ομάδα Aegean Robotics.";
                        //document.getElementById("OutputModalbody2").innerHTML = "";
                        //document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
                        //document.getElementById("OutputModalBtnResult1").onclick = function () {
                            //$("#OutputModal").modal('hide');
                           //throw new Error("communication with El Greco Lost");
                            //return false;
                        //};
                        if (window.sh == 0) {
                            $("#OutputModal").modal();
                            window.sh = 1;
                            window.cancel = 1;
                            throw new Error("communication with El Greco Lost");
                        }
                    }
                });
            }
            else {
                if ($('#BrythonModal').is(':visible')) {
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                }
                else {
                    $("#BrythonModal").removeData();
                    document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                    $("#BrythonModal").modal();
                }  
            }
        }
        else {
            if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                $("#BrythonModal").modal();
            }  
        } 
    }      
}

function PythonStepΒ() {
    if (window.currentframe == 0) {
        window.previousframe = window.currentframe;
        var framenumbercurrent = "frame" + 0;
        var retrievedframe = sessionStorage.getItem(framenumbercurrent);
        var frameinfo = JSON.parse(retrievedframe);
        window.delline = frameinfo[0];
        editor2.addLineClass(frameinfo[0], 'wrap', 'styled-background');
        if ($('#BrythonModal').is(':visible')) {
            document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + "Έφτασες στην αρχή του προγραμμάτος σου!!";
        }
        else {
            $("#BrythonModal").removeData();
            document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
            document.getElementById("BrythonModalbody2").innerHTML = frameinfo[1] + "Έφτασες στην αρχή του προγραμμάτος σου!!";
            $("#BrythonModal").modal();
        }
    }
    else {
        window.previousframe = window.currentframe;
        var framenumberprevious = "frame" + window.previousframe;
        var retrievedframepre = sessionStorage.getItem(framenumberprevious);
        var frameinfopre = JSON.parse(retrievedframepre);
        window.currentframe = window.currentframe - 1;
        var framenumbercurrent = "frame" + window.currentframe;
        var retrievedframecur = sessionStorage.getItem(framenumbercurrent);
        var frameinfocur = JSON.parse(retrievedframecur);
        editor2.removeLineClass(frameinfopre[0], 'wrap', 'styled-background');
        editor2.addLineClass(frameinfocur[0], 'wrap', 'styled-background');
        window.delline = frameinfocur[0];
        if (window.mode == 'simple') {
            if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                $("#BrythonModal").modal();
            }
        }
        else if ((frameinfocur[2] == 'change')) {
            var regex4 = /(EDUV προχώρα μπροστά για \d+ δευτερόλεπτα!!!)|(EDUV προχώρα πίσω για \d+ δευτερόλεπτα!!!)|(EDUV αναδύσου για \d+ δευτερόλεπτα!!!)|(EDUV καταδύσου για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε αριστερά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα πάνω για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα κάτω για \d+ δευτερόλεπτα!!!)(EDUV κύλισε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV κύλισε αριστερά για \d+ δευτερόλεπτα!!!)/;
            var reglastline = /.*\s*$/;
            var lastline = reglastline.exec(frameinfocur[1]);
            if (regex4.test(lastline)) {
                $('.modal.left').find('button#PythonStepB').prop('disabled', true);
                $('.modal.left').find('button#PythonStepF').prop('disabled', true);
                document.getElementById("PythonStepF").disabled = true;
                document.getElementById("PythonStepB").disabled = true;
                    setTimeout(function () {
                    document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                }, 5000);
                setTimeout(function () {
                    document.getElementById("blocklyArea").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    $('.modal.left').find('button#PythonStepB').prop('disabled', false);
                    $('.modal.left').find('button#PythonStepF').prop('disabled', false);
                    document.getElementById("PythonStepF").disabled = false;
                    document.getElementById("PythonStepB").disabled = false;
                }, 15000);
                if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                }
                else {
                    $("#BrythonModal").removeData();
                    document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                    $("#BrythonModal").modal();
                }
                var regex5 = /\d+/;
                var dur = regex5.exec(lastline);
                switch (regex4.exec(lastline)[0]) {
                    case ('EDUV προχώρα μπροστά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Forward import Forward\nForward('+ dur +')\n';
                        break;
                    case ('EDUV προχώρα πίσω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Backwards import Backwards\nBackwards('+ dur +')\n';
                        break;
                    case ('EDUV αναδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Emerge import Emerge\nEmerge('+ dur + ')\n';
                        break;
                    case ('EDUV καταδύσου για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Dive import Dive\nDive('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Right import Turn_Right\nTurn_Right('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Left import Turn_Left\nTurn_Left('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε προς τα πάνω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Up import Turn_Up\nTurn_Up('+ dur +')\n';
                        break;
                    case ('EDUV στρίψε προς τα κάτω για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Turn_Down import Turn_Down\nTurn_Down('+ dur +')\n';
                        break;
                    case ('EDUV κύλισε δεξιά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Roll_Right import Roll_Right\nRoll_Right('+ dur +')\n';
                        break;
                    case ('EDUV κύλισε αριστερά για ' + dur + ' δευτερόλεπτα!!!'):
                        var code = 'from Roll_Left import Roll_Left\nRoll_Left('+ dur +')\n';
                        break; 
                }
                $.ajax({
                    url: 'http://' + urlServer + '/EDUV - CODE/parsecode.php',
                    type: 'POST',
                    dataType: 'json',
                    data: { functionname: 'add', arguments: [code] },

                    success: function (obj, textstatus) {
                        if (!('error' in obj)) {
                            yourVariable = obj.result;
                            //alert(yourVariable);
                        }
                        else {
                            console.log(obj.error + "Λάθος στον κώδικα");
                        }
                    }
                    ,
                    error: function (jqXHR, textStatus, errorThrown) {
                        //console.log(jqXHR);
                        //console.log(textStatus);
                        //console.log(errorThrown);
                        //document.getElementById("checkCodeP").disabled = false;
                        //document.getElementById("runPython").disabled = false;
                        //document.getElementById("runElGrecoP").disabled = false;
                        //document.getElementById("runBlockly").disabled = false;
                        //document.getElementById("showCode").disabled = false;
                        //document.getElementById("checkCode").disabled = false;
                        //document.getElementById("runElGreco").disabled = false;
                        //$("#OutputModal").removeData();
                        //document.getElementById("OutputModalBtnResult2").style.display = "none";
                        //document.getElementById("OutputPic").src = "./images/fail.png";
                        //document.getElementById("OutputModalbody1").innerHTML = "Ο El Greco λέει:\nΥπάρχει κάποιο τεχνικό πρόβλημα και δεν μπορώ να διαβάσω τον κώδικα σου!!!\nΕπικοίνωνησε με την ομάδα Aegean Robotics.";
                        //document.getElementById("OutputModalbody2").innerHTML = "";
                        //document.getElementById("OutputModalBtnResult1").value = "ΟΚ!";
                        //document.getElementById("OutputModalBtnResult1").onclick = function () {
                            //$("#OutputModal").modal('hide');
                            //throw new Error("communication with El Greco Lost");
                            //return false;
                        //};
                        if (window.sh == 0) {
                            $("#OutputModal").modal();
                            window.sh = 1;
                            window.cancel = 1;
                            throw new Error("communication with El Greco Lost");
                        }
                    }
                });
            }
            else {
            if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                $("#BrythonModal").modal();
            }
        } 
        }
        else {
            if ($('#BrythonModal').is(':visible')) {
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BrythonModal").removeData();
                document.getElementById("BrythonModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BrythonModalbody2").innerHTML = frameinfocur[1];
                $("#BrythonModal").modal();
            }
        } 
    }   
}