var urlServer = "localhost"; //του πανεπιστημίου μάλλον 195.251.166.47

function asleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function prestepselectionel() {
    window.blframe = 0;
    window.maxframe = 0;
    document.getElementById('runPython').disabled = true;
    document.getElementById('runBlockly').disabled = true;
    document.getElementById('runElGreco').disabled = true;
    document.getElementById('runElGrecoP').disabled = true;
    window.interstep = 0;
    document.getElementById('codeArea2').value = '';
    $('#GifModal').modal();
    $('#GifModal').on('shown.bs.modal', stepselectionel);
}
function stepselectionel() {
    $('#GifModal').off('shown');
    if (document.getElementById('BlocklyCheck').checked) {
        for (i = 0; i < 2000000; i++) {
            var frameno = "frame" + i;
            if (sessionStorage.getItem(frameno) != undefined) {
                sessionStorage.removeItem(frameno);
            }
            else {
                break;
            }
        }
        window.mode = 'stepEl';
        window.conoutput = '';
        blocklystep();
    }
    else {
        window.mode = 'El';
        runPythonCodebl();
    }
}

function checkifelbl() {
    var outb = document.getElementById('codeArea2').value;
    var srcel = Blockly.Python.workspaceToCode(workspace);
    var regex3 = /(Forward\(\d+\))|(Backwards\(\d+\))|(Emerge\(\d+\))|(Dive\(\d+\))|(Turn_Right\(\d+\))|(Turn_Left\(\d+\))|(Turn_Up\(\d+\))|(Turn_Down\(\d+\))|(Roll_Right\(\d+\))|(Roll_Left\(\d+\))/;
    if (regex3.test(srcel)) {
        if (window.mode === 'stepEl') {
            blocklystep();
        }
        else {
            $("#OutputModal").removeData();
            document.getElementById("OutputModalBtnResult2").style.display = "none";
            document.getElementById("OutputPic").src = "./images/success1.png";
            document.getElementById("OutputModalbody1").innerHTML = "Ο EDUV λέει:\nΘα τρέξω τον κώδικα σε 10 δευτερολέπτα!!\nΤο αποτέλεσμα του κώδικα που έτρεξες:";
            document.getElementById("OutputModalbody2").innerHTML = outb;
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
                        //$('body').removeClass('modal-open');
                        //$('.modal-backdrop').remove();
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

function prestepselection() {
    window.blframe = 0;
    window.maxframe = 0;
    document.getElementById('runPython').disabled = true;
    document.getElementById('runBlockly').disabled = true;
    document.getElementById('runElGreco').disabled = true;
    document.getElementById('runElGrecoP').disabled = true;
    window.interstep = 0;
    document.getElementById('codeArea2').value = '';
    $('#GifModal').modal();
    $('#GifModal').on('shown.bs.modal', stepselection);
}
function stepselection() {
    $('#GifModal').off('shown');
    if (document.getElementById('BlocklyCheck').checked) {
        window.mode = 'step';
        for (i = 0; i < 2000000; i++) {
            var frameno = "frame" + i;
            if (sessionStorage.getItem(frameno) != undefined) {
                sessionStorage.removeItem(frameno);
            }
            else {
                break;
            }
        }
        blocklystep();
    }
    else {
        window.mode = 'simplebl';
        runPythonCodebl();
    }
}

function runPythonCodebl(mode) {
    Blockly.JavaScript.addReservedWords('exit');
    var outputArea = document.getElementById('codeArea2');
    myInterpreter = null;
    var runner;
    //var stepButton = document.getElementById('stepButton');

    function initApi(interpreter, globalObject) {
        
        var wrapper = function (text) {
            text = text ? text.toString() : '';
            outputArea.value = outputArea.value + '\n' + text;
        };
        interpreter.setProperty(globalObject, 'alert', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα μπροστά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Forward', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα πίσω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Backwards', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV αναδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Emerge', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV καταδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Dive', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Left', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα πάνω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Up', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα κάτω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Down', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Left', interpreter.createNativeFunction(wrapper));

        // Add an API function for the prompt() block.
        var wrapper = function (text) {
            return interpreter.createPrimitive(prompt(text));
        };
        interpreter.setProperty(globalObject, 'prompt',
            interpreter.createNativeFunction(wrapper));

        // Add an API function for highlighting blocks.
        var wrapper = function (id) {
            id = String(id || '');
            return interpreter.createPrimitive(highlightBlock(id));
        };
        interpreter.setProperty(globalObject, 'highlightBlock',
            interpreter.createNativeFunction(wrapper));
    }

    var highlightPause = false;
    var latestCode = '';

    function highlightBlock(id) {
        workspace.highlightBlock(null);
        highlightPause = true;
    }

    function resetStepUi(clearOutput) {
        workspace.highlightBlock(null);
        highlightPause = false;
        if (clearOutput) {
            outputArea.value = '';
        }
    }

    function generateCodeAndLoadIntoInterpreter() {
        // Generate JavaScript code and parse it.
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        Blockly.JavaScript.addReservedWords('highlightBlock');
        Blockly.JavaScript.INFINITE_loop_TRAP = 'if(--window.loopTrap == 0) throw "Infinite loop";\n';
        latestCode = "window.loopTrap = 1001;\n" + Blockly.JavaScript.workspaceToCode(workspace);
        resetStepUi(true);
    }

    function resetInterpreter() {
        myInterpreter = null;
        if (runner) {
            clearTimeout(runner);
            runner = null;
        }
    }

    function runCode() {
        if (!myInterpreter) {
            myInterpreter = new Interpreter(latestCode, initApi);
            resetStepUi(true);
            setTimeout(function () {
                highlightPause = false;
                runner = function () {
                    if (myInterpreter) {
                        var hasMore = myInterpreter.run();
                        if (hasMore) {
                            setTimeout(runner, 10);
                        }
                        else {
                            document.getElementById('checkCodeP').disabled = false;
                            document.getElementById('runPython').disabled = false;
                            document.getElementById('runElGrecoP').disabled = false;
                            document.getElementById('runBlockly').disabled = false;
                            document.getElementById('showCode').disabled = false;
                            document.getElementById('checkCode').disabled = false;
                            document.getElementById('runElGreco').disabled = false;
                            if ((window.mode === 'El') && (window.interstep !== '1')) {
                                resetInterpreter();
                                resetStepUi(false);
                                $('#GifModal').modal('hide');
                                checkifelbl();
                            }
                            else if ((window.mode === 'simplebl') && (window.interstep !== '1')) {
                                $('#GifModal').modal('hide');
                                $('#OutputModal').removeData();
                                document.getElementById('OutputModalBtnResult2').style.display = 'none';
                                if (document.getElementById('codeArea2').value === '') {
                                    document.getElementById('OutputModalbody1').innerHTML = '';
                                    document.getElementById('OutputModalbody1').innerHTML = 'Ο EDUV λέει:\nΟ κώδικας σου δεν έχει κανένα αποτέλεσμα!<br>Ξαναπροσπάθησε και διάβασε το Tutorial!';
                                    document.getElementById('OutputModalbody2').innerHTML = '';
                                }
                                else {
                                    document.getElementById('OutputModalbody1').innerHTML = '';
                                    document.getElementById('OutputModalbody1').innerHTML = 'Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:';
                                    document.getElementById('OutputModalbody2').innerHTML = '';
                                    document.getElementById('OutputModalbody2').innerHTML = document.getElementById('codeArea2').value;
                                }
                                resetInterpreter();
                                resetStepUi(false);
                                document.getElementById('OutputModalBtnResult1').value = 'OK!';
                                document.getElementById('runElGrecoP').disabled = false;
                                document.getElementById('runBlockly').disabled = false;
                                $('#OutputModal').modal();

                            }
                        }
                    }
                    return;
                };
                runner();
            }, 1);
        }
    }
    // Load the interpreter now, and upon future changes.
    
    generateCodeAndLoadIntoInterpreter();
    runCode();
}


function blocklystep() {
    document.getElementById('StopCodeExecP').disabled = true;
    document.getElementById('checkCodeP').disabled = true;
    document.getElementById('runPython').disabled = true;
    document.getElementById('runElGrecoP').disabled = true;
    document.getElementById('runBlockly').disabled = true;
    document.getElementById('showCode').disabled = true;
    document.getElementById('checkCode').disabled = true;
    document.getElementById('runElGreco').disabled = true;
    document.getElementById('BlocklyStepF').disabled = false;
    document.getElementById('BlocklyStepB').disabled = false;
    document.getElementById('StopCodeExec').disabled = false;
    Blockly.JavaScript.addReservedWords('exit');
    var outputArea = document.getElementById('codeArea2');
    myInterpreter = null;
    var runner;
    //var stepButton = document.getElementById('stepButton');

    function initApi(interpreter, globalObject) {
        // Add an API function for the alert() block, generated for 'text_print' blocks.
         var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα μπροστά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Forward', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα πίσω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Backwards', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV αναδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Emerge', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV καταδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Dive', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Left', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα πάνω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Up', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα κάτω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Down', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Left', interpreter.createNativeFunction(wrapper));

        // Add an API function for the prompt() block.
        var wrapper = function (text) {
            return interpreter.createPrimitive(prompt(text));
        };
        interpreter.setProperty(globalObject, 'prompt',
            interpreter.createNativeFunction(wrapper));

        // Add an API function for highlighting blocks.
        var wrapper = function (id) {
            id = String(id || '');
            return interpreter.createPrimitive(highlightBlock(id));
        };
        interpreter.setProperty(globalObject, 'highlightBlock',
            interpreter.createNativeFunction(wrapper));
    }

    var highlightPause = false;
    var latestCode = '';

    function highlightBlock(id) {
        recframebl();
        window.hlid = id;
        workspace.highlightBlock(null);
        highlightPause = true;
    }

    function resetStepUi(clearOutput) {
        workspace.highlightBlock(null);
        highlightPause = false;

        if (clearOutput) {
            outputArea.value = '';
        }
    }

    function generateCodeAndLoadIntoInterpreter() {
        // Generate JavaScript code and parse it.
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        Blockly.JavaScript.addReservedWords('highlightBlock');
        Blockly.JavaScript.INFINITE_loop_TRAP = 'if(--window.loopTrap == 0) throw "Infinite loop";\n';
        latestCode = "window.loopTrap = 1001;\n" + Blockly.JavaScript.workspaceToCode(workspace);
        resetStepUi(true);
    }

    function resetInterpreter() {
        myInterpreter = null;
        if (runner) {
            clearTimeout(runner);
            runner = null;
        }
    }

    function stepCode() {
        if (!myInterpreter) {
            // First statement of this code.
            // Clear the program output.
            resetStepUi(true);
            myInterpreter = new Interpreter(latestCode, initApi);

            // And then show generated code in an alert.
            // In a timeout to allow the outputArea.value to reset first.
            setTimeout(function () {
                highlightPause = true;
                stepCode();
            }, 1);
            return;
        }
        highlightPause = false;
        try {
            runner = function () {
                if (myInterpreter) {
                    var hasMore = myInterpreter.step();
                    if (hasMore) {
                        runner();
                    }
                    else {
                        if (window.interstep !== '1') {
                            resetInterpreter();
                            resetStepUi(false);
                            $('.modal.right').find('button#StopCodeExecP2').prop('disabled', false);
                            window.stopexecb = 0;
                            window.cancel = 0;
                            window.previousframeline = -100;
                            window.trap = 0;
                            window.framenu = -1;
                            window.sh = 1;
                            window.previousframeinfo = 'dssfadfda';
                            recframebl();
                            playbackbl(1);
                            return;
                        }
                    }
                }

                
            };
            runner();
        }
        catch (e) {
            if (e instanceof RangeError) {
                setTimeout(function () {
                    $('#OutputModal').removeData();
                    document.getElementById('OutputModalbody2').innerHTML = '';
                    document.getElementById('OutputModalBtnResult2').style.display = 'none';
                    document.getElementById('OutputModalbody1').innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου προκαλεί αέναο κύκλο(infinite loop)!';
                    document.getElementById('OutputModalbody2').innerHTML = 'Έχει εκτελεστεί η ίδια εντολή παρα πολλές φορές!\nΟ κωδίκας σου περιέχει σφάλμα αναδρομής.\nΗ εκτέλεση του προγράμματος σου έχει σταματήσει!'
                    document.getElementById('OutputPic').src = './images/fail.png';
                    document.getElementById('OutputModalBtnResult1').value = 'OK!';
                    document.getElementById('runElGrecoP').disabled = false;
                    document.getElementById('runBlockly').disabled = false;
                    $('#OutputModal').modal();
                    throw (e);
                }, 0);
            }
            else if (e !== Interpreter.STEP_ERROR) {
                // Uh oh.  This is a real error in the JS-Interpreter.  Rethrow.
                //throw e;
                var error = e + "";
                var firstLine = error.split('\n',)[0];
                $("#OutputModal").removeData();
                document.getElementById("OutputModalBtnResult2").style.display = "none";
                document.getElementById("OutputPic").src = "./images/fail.png";
                document.getElementById("OutputModalbody1").innerHTML = "Υπάρχουν σόβαρα λάθοι στο πρόγραμμα σου που δεν το αφήνουν να εκτελεστεί.<br>Το λάθος που επιστρέφει ή εκτέλεση του είναι το εξής:";
                document.getElementById("OutputModalbody2").innerHTML = firstLine;
                document.getElementById("OutputModalBtnResult1").value = "OK!";
                document.getElementById('runElGrecoP').disabled = false;
                document.getElementById('runBlockly').disabled = false;
                $("#OutputModal").modal();
                throw (e);
            }
        }
    }

    // Load the interpreter now, and upon future changes.
   

    function recframebl() {
        try {
            window.loopbltrap = window.loopbltrap + 1;
            window.blframe = window.blframe + 1;
            window.conoutput = document.getElementById('codeArea2').value;
            if (window.conoutputpre == window.conoutput) {
                var frameinfo = [window.hlid, conoutput];
                var framenumber = 'frame' + window.blframe;
                sessionStorage.setItem(framenumber, JSON.stringify(frameinfo));
            }
            else {
                var frameinfo = [window.hlid, window.conoutput, 'change'];
                var framenumber = 'frame' + window.blframe;
                sessionStorage.setItem(framenumber, JSON.stringify(frameinfo));
            }
            window.conoutputpre = window.conoutput;
            //infinite loopbl trap
            if (window.loopbltrap > 2634) {
                workspace.highlightBlock(null);
                $('#BlocklyModal').modal('hide');
                document.getElementById('BlocklyStepF').disabled = true;
                document.getElementById('BlocklyStepB').disabled = true;
                document.getElementById('StopCodeExec').disabled = true;
                $('.modal.right').find('button#StopCodeExec2').prop('disabled', true);
                $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
                $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
                document.getElementById('checkCodeP').disabled = false;
                document.getElementById('runPython').disabled = false;
                document.getElementById('runElGrecoP').disabled = false;
                document.getElementById('runBlockly').disabled = false;
                document.getElementById('showCode').disabled = false;
                document.getElementById('checkCode').disabled = false;
                document.getElementById('runElGreco').disabled = false;
                $('#OutputModal').removeData();
                document.getElementById('OutputModalbody2').innerHTML = '';
                document.getElementById('OutputModalBtnResult2').style.display = 'none';
                document.getElementById('OutputModalbody1').innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου προκαλεί αέναο κύκλο(infinite loopbl)!';
                document.getElementById('OutputModalbody2').innerHTML = 'Έχει εκτελεστεί η ίδια εντολή παρα πολλές φορές!\nΟ κωδίκας σου περιέχει σφάλμα αναδρομής.\nΗ εκτέλεση του προγράμματος σου έχει σταματήσει!'
                document.getElementById('OutputPic').src = './images/fail.png';
                document.getElementById('OutputModalBtnResult1').value = 'OK!';
                $('#OutputModal').modal();
                resetInterpreter();
                resetStepUi(false);
                throw new Error('infinite loopbl');
            }
            else {
                window.maxframe = window.blframe;
                window.currentframe = window.maxframe;
                if (window.maxframe > 2634) {
                    window.loopbltrap = 5000;
                }
            }
        }
        catch{
            //do nothing infinite loopbl 
        }
    }

    function playbackbl(framenumber) {
        if (window.cancel == 0) {
            //var framenumber = 0;
            if (framenumber <= window.maxframe ) {
                var frame = "frame" + framenumber;
                var retrievedframe = sessionStorage.getItem(frame);
                var frameinfo = JSON.parse(retrievedframe);
                framenumber = framenumber + 1;
                workspace.highlightBlock(frameinfo[0]);
                if (window.mode == 'step') {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1];
                    loopbl(framenumber);
                }
                else if ((window.mode == 'stepEl') && (window.previousframeinfo != frameinfo[1])) {
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
                        $("#BlocklyModal").removeData();
                        document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                        document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
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
                               // console.log(textStatus);
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
                                    throw new Error("communication with EDUV Lost");
                                }
                            }
                        });
                        window.previousframeinfo = frameinfo[1];
                        loopblel(framenumber);
                    }
                    else {
                        $("#BlocklyModal").removeData();
                        document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                        document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1];
                        window.previousframeinfo = frameinfo[1];
                        loopbl(framenumber);
                    }
                }
                else {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\nΟ κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1];
                    window.previousframeinfo = frameinfo[1];
                    loopbl(framenumber);
                }
            }
            else {
                var frame = "frame" + window.maxframe;
                var retrievedframe = sessionStorage.getItem(frame);
                var frameinfo = JSON.parse(retrievedframe);
                window.currentframe = window.maxframe;
                window.stopexecb = 1;
                document.getElementById("StopCodeExec").disabled = false;
                document.getElementById("BlocklyStepF").disabled = false;
                document.getElementById("BlocklyStepB").disabled = false;
                $('.modal.right').find('button#StopCodeExecP2').prop('disabled', false);
                $('.modal.right').find('button#BlocklyStepB').prop('disabled', false);
                $('.modal.right').find('button#BlocklyStepF').prop('disabled', false);
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + "\n\n Η εκτέλεση του προγραμμάτος σου ολοκληρώθηκε!!\nΜπορείς να περιηγηθείς στα βήματα εκτέλεσης του προγραμμάτος σου, χρησιμοποιώντας τα αντίστοιχα κουμπιά που υπάρχουν στο κάτω μέρος αυτού του εικονιδίου!!";
            }
        }
        else {
            workspace.highlightBlock(null);
            throw new Error("user stop");
        }
    }

    async function loopbl(framenumber) {
        $("#BlocklyModal").modal();
        await asleep(1000);
        playbackbl(framenumber);
    }

    async function loopblel(framenumber) {
        $("#BlocklyModal").modal();
        await asleep(18000);
        playbackbl(framenumber);
    }
    $('#GifModal').modal('hide');
    $('#BlocklyModal').removeData();
    document.getElementById('BlocklyStepF').disabled = true;
    document.getElementById('BlocklyStepB').disabled = true;
    document.getElementById('StopCodeExec').disabled = false;
    $('.modal.right').find('button#StopCodeExec2').prop('disabled', false);
    $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
    $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
    document.getElementById('checkCodeP').disabled = true;
    document.getElementById('runPython').disabled = true;
    document.getElementById('runElGrecoP').disabled = true;
    document.getElementById('runBlockly').disabled = true;
    document.getElementById('showCode').disabled = true;
    document.getElementById('checkCode').disabled = true;
    document.getElementById('runElGreco').disabled = true;
    document.getElementById('BlocklyModalbody1').innerHTML = 'Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:';
    $('#BlocklyModal').modal;
    generateCodeAndLoadIntoInterpreter();
    stepCode();
    window.loopbltrap = 0;
}

