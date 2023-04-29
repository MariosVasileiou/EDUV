var urlServer = "localhost"; //του πανεπιστημίου μάλλον 195.251.166.47

function loginUsers() {
    var cls = document.getElementById("class").value;
    if (cls == "") {
        window.location.assign("index.php");
    }
    else {
        sessionStorage.setItem("user_id",cls);
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECOsurvey/php/logins.php',
            data: {cls:cls},
        }).done(function (data) {
                window.location.assign("gameTypes.php");
            }); 

    }
    
}

function ha(data) {
    alert(data);
}

function ho() {
    alert("los poulos");
}

function playCustom(clevel) {
    sessionStorage.setItem("customle", clevel);
    window.location.assign("AdventureIntro.php");
}

function prepareChangeProfile() {
    var x = document.referrer;
    var ChangeProfile = new RegExp("changeProfiles.php", "i");
    if (ChangeProfile.test(x)) {
        //donothing
    }
    else if (performance.navigation.type != 1){
        sessionStorage.setItem('changeprofilref', x);
    }
}

function FromChangeProfile() {
    var x = document.referrer;
    var ChangeProfile = new RegExp("changeProfiles.php", "i");
    if ((ChangeProfile.test(x))) {
        x = sessionStorage.getItem('changeprofilref');
        window.location.assign(x);
    }
    else if (performance.navigation.type == 1) {
        x = sessionStorage.getItem('changeprofilref');
        window.location.assign(x);
    }
    else {
        window.location.assign(x);
    }
    
}


function prepareFromProfile() {
    var x = document.referrer;
    if (performance.navigation.type != 1) {
        sessionStorage.setItem('fromref', x);
    }
}

function FromProfile() {
    var x = document.referrer;
    if (performance.navigation.type == 1) {
        x = sessionStorage.getItem('fromref');
        window.location.assign(x);
    }
    else {
        window.location.assign(x);
    }
}

function playAdventure(){
    sessionStorage.setItem('gameType', 'customlevel');
    window.location.assign("LevelSel.php");
}

function playPlatform(){
    sessionStorage.setItem('gameType', 'platform');
    window.location.assign("ElGrecoPlatform.php");
}

function bookingService() {
    var day = $.trim($("#day").val());
    var month = $.trim($("#month").val());
    var year = $.trim($("#year").val());
    var hour = $.trim($("#hour").val());
    var min = $.trim($("#min").val());
    var date = day + "/" + month + "/" + year;
    var fulldate = hour + "," + min + ",0," + day + "," + month + "," + year;
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/checkBook.php',
        data: { date: date, fulldate: fulldate },
        success: handleBs
    });
    return false;
}


function handleBs(data) {
    var success = JSON.parse(data);
    var day = $.trim($("#day").val());
    var month = $.trim($("#month").val());
    var year = $.trim($("#year").val());
    var hour = $.trim($("#hour").val());
    var min = $.trim($("#min").val());
    var date = day + "/" + month + "/" + year;
    var hour = hour + ":" + min;
    var userid = $.trim($("#userId").val());
    var username = $.trim($("#username").val());
    var email = $.trim($("#email").val());
    var skype = $.trim($("#skype").val());
    var comments = $.trim($("#publicinfo").val());
    if (success["success"] === 1) {
        $("#ModalPleaseWait").modal();
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/PHPMailer_5.2.0/sendBookingEmail.php',
            data: { date: date, hour: hour, userid: userid, username: username, email: email, skype: skype, comments: comments},
            success: handleBs2
        });
    }
    else if (success["success"] === 2)
    {
        $("#ModalSetPast").modal();
    }
    else if (success["success"] === 3)
    {
        var date2 = month + "/10/"  + year;
        var d = new Date(date2);
        var month = new Array();
        month[0] = "Ιανουαρίος";
        month[1] = "Φεβρουάριος";
        month[2] = "Μάρτιος";
        month[3] = "Απρίλιος";
        month[4] = "Μάϊος";
        month[5] = "Ιούνιος";
        month[6] = "Ιούλιος";
        month[7] = "Αύγουστος";
        month[8] = "Σεπτέμβριος";
        month[9] = "Οκτώβριος";
        month[10] = "Νοέμβριος";
        month[11] = "Δεκέβριος";
        var n = month[d.getMonth()];
        document.getElementById("modal message").innerHTML = "Ο " + n + " του " + year + " δεν έχει " + day + " μέρες!!";
        $("#ModalDaysM").modal();     
    }
    else if (success["success"] === 0)
    {
        $("#ModalFailBS").modal();
    }
    else
    {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}

