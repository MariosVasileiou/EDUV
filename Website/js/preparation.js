var urlServer = "localhost"; //του πανεπιστημίου μάλλον 195.251.166.47
var appgametype = "platform";
var appuserid = "1";


function prepareElGrecoPlatform() {

    
   var storagename = "ElGrecoBlocks" + appuserid;
    var storagenamearea = "Codearea" + appuserid;
    
    
    if (localStorage.getItem(storagename) && (performance.navigation.type == 1)||localStorage.getItem(storagenamearea) && (performance.navigation.type == 1)) {
        restoreblocklyblocks();
    }
    else if (localStorage.getItem(storagename)||localStorage.getItem(storagenamearea)) {
        $("#BlocksModal").removeData();
        if ((appgametype) === "platform")
        {
            document.getElementById("BlocksModalbody1").innerHTML = "Υπάρχουν κομμάτια κώδικα από την προηγούμενη φορά που επισκέφτηκες την σελίδα του EDUV.<br>Θέλεις να τα φορτώσω στον χώρο εργασίας;";
        }
        else if ((appgametype) === "adventure" | (appgametype) === "customlevel") 
        {
            document.getElementById("BlocksModalbody1").innerHTML = "Υπάρχουν κομμάτια κώδικα από την προηγούμενη φορά που έπαιξες αυτό το επίπεδο.<br>Θέλεις να τα φορτώσω στον χώρο εργασίας;";
        }
        
        document.getElementById("BlocksModalBtnResult1").onclick = function () {
            $("#BlocksModal").modal('hide');
            restoreblocklyblocks();
            return false;
        }; 
        document.getElementById("BlocksModalBtnResult2").onclick = function () {
            $("#BlocksModal").modal('hide');
            return false;
        };
        $("#BlocksModal").modal();   
    }

    
}





function saveblocklyblocks() {
    if ((appgametype) === "customlevel") {
        var storagename = "ElGrecoBlocks" + appuserid + appcustomlevel + "custom";
        var storagenamearea = "Codearea" + appuserid + appcustomlevel + "custom";
    }
    else if ((appgametype) === "adventure") {
        var storagename = "ElGrecoBlocks" + appuserid + applevelnum;
        var storagenamearea = "Codearea" + appuserid + applevelnum;
    }
    else if ((appgametype) === "platform") {
        var storagename = "ElGrecoBlocks" + appuserid;
        var storagenamearea = "Codearea" + appuserid;
    }

    if (typeof (Storage) !== "undefined") {
        
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xml_text = Blockly.Xml.domToText(xml);
        var n = xml_text.length;
        if (n < 100) {
            if (localStorage.getItem(storagename)) {
                localStorage.removeItem(storagename);
            }
        }
        else {
            localStorage.setItem(storagename, xml_text);
        }
        var co = window.editor2.getValue();
        localStorage.setItem(storagenamearea, co);
    }
}

function restoreblocklyblocks() {
    if ((appgametype) === "customlevel") {
        var storagename = "ElGrecoBlocks" + appuserid + applevelcusnum + "custom";
        var storagenamearea = "Codearea" + appuserid + appcustomlevel + "custom";
    }
    else if ((appgametype) === "adventure") {
        var storagename = "ElGrecoBlocks" + appuserid + applevelnum;
        var storagenamearea = "Codearea" + appuserid + applevelnum;
    }
    else if ((appgametype) === "platform") {
        var storagename = "ElGrecoBlocks" + appuserid;
        var storagenamearea = "Codearea" + appuserid;
    }
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(storagename)) {
            var xml_text = localStorage.getItem(storagename);
            var xml = Blockly.Xml.textToDom(xml_text);
            Blockly.Xml.domToWorkspace(xml, workspace);
        }
        if (localStorage.getItem(storagenamearea)) {
           var co = localStorage.getItem(storagenamearea);
           window.editor2.setValue(co);
        }
    }
    
}