function StopCodeExec2() {
    if (window.cancel == 1 || window.stopexecb == 1) {
        workspace.highlightBlock(null);
        document.getElementById("BlocklyStepF").disabled = true;
        document.getElementById("BlocklyStepB").disabled = true;
        document.getElementById("StopCodeExec").disabled = true;
        $('.modal.right').find('button#StopCodeExec2').prop('disabled', true);
        $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
        $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
        document.getElementById("checkCodeP").disabled = false;
        document.getElementById("runPython").disabled = false;
        document.getElementById("runElGrecoP").disabled = false;
        document.getElementById("runBlockly").disabled = false;
        document.getElementById("showCode").disabled = false;
        document.getElementById("checkCode").disabled = false;
        document.getElementById("runElGreco").disabled = false;
        $('#BlocklyModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
    else {
        window.cancel = 1;
        workspace.highlightBlock(null);
        document.getElementById("BlocklyStepF").disabled = true;
        document.getElementById("BlocklyStepB").disabled = true;
        document.getElementById("StopCodeExec").disabled = false;
        $('.modal.right').find('button#BlocklyStepB').prop('disabled', false);
        $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
        document.getElementById("checkCodeP").disabled = false;
        document.getElementById("runPython").disabled = false;
        document.getElementById("runElGrecoP").disabled = false;
        document.getElementById("runBlockly").disabled = false;
        document.getElementById("showCode").disabled = false;
        document.getElementById("checkCode").disabled = false;
        document.getElementById("runElGreco").disabled = false;
    }
}


function StopCodeExec() {
    window.cancel = 1;
    workspace.highlightBlock(null);
    document.getElementById("BlocklyStepF").disabled = true;
    document.getElementById("BlocklyStepB").disabled = true;
    document.getElementById("StopCodeExec").disabled = true;
    $('.modal.right').find('button#StopCodeExec2').prop('disabled', true);
    $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
    $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
    document.getElementById("checkCodeP").disabled = false;
    document.getElementById("runPython").disabled = false;
    document.getElementById("runElGrecoP").disabled = false;
    document.getElementById("runBlockly").disabled = false;
    document.getElementById("showCode").disabled = false;
    document.getElementById("checkCode").disabled = false;
    document.getElementById("runElGreco").disabled = false;
}

function BlocklyStepF() {
    if (window.currentframe == window.maxframe) {
        window.previousframe = window.currentframe;
        var framenumbercurrent = "frame" + window.maxframe;
        var retrievedframe = sessionStorage.getItem(framenumbercurrent);
        var frameinfo = JSON.parse(retrievedframe);
        workspace.highlightBlock(frameinfo[0]);
        if ($('#BlocklyModal').is(':visible')) {
            document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + "Έφτασες στο τέλος του προγραμμάτος σου!!";
        }
        else {
            $("#BlocklyModal").removeData();
            document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
            document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + "Έφτασες στο τέλος του προγραμμάτος σου!!";
            $("#BlocklyModal").modal();
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
        workspace.highlightBlock(frameinfocur[0]);
        if (window.mode == 'step') {
            if ($('#BlocklyModal').is(':visible')) {
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BlocklyModal").removeData();
                document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                $("#BlocklyModal").modal();
            }
        }
        else if ((window.mode == 'stepEl') && (frameinfopre[1] != frameinfocur[1])) {
            var regex4 = /(EDUV προχώρα μπροστά για \d+ δευτερόλεπτα!!!)|(EDUV προχώρα πίσω για \d+ δευτερόλεπτα!!!)|(EDUV αναδύσου για \d+ δευτερόλεπτα!!!)|(EDUV καταδύσου για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε αριστερά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα πάνω για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα κάτω για \d+ δευτερόλεπτα!!!)(EDUV κύλισε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV κύλισε αριστερά για \d+ δευτερόλεπτα!!!)/;
            var reglastline = /.*\s*$/;
            var lastline = reglastline.exec(frameinfocur[1]);
            if (regex4.test(lastline)) {
                $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
                $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
                document.getElementById("BlocklyStepF").disabled = true;
                document.getElementById("BlocklyStepB").disabled = true;
                setTimeout(function () {
                    document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                }, 5000);
                setTimeout(function () {
                    document.getElementById("blocklyArea").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    $('.modal.right').find('button#BlocklyStepB').prop('disabled', false);
                    $('.modal.right').find('button#BlocklyStepF').prop('disabled', false);
                    document.getElementById("BlocklyStepF").disabled = false;
                    document.getElementById("BlocklyStepB").disabled = false;
                }, 15000);
                if ($('#BlocklyModal').is(':visible')) {
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                }
                else {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                    $("#BlocklyModal").modal();
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
                       // console.log(textStatus);
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
                            throw new Error("communication with EDUV Lost");
                        }
                    }
                });
            }
            else {
                if ($('#BlocklyModal').is(':visible')) {
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                }
                else {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                    $("#BlocklyModal").modal();
            }
             }
        }
        else {
            if ($('#BlocklyModal').is(':visible')) {
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BlocklyModal").removeData();
                document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                $("#BlocklyModal").modal();
            }
        }
    }
}