function handleBs2(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalSuccessBS").modal();
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}

function gotogametypes() {
    $("#ModalSuccessBS").modal('hide');
    window.location.assign("http://" + urlServer + "/EL_GRECO/gameTypes.php");
}

function contactService() {
    var name = $.trim($("#first_name").val());
    var surname = $.trim($("#last_name").val());
    var userid = $.trim($("#userId").val());
    var username = $.trim($("#username").val());
    var email = $.trim($("#email").val());
    var subject = $.trim($("#subject").val());
    var comments = $.trim($("#publicinfo").val());
    $("#ModalPleaseWait").modal();
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/PHPMailer_5.2.0/sendContactEmail.php',
        data: { name: name, surname: surname, userid: userid, username: username, email: email, subject: subject, comments: comments },
        success: handleCs
    });
    return false;
}


function handleCs(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalSuccessCS").modal();
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}

function goto() {
    $("#ModalSuccessCS").modal('hide');
    window.location.assign("http://" + urlServer + "/EL_GRECO/gameTypes.php");
}


function checkEmail() {
    var username = $.trim($("#emailReg").val());
    var element = $("#emailReg")[0];
    var emailFilter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (!emailFilter.test(username)) {
        emailReg.style.background = 'LightBlue';
        document.getElementById("emailHint").innerHTML = "Παρακαλώ πληκτρολόγησε μια σώστη διεύθυνση, πχ example@example.com";
        element.setCustomValidity('Παρακαλώ πληκτρολόγησε μια σώστη διεύθυνση, πχ example@example.com.');
    } else {
        console.log("send ajax to check emaiL!");
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/check_email.php',
            data: { email: username },
            success: handleData
        });
    }

}

function handleData(data) {
    var element = $("#emailReg")[0];
    var success = JSON.parse(data);
    console.log("success:" + success["success"] + " Message:" + success["message"]);
    if (success["success"] == 1) {
        console.log("ONSUCCESS");
        emailReg.style.background = 'LightGreen';
        element.setCustomValidity('');
        document.getElementById("emailHint").innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
    } else {
        emailReg.style.background = 'LightBlue';
        element.setCustomValidity('Υπάρχει ήδη λογαριασμός με το email που πληκτρολόγησες.');
        document.getElementById("emailHint").innerHTML = "Υπάρχει ήδη λογαριασμός με το email που πληκτρολόγησες.\n";
    }
}

function checkPass() {
    var element = $("#passwordReg")[0];
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
    var passwordVal = $.trim($("#passwordReg").val());
    if (passwordVal == "") {
        passwordReg.style.background = 'LightBlue';
        error = "Δεν έχεις εισάγει κωδικό πρόσβασης\n";
        document.getElementById("passwordHint").innerHTML = error;
        element.setCustomValidity('Δεν έχεις εισάγει κωδικό πρόσβασης.');
    } else if ((passwordVal.length < 8) || (passwordVal.length > 20)) {
        passwordReg.style.background = 'LightBlue';
        error = "Ο κωδικός πρόσβασης δεν έχει το σωστό μέγεθος, πρέπει να είναι μεγαλύτερο από 8 χαρακτήρες. \n";
        document.getElementById("passwordHint").innerHTML = error;
        element.setCustomValidity('Ο κωδικός πρόσβασης δεν έχει το σωστό μέγεθος, πρέπει να είναι μεγαλύτερο από 8 χαρακτήρες.');
    } else if (illegalChars.test(passwordVal)) {
        passwordReg.style.background = 'LightBlue';
        error = "Ο κωδικός πρόσβασης περιέχει μη αποδεκτούς χαρακτήρες, πρέπει να περιέχει μόνο γράμματα (λατινικούς χαρακτήρες) και αριθμούς.\n";
        document.getElementById("passwordHint").innerHTML = error;
        element.setCustomValidity('Ο κωδικός πρόσβασης περιέχει μη αποδεκτούς χαρακτήρες, πρέπει να περιέχει μόνο γράμματα (λατινικούς χαρακτήρες) και αριθμούς.');
    } else if ((passwordVal.search(/[a-zA-Z]+/) == -1) || (passwordVal.search(/[0-9]+/) == -1)) {
        passwordReg.style.background = 'LightBlue';
        error = "Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον έναν αριθμό και ένα γράμμα (λατινικούς χαρακτήρες).\n";
        document.getElementById("passwordHint").innerHTML = error;
        element.setCustomValidity('Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον έναν αριθμό και ένα γράμμα (λατινικούς χαρακτήρες).');
    } else {
        passwordReg.style.background = 'LightGreen';
        document.getElementById("passwordHint").innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        element.setCustomValidity('');
    }
}

function comparePass(value) {
    var error = "";
    var element = $("#passwordConf")[0];
    if (value =='') {
        passwordConf.style.background = 'LightBlue';
        error = "Δεν έχεις εισάγει το πεδίο επιβεβαίωση κωδικού πρόσβασης.\n";
        document.getElementById("passConfHint").innerHTML = error;
        element.setCustomValidity('Δεν έχεις εισάγει το πεδίο επιβεβαίωση κωδικού πρόσβασης.');
    } else {
        if (document.getElementById('passwordReg').value === value) {
            element.setCustomValidity('');
            passwordConf.style.background = 'LightGreen';
            document.getElementById("passConfHint").innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        } else {
            passwordConf.style.background = 'LightBlue';
            error = "Ο κωδικός πρόσβασης δεν ταιριάζει με τον κωδικό που πληκτρολόγησες παραπάνω.\n";
            document.getElementById("passConfHint").innerHTML = error;
            element.setCustomValidity('Ο κωδικός πρόσβασης δεν ταιριάζει με τον κωδικό που πληκτρολόγησες παραπάνω.');
        }
    }
}

function loginUser() {
    var email = document.getElementById("email").value;
    var passwordU = document.getElementById("password").value;
    console.log("send ajax to check credentials!");
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/checkUserCredentials.php',
        data: { email: email, password: passwordU },
        success: handleLogin
    });
}

function handleLogin(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        getuserlevelinfo(success["userid"], success["userlevel"]);
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/FailedLogin.php");
    }
}

function getuserlevelinfo(userid, userlevel) {
    console.log("send ajax to get user levelinfo!");
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/getuserlevelinfo.php',
        data: { userid: userid, userlevel: userlevel },
        success: handleguslinfo
    });
}

function handleguslinfo(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        getuserbookinginfo(success["userid"]);
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}

function getuserbookinginfo(userid) {
    console.log("send ajax to get user booking info!");
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/getuserbookinginfo.php',
        data: { userid: userid },
        success: handleuserboklinfo
    });
}

function handleuserboklinfo(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        window.location.assign("http://" + urlServer + "/EL_GRECO/gameTypes.php");
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}


function verifyUser() {
    document.getElementById("submitReg").disabled = true;
    var email = $.trim($("#emailReg").val());
    var pass = $.trim($("#passwordReg").val());
    $("#ModalPleaseWait").modal();
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/insertverify.php',
        data: { email: email, password: pass },
        success: handleVerify
    });
    return false;
}


function handleVerify(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/PHPMailer_5.2.0/sendVerifyEmail.php',
            data: { email: success["email"], hash: success["hash"] },
            success: handleVerify2
        });
    }
    else {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalFailVerify").modal();
    }
}

function handleVerify2(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalSuccessVerify").modal();
    }
    else {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalFailVerify").modal();
    }
}

function hideModal(id) {
    $('#' + id).modal('hide');
}

function showModal(id) {
    $('#' + id).modal();
}

function checkUserName() {
    var element = $("#username")[0];
    var uname = $("#username").val();
    if (element.value === '') {
        console.log("no value");
        element.setCustomValidity('Παρακαλώ πληκτρολογήστε ένα Username');
    }
    else {
        console.log("send ajax to check emaiL!");
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/checkUsername.php',
            data: { username: uname },
            success: handleUserName
        });
    }
}

function handleUserName(data) {
    var success3 = JSON.parse(data);
    var element = $("#username")[0];
    if (success3["success"] == 1) {
        console.log("ok");
        element.setCustomValidity('');
    } else {
        console.log("not ok");
        element.setCustomValidity('Αυτό το User Name χρησιμοποιείται. Παρακαλώ επιλέξτε άλλο!');
    }
}


function checkEmail2() {
    var username = $.trim($("#email2").val());
    var element = $("#email2")[0];
    if (element.value === '') {
        console.log("no value");
        element.setCustomValidity('Παρακαλώ πληκτρολογήστε ένα Username ή έναν λογαριασμό ηλεκτρονικού ταχυδρομείου.');
    }
    else {
        console.log("send ajax to check emaiL!");
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/check_email.php',
            data: { email: username },
            success: handleData2
        });
    }
}