function BlocklyStepΒ() {
    if (window.currentframe == 1) {
        window.previousframe = window.currentframe;
        var framenumbercurrent = "frame" +  2;
        var retrievedframe = sessionStorage.getItem(framenumbercurrent);
        var frameinfo = JSON.parse(retrievedframe);
        workspace.highlightBlock(frameinfo[0]);
        if ($('#BlocklyModal').is(':visible')) {
            document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + "Έφτασες στην αρχή του προγραμμάτος σου!!";
        }
        else {
            $("#BlocklyModal").removeData();
            document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
            document.getElementById("BlocklyModalbody2").innerHTML = frameinfo[1] + "Έφτασες στην αρχή του προγραμμάτος σου!!";
            $("#BlocklyModal").modal();
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
        workspace.highlightBlock(frameinfocur[0]);
        if (window.mode == 'step') {
            if ($('#BlocklyModal').is(':visible')) {
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BlocklyModal").removeData();
                document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                $("#BlocklyModal").modal();
            }
        }
        else if ((frameinfocur[2] == 'change')) {
            var regex4 = /(EDUV προχώρα μπροστά για \d+ δευτερόλεπτα!!!)|(EDUV προχώρα πίσω για \d+ δευτερόλεπτα!!!)|(EDUV αναδύσου για \d+ δευτερόλεπτα!!!)|(EDUV καταδύσου για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε αριστερά για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα πάνω για \d+ δευτερόλεπτα!!!)|(EDUV στρίψε προς τα κάτω για \d+ δευτερόλεπτα!!!)(EDUV κύλισε δεξιά για \d+ δευτερόλεπτα!!!)|(EDUV κύλισε αριστερά για \d+ δευτερόλεπτα!!!)/;
            var lastline = reglastline.exec(frameinfocur[1]);
            if (regex4.test(lastline)) {
                $('.modal.right').find('button#BlocklyStepB').prop('disabled', true);
                $('.modal.right').find('button#BlocklyStepF').prop('disabled', true);
                document.getElementById("BlocklyStepF").disabled = true;
                document.getElementById("BlocklyStepB").disabled = true;
                setTimeout(function () {
                    document.getElementById("block3").scrollIntoView({ block: 'start', behavior: 'smooth' });
                }, 5000);
                setTimeout(function () {
                    document.getElementById("blocklyArea").scrollIntoView({ block: 'start', behavior: 'smooth' });
                    $('.modal.right').find('button#BlocklyStepB').prop('disabled', false);
                    $('.modal.right').find('button#BlocklyStepF').prop('disabled', false);
                    document.getElementById("BlocklyStepF").disabled = false;
                    document.getElementById("BlocklyStepB").disabled = false;
                }, 15000);
                if ($('#BlocklyModal').is(':visible')) {
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                }
                else {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο EDUV λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1] + '\nΘα τρέξω το συγκεκριμμένο βήμα του κώδικα σου σε 10 δευτερολέπτα!!!\nΣκρόλαρε στο παράθυρο μου να με δεις!!';
                    $("#BlocklyModal").modal();
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
                            throw new Error("communication with EDUV Lost");
                        }
                    }
                });
            }
            else {
                if ($('#BlocklyModal').is(':visible')) {
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                }
                else {
                    $("#BlocklyModal").removeData();
                    document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                    document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                    $("#BlocklyModal").modal();
                }
            }
        }
        else {
            if ($('#BlocklyModal').is(':visible')) {
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
            }
            else {
                $("#BlocklyModal").removeData();
                document.getElementById("BlocklyModalbody1").innerHTML = "Ο El Greco λέει:\n Ο κώδικας σου έχει το εξής αποτέλεσμα:";
                document.getElementById("BlocklyModalbody2").innerHTML = frameinfocur[1];
                $("#BlocklyModal").modal();
            }
        }
    }
}

function CheckRunPythonCodebl() {
    Blockly.JavaScript.addReservedWords('exit');
    var outputArea = document.getElementById('codeArea2');
    myInterpreter = null;
    var runner;
    //var stepButton = document.getElementById('stepButton');
    function initApi(interpreter, globalObject) {
        // Add an API function for the alert() block, generated for 'text_print' blocks.
         var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα μπροστά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Forward', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV προχώρα πίσω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Backwards', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV αναδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Emerge', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV καταδύσου για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Dive', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Left', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα πάνω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Up', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV στρίψε προς τα κάτω για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Turn_Down', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε δεξιά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Right', interpreter.createNativeFunction(wrapper));

        var wrapper = function (inputs) {
            inputs = inputs ? inputs.toString() : '';
            outputArea.value = outputArea.value + '\nEDUV κύλισε αριστερά για ' + inputs + ' δευτερόλεπτα!!!';
        };
        interpreter.setProperty(globalObject, 'Roll_Left', interpreter.createNativeFunction(wrapper));


        // Add an API function for the prompt() block.
        var wrapper = function (text) {
            return interpreter.createPrimitive(prompt(text));
        };
        interpreter.setProperty(globalObject, 'prompt',
            interpreter.createNativeFunction(wrapper));

        // Add an API function for highlighting blocks.
        var wrapper = function (id) {
            id = String(id || '');
            return interpreter.createPrimitive(highlightBlock(id));
        };
        interpreter.setProperty(globalObject, 'highlightBlock',
            interpreter.createNativeFunction(wrapper));
    }

    var highlightPause = false;
    var latestCode = '';

    function highlightBlock(id) {
        workspace.highlightBlock(null);
        highlightPause = true;
    }

    function resetStepUi(clearOutput) {
        workspace.highlightBlock(null);
        highlightPause = false;
        if (clearOutput) {
            outputArea.value = '';
        }
    }

    function generateCodeAndLoadIntoInterpreter() {
        // Generate JavaScript code and parse it.
        window.orsrc=Blockly.Python.workspaceToCode(workspace);
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        Blockly.JavaScript.addReservedWords('highlightBlock');
        Blockly.JavaScript.INFINITE_loop_TRAP = 'if(--window.loopTrap == 0) throw "Infinite loop";\n';
        latestCode = "window.loopTrap = 1001;\n" + Blockly.JavaScript.workspaceToCode(workspace);
        resetStepUi(true);
    }

    function resetInterpreter() {
        myInterpreter = null;
        if (runner) {
            clearTimeout(runner);
            runner = null;
        }
    }

    function runCode() {
        if (!myInterpreter) {
            myInterpreter = new Interpreter(latestCode, initApi);
            resetStepUi(true);
            setTimeout(function () {
                highlightPause = false;
                runner = function () {
                    if (myInterpreter) {
                        var hasMore = myInterpreter.run();
                        if (hasMore) {
                            setTimeout(runner, 10);
                        }
                        else {
                            if (document.getElementById('codeArea2').value === '') {
                                $('#GifModal').modal('hide');
                                $('#OutputModal').removeData();
                                document.getElementById('OutputModalBtnResult2').style.display = 'none';
                                document.getElementById('OutputModalbody1').innerHTML = '';
                                document.getElementById('OutputModalbody1').innerHTML = 'Ο EDUV λέει:\nΟ κώδικας σου δεν έχει κανένα αποτέλεσμα!<br>Ξαναπροσπάθησε και διάβασε το Tutorial!';
                                document.getElementById('OutputModalbody2').innerHTML = '';
                                $('#OutputModal').modal();
                            }
                            else {
                                checkCode(window.orsrc, document.getElementById('codeArea2').value);
                            }
                            resetInterpreter();
                            resetStepUi(false);
                        }
                    }
                    return;
                };
                runner();
            }, 1);
        }
    }
    // Load the interpreter now, and upon future changes.
    $('#GifModal').modal("show");
    generateCodeAndLoadIntoInterpreter();
    setTimeout(function () { $('#GifModal').on('shown.bs.modal', runCode()); }, 500);
    
}