function handleData2(data) {
    var element = $("#email2")[0];
    var success = JSON.parse(data);
    console.log("success:" + success["success"] + " Message:" + success["message"]);
    if (success["success"] == 1) {
        var uname = $("#email2").val();
        console.log("send ajax to check username!");
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/checkUsername.php',
            data: { username: uname },
            success: handleUserName2
        });
    } else {
        element.setCustomValidity('');
    }
}


function handleUserName2(data) {
    var success3 = JSON.parse(data);
    var element = $("#email2")[0];
    if (success3["success"] == 1) {
        console.log("not ok");
        element.setCustomValidity('Δεν έχει γίνει εγγραφή με αυτό το User Name ή Password. ');
    } else {
        console.log("ok");
        element.setCustomValidity('');
    }
}

function verifyUser2() {
    document.getElementById("send").disabled = true;
    var username = $.trim($("#email2").val());
    $("#ModalPleaseWait").modal();
    console.log("send ajax to check emaiL!");
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/check_email.php',
        data: { email: username },
        success: handleVerify21
    });
    return false;
}

function handleVerify21(data) {
    var email = $.trim($("#email2").val());
    var pass = 0000;
    var success = JSON.parse(data);
    console.log("success:" + success["success"] + " Message:" + success["message"]);
    if (success["success"] == 1) {
        var uname = $("#email2").val();
        console.log("send ajax to check username!");
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/checkUsername.php',
            data: { username: uname },
            success: handleVerify22
        });
    } else {
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/insertverify.php',
            data: { email: email, password: pass },
            success: handleVerify23
        });
    }
}

function handleVerify22(data) {
    var success = JSON.parse(data);
    var pass = 0000;
    if (success["success"] === 0) {
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/php/insertverify.php',
            data: { email: success["email"], password: pass },
            success: handleVerify23
        });
    }
    else {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalFailVerify").modal();
    }
}
function handleVerify23(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $.ajax({
            type: 'POST',
            url: 'http://' + urlServer + '/EL_GRECO/PHPMailer_5.2.0/sendVerifyEmailLostPass.php',
            data: { email: success["email"], hash: success["hash"] },
            success: handleVerify24
        });
    }
    else {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalFailVerify").modal();
    }
}

function handleVerify24(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalSuccessVerify").modal();
    }
    else {
        $("#ModalPleaseWait").modal('hide');
        $("#ModalFailVerify").modal();
    }
}

function changePasss() {
    var email = $.trim($("#email").val());
    var password = $.trim($("#passwordReg").val());
    $.ajax({
        type: 'POST',
        url: 'http://' + urlServer + '/EL_GRECO/php/changePassword.php',
        data: { email: email, password: password },
        success: handleChangePass
    });
    return false;
}

function handleChangePass(data) {
    var success = JSON.parse(data);
    if (success["success"] === 1) {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Success.php");
    }
    else {
        window.location.assign("http://" + urlServer + "/EL_GRECO/Failure.php");
    }
}

function playElGrecoV2() {
    var oldURL = document.URL;
    var gameModeUrl = '';
    if (oldURL === 'http://' + urlServer + '/EL_GRECO/AdventureIntro.php') {
        gameModeUrl = "http://" + urlServer + "/EL_GRECO/levelScenario.php";
    } else {
        gameModeUrl = "http://" + urlServer + "/EL_GRECO/ElGrecoplatform.php";
    }
    window.location.assign(gameModeUrl);
}


function modalGameStart() {
    $("#modalBtn").click();
}

function setUpHeaderLayout(data) {
    if (data["enable"] === 0) {
        document.getElementById("timer").style.display = "none";
        document.getElementById("menu").className = "col-xs-9 text-right menu-1";

    } else if (data["enable"] === 1) {
        document.getElementById("timer").style.display = "block";
        document.getElementById("counterDownHeader").style.display = "block";
        document.getElementById("menu").className = "col-xs-7 text-right menu-1";
        var countTime;
        var startSession = data["startSession"];
        var endSession = data["endSession"];
        var countTime = setUpTimeDistance(startSession, endSession, 'counterDownHeader');
    } else if (data["enable"] === 2) {
        document.getElementById("timer").style.display = "none";
        document.getElementById("menu").className = "col-xs-9 text-right menu-1";
    }

}