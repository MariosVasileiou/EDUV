<?php
session_start();
?>

<!DOCTYPE HTML>
<html class="loading">
	<head>
	<meta charset="utf-8">	<!--Για σώστη αναπαράσταση των χαρακτήρων-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">	<!-- Για συμβατότητα της ιστοσελίδας με παλιούς ΙΕ της Microsoft-->
	<title>EDUV Platform</title>	<!--Τίτλος Σελίδας-->
	<meta name="viewport" content="width=device-width, initial-scale=1">	<!--Για να εμφανίζεται σωστά σε όλες τις συσκεύες-->
	<meta name="description" content="Robot learning website">	<!--Περιγραφή ιστοσελίδας-->
	<meta name="keywords" content="ElGreco,Robot aim in learning">	<!--Λέξεις κλειδιά για ανάζητηση από μηχανές αναζήτησης-->
	<meta name="author" content="Aegean Robotics Team">	<!--Ο δημιουργός της σελίδας-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <!--CSS framework για την ιστοσελίδα-->
	<meta property="og:title" content=""/> <!--Τα og χρησιμοποιούνται από αλλές ιστοσελίδες για την παρουσίαση της ιστοσελιδας π.χ. όταν κάνεις share στο fb-->
	<meta property="og:image" content=""/> <!--Δεν επηρέαζουν την λειτουργικότητα της ιστοσελίδας-->
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" /> <!--Παρόμοια σαν τα og για twitter.Δεν επηρέαζουν την λειτουργικότητα της ιστοσελίδας-->
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />
	
	<script src="js/acorn.js"></script>
    <script src="js/interpreter.js"></script>
	<script src="js/blockly_compressed.js"></script>	<!--Τα απαραίτητα αρχεία για να γίνει το inject του blockly-->
	<script src="js/javascript_compressed.js"></script>
	<script src="js/blocks_compressed.js"></script>
	<script src="js/python_compressed.js"></script>
	<script src="msg/js/en.js"></script>
	

	<!-- Modernizr JS εντοπίζει της δυνατότητες του browser του επισκέπτη της σελίδας -->
									<!--jQuery πρέπει να δηλωθεί σε script-->
	

	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet"> <!-- Για να χρησιμοποιεί η ιστοσελίδα τους χαρακτήρες Sans -->
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400" rel="stylesheet">	<!-- Για να χρησιμοποιεί η ιστοσελίδα τους χαρακτήρες Roboto -->
	<!-- Τα παρακάτω είναι για τα διάφορα εικόνιδια της ιστοσελίδας-->
	<!-- Animate.css για animation χωρίς flash-->
	<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts για icons-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Bootstrap  για το CSS framework χρειάζεται;-->
	<link rel="stylesheet" href="css/bootstrap.css">
	<!-- Magnific Popup για popup menu-->
	<link rel="stylesheet" href="css/magnific-popup.css">
	<!-- Owl Carousel για owl carousel -->
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	<!-- Flexslider για slider  -->
	<link rel="stylesheet" href="css/flexslider.css">
	<!-- Pricing  για pricing table-->
	<link rel="stylesheet" href="css/pricing.css">
	<!-- Theme style για το θέμα -->
	<link rel="stylesheet" href="css/style.css">

	
	<script src="js/modernizr-2.6.2.min.js"></script>
    <script src="js/jquery.js"></script>
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>	
	<script src="js/preparation.js"></script>
	<script src="js/El Greco platform.js"></script>
	<script src="js/brythonjs.js"></script>
	<script src="js/blocklyjs.js"></script>


	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Stellar Parallax -->
	<script src="js/jquery.stellar.min.js"></script>
	<!-- Carousel -->
	<script src="js/owl.carousel.min.js"></script>
	<!-- Flexslider -->
	<script src="js/jquery.flexslider-min.js"></script>
	<!-- countTo -->
	<script src="js/jquery.countTo.js"></script>
	
	<!-- Count Down -->
	<script src="js/simplyCountdown.js"></script>
	


	
	<script src='js/sldp-v2.17.1.min.js' type='text/javascript'></script>
	
    

	<link href='http://fonts.googleapis.com/css?family=Raleway:500,600,700,100,800,900,400,200,300' rel='stylesheet' type='text/css'> <!-- Για να χρησιμοποιεί η ιστοσελίδα τους χαρακτήρες raleway -->
	<link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css'>	<!-- Για να χρησιμοποιεί η ιστοσελίδα τους χαρακτήρες raleway -->
	
	

	<!--CSS framework για την ιστοσελίδα πάλι χρειάζεται;-->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>	<!--jQuery πρέπει να δηλωθεί σε script-->
	
	
	<script>
	</script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<style>
	html {
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
	}
	html, body {
		/* For the loading indicator to be vertically centered ensure */
		/* the html and body elements take up the full viewport */
		min-height: 100%;
	}
	html.loading {
		/* Replace #333 with the background-color of your choice */
		/* Replace loading.gif with the loading image of your choice */
		background-color:#333;
		background: url('images/animation.gif') no-repeat 50% 30%, url('images/introtext.gif') no-repeat 50% 20%;
		/* Ensures that the transition only runs in one direction */
		-webkit-transition: background-color 0;
		transition: background-color 0;
	}
	body {
		-webkit-transition: opacity 1s ease-in;
		transition: opacity 1s ease-in;
	}
	html.loading body {
		/* Make the contents of the body opaque during loading */
		opacity: 0;

		/* Ensures that the transition only runs in one direction */
		-webkit-transition: opacity 0;
		transition: opacity 0;
	}
	#codeArea{
		height: 80vh;
		position: relative;
		width: 100%;
		float: left;
	}
	#blocklyArea {
		display: inline-block;
		position: relative;
		width: 100%;
		height: 80vh;
		float: left;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
		border-style: double;
	}
	#blocklyDiv {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
		border-style: double;
	}
	#block2 {
		display: inline-block;
		position: relative;
		width: 100%;
	}
	#buttonarea2{
		display: inline-block;
		position: relative;
	}
	#buttonarea3{
		display: inline-block;
		position: relative;
	}
	#buttonarea4{
		display: inline-block;
		position: relative;
		
	}	
	
	#block3{
		border-style: double;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
		display: block;
	}
	#my-video {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width:35%;
		  
	}
	#py-console{
	display: none;
		
	}
	#blocklyDiv2{
	display: none;
		
	}
	#codeArea2{
	white-space:pre-wrap;
	display: none;	
	}
	#codeArea3{
	display: none;
	}
	
	#runElGrecoCodeArea{
	display: none;
	}
	
	#myBtn {
	display: none;
	position: fixed;
	bottom: 20px;
	right: 30px;
	z-index: 99;
	font-size: 18px;
	border: none;
	outline: none;
	background-color: red;
	color: white;
	cursor: pointer;
	padding: 15px;
	border-radius: 4px;
	}
	#myBtn:hover {
	background-color: #555;
	}
	
	#runBlockly {
	background-color: #f1f1f1 !important;
    background-image: url( 'images/play.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}

	#BlocklyStepF{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/forward.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#BlocklyStepB{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/backwards.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#StopCodeExec{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/off.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#runElGreco{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/EDUVButton.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	display: inline-block;
	}
	#checkCode{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/check.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	display: none;
	}
	#showCode{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/eye.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#runPython {
	background-color: #f1f1f1 !important;
    background-image: url( 'images/play.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}

	#PythonStepF{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/forward.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#PythonStepB{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/backwards.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#StopCodeExecP{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/off.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#StopCodeExecP2{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/off.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#StopCodeExec2{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/off.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	}
	#runElGrecoP{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/EDUVButton.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	display: inline-block;
	}
	#checkCodeP{
	background-color: #f1f1f1 !important;
    background-image: url( 'images/check.png' );
    background-size: 50px 52px;
    height: 50px;  
    width: 52px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)!important;
	display: none;
	}
	.styled-background { background-color: #D2B4DE ; }
	.modal.left .modal-dialog,
	.modal.right .modal-dialog {
		position: fixed;
		margin: auto;
		width: 320px;
		height: 100%;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
	}

	.modal.left .modal-content,
	.modal.right .modal-content {
		height: 100%;
		overflow-y: auto;
	}
	
	.modal.left .modal-body,
	.modal.right .modal-body {
		padding: 15px 15px 80px;
	}

	/*Left*/
		.modal.left.fade .modal-dialog{
			left: -320px;
			-webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
			   -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
				 -o-transition: opacity 0.3s linear, left 0.3s ease-out;
					transition: opacity 0.3s linear, left 0.3s ease-out;
		}
	
		.modal.left.fade.in .modal-dialog{
			left: 0;
		}
        
	/*Right*/
		.modal.right.fade .modal-dialog {
			right: -320px;
			-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
			   -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
				 -o-transition: opacity 0.3s linear, right 0.3s ease-out;
					transition: opacity 0.3s linear, right 0.3s ease-out;
		}
	
		.modal.right.fade.in .modal-dialog {
			right: 0;
		}

	/* ----- MODAL STYLE ----- */
		.modal-content {
			border-radius: 0;
			border: none;
		}

		.modal-header {
			border-bottom-color: #EEEEEE;
			background-color: #FAFAFA;
		}
	</style>

	<link rel="stylesheet" href="css/slider.css">
	<link rel="stylesheet" href="css/codemirror.css">
	<script src="js/codemirror.js"></script>
	<script src="js/matchbrackets.js"></script>
	<script src="js/python.js"></script>
		
		
	<script src="js/brython.js"></script>
	<script src="js/brython_stdlib.js"></script>
	<script type="text/python3" id="tests_editor">
		from browser import document as doc2, window, alert
		from browser import html
		import editor as editor_minas
		def mybindrun(ev):
			window.mode = 'simple'
			editor_minas.prerun()
		def mybindstep(ev):
			window.mode = 'simple'
			editor_minas.prestep()
		def mybindrunel(ev):
			window.mode = 'ElGreco'
			editor_minas.prerun()
		def mybindstepel(ev):
			window.mode = 'ElGreco'
			editor_minas.prestep()
		def PythonCheck(ev):
			if ev.target.checked:
				window.stepenabled=1
				doc2['runPython'].unbind('click', mybindrun)
				doc2['runPython'].bind('click', mybindstep)
				doc2['runElGrecoP'].unbind('click', mybindrunel)
				doc2['runElGrecoP'].bind('click', mybindstepel)
			else:
				window.stepenabled=0
				doc2['runPython'].unbind('click', mybindstep)
				doc2['runPython'].bind('click', mybindrun)
				doc2['runElGrecoP'].unbind('click', mybindstepel)
				doc2['runElGrecoP'].bind('click', mybindrunel)	
		doc2['PythonCheck'].bind('change',PythonCheck)
		doc2['runPython'].bind('click', mybindrun)
		doc2['runElGrecoP'].bind('click', mybindrunel)
	</script>
	<script>
	function start(){
		brython({debug:1});
		$( "html" ).removeClass( "loading" );
		setTimeout(function() { 
			try{
				document.querySelector('.sldp_volume_btn').click();
			}
            catch{
				console.log("no booking");
			}  
            }, 10000)
		/*setTimeout(function() { 
              $( "html" ).removeClass( "loading" );
            }, 10000);*/
	}
	</script>
	
	</head>

	<body onload="start()" onunload="saveblocklyblocks()">

		
	<div class="container-fluid">
		<div id="blocklyDiv2" style="height: 480px; width: 600px;"></div>
		<?php include 'includes\header.php';?>
		<div class="row">
		<div class="col-12 text-center" style="color: #4F3344; font-size: 16pt;" id = "headerplattxt">
		<p>Welcomw to EDUV Platform</p>
		</div>
		</div>
		<div class="row">
		<div id="buttonarea3" class="col-1" >
		<label class="custom-control custom-checkbox" data-toggle="tooltip" data-placement="bottom" title="Βηματική Εκτέλεση Κώδικα Blockly">
			<input type="checkbox" class="custom-control-input" id = "BlocklyCheck">
			<span class="custom-control-indicator"></span>
		</label>   
		</div>
		<div id="buttonarea2" class="col-6" >
			<button onclick="prestepselection()" class="btn btn-secondary btn-sm bg-success" id="runBlockly" data-toggle="tooltip" data-placement="top" title="Εκτέλεση του Κώδικα Blockly"></button>
			<button onclick="BlocklyStepF()" class="btn btn-secondary btn-sm bg-success" id="BlocklyStepF" data-toggle="tooltip" data-placement="top" title="Επόμενο Βήμα του Κώδικα Blockly" disabled></button>
			<button onclick="BlocklyStepΒ()" class="btn btn-secondary btn-sm bg-success" id="BlocklyStepB" data-toggle="tooltip" data-placement="top" title="Προηγούμενο Βήμα του Κώδικα Blockly" disabled></button>
			<button onclick="StopCodeExec()" class="btn btn-secondary btn-sm bg-success" id="StopCodeExec" data-toggle="tooltip" data-placement="top" title="Σταμάτημα της εκτέλεσης του Κώδικα Blockly" disabled></button>
			<button onclick="showCode()" class="btn btn-secondary btn-sm bg-success" id="showCode" data-toggle="tooltip" data-placement="top" title="Μετάφραση του κώδικα Blockly σε Python"></button>
			<button onclick="checkCodeOutput()" class="btn btn-secondary  btn-sm bg-success" id="checkCode" data-toggle="tooltip" data-placement="top" title="Δες αν ο κώδικας Blockly είναι σωστός"></button>
			<button onclick="prestepselectionel()" class="btn btn-secondary btn-sm bg-success" id="runElGreco" data-toggle="tooltip" data-placement="top" title="Τρέξε τον κώδικα Blockly στον El Greco"></button>
		</div>
		<div id="buttonarea3" class="col-1" >
		<label class="custom-control custom-checkbox" data-toggle="tooltip" data-placement="bottom" title="Βηματική Εκτέλεση Κώδικα Python">
			<input type="checkbox" class="custom-control-input" id = "PythonCheck">
			<span class="custom-control-indicator"></span>
		</label>   
		</div>
		<div id="buttonarea4" class="col-4">
			<button class="btn btn-secondary btn-sm bg-success" id="runPython" data-toggle="tooltip" data-placement="top" title="Εκτέλεση του Κώδικα Python"></button>
			<button onclick="PythonStepF()" class="btn btn-secondary btn-sm bg-success" id="PythonStepF" data-toggle="tooltip" data-placement="top" title="Επόμενο Βήμα του Κώδικα Python" disabled></button>
			<button onclick="PythonStepΒ()" class="btn btn-secondary btn-sm bg-success" id="PythonStepB" data-toggle="tooltip" data-placement="top" title="Προηγούμενο Βήμα του Κώδικα Python" disabled></button>
			<button onclick="StopCodeExecP3()" class="btn btn-secondary btn-sm bg-success" id="StopCodeExecP" data-toggle="tooltip" data-placement="top" title="Σταμάτημα της εκτέλεσης του Κώδικα Python" disabled></button>
			<button onclick="checkCodeOutputP()" class="btn btn-secondary  btn-sm bg-success" id="checkCodeP" data-toggle="tooltip" data-placement="top" title="Δες αν ο κώδικας Python είναι σωστός"></button>
			<button class="btn btn-secondary btn-sm bg-success" id="runElGrecoP" data-toggle="tooltip" data-placement="top" title="Τρέξε τον κώδικα Python στον El Greco"></button>
		</div>
		</div>
		<div class="row">
		<div id="blocklyArea" class="col-7"></div>	
		<div id="blocklyDiv" class="col-7"></div>
		<div id="block2" class="col-5">
		<textarea id="codeArea"></textarea>
		<textarea id="py-console" autocomplete="off" rows="20" cols="80" ></textarea>
		<textarea id="codeArea2" class="col-8" placeholder="code2 run" rows="20" cols="40"></textarea>
		<textarea id="codeArea3" class="col-8" placeholder="code3 check" rows="20" cols="40"></textarea>
		</div>
		</div>
		<div class="row">
		<div id="block3" class="col-12 my-video" tabindex="0">
		<div id="my-video"></div>
<script>
        document.addEventListener('DOMContentLoaded', initPlayer);
        var sldpPlayer;
        function initPlayer() {
            sldpPlayer = SLDP.init({
                container: 'my-video',
                stream_url: "ws://195.251.166.47:8081/Live/ElGreco",
                autoplay: true,
                muted: false,
                controls: false,
                height: 450,
                width: 640
            });
        };

        function removePlayer() {
            sldpPlayer.destroy();
        }
    </script>
		</div>
	
		
		</div>
		<?php include 'includes\footer.php';?>		
	</div>
	
	
		
	
	<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
		<category name="Logic" colour="#5b80a5">
		<block type="controls_if"></block>
		<block type="logic_compare">
			<field name="OP">EQ</field>
		</block>
		<block type="logic_operation">
			<field name="OP">AND</field>
		</block>
		<block type="logic_negate"></block>
		<block type="logic_boolean">
			<field name="BOOL">TRUE</field>
		</block>
		<block type="logic_null"></block>
		<block type="logic_ternary"></block>
		</category>
		<category name="Lopps" colour="#5ba55b">
		<block type="controls_repeat_ext">
			<value name="TIMES">
			<shadow type="math_number">
				<field name="NUM">10</field>
			</shadow>
			</value>
		</block>
		<block type="controls_whileUntil">
			<field name="MODE">WHILE</field>
		</block>
		<block type="controls_for">
			<field name="VAR" id="Pm4KjbyY]1.XhsbPn9Z|">i</field>
			<value name="FROM">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
			<value name="TO">
			<shadow type="math_number">
				<field name="NUM">10</field>
			</shadow>
			</value>
			<value name="BY">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
		</block>
		<block type="controls_forEach">
			<field name="VAR" id="7qo#1fPGkSaq/IgMeuyi">j</field>
		</block>
		<block type="controls_flow_statements">
			<field name="FLOW">BREAK</field>
		</block>
		</category>
		<category name="Math" colour="#9fa55b">
		<block type="math_number">
			<field name="NUM">0</field>
		</block>
		<block type="math_arithmetic">
			<field name="OP">ADD</field>
			<value name="A">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
			<value name="B">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
		</block>
		<block type="math_single">
			<field name="OP">ROOT</field>
			<value name="NUM">
			<shadow type="math_number">
				<field name="NUM">9</field>
			</shadow>
			</value>
		</block>
		<block type="math_trig">
			<field name="OP">SIN</field>
			<value name="NUM">
			<shadow type="math_number">
				<field name="NUM">45</field>
			</shadow>
			</value>
		</block>
		<block type="math_constant">
			<field name="CONSTANT">PI</field>
		</block>
		<block type="math_number_property">
			<mutation divisor_input="false"></mutation>
			<field name="PROPERTY">EVEN</field>
			<value name="NUMBER_TO_CHECK">
			<shadow type="math_number">
				<field name="NUM">0</field>
			</shadow>
			</value>
		</block>
		<block type="math_round">
			<field name="OP">ROUND</field>
			<value name="NUM">
			<shadow type="math_number">
				<field name="NUM">3.1</field>
			</shadow>
			</value>
		</block>
		<block type="math_on_list">
			<mutation op="SUM"></mutation>
			<field name="OP">SUM</field>
		</block>
		<block type="math_modulo">
			<value name="DIVIDEND">
			<shadow type="math_number">
				<field name="NUM">64</field>
			</shadow>
			</value>
			<value name="DIVISOR">
			<shadow type="math_number">
				<field name="NUM">10</field>
			</shadow>
			</value>
		</block>
		<block type="math_constrain">
			<value name="VALUE">
			<shadow type="math_number">
				<field name="NUM">50</field>
			</shadow>
			</value>
			<value name="LOW">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
			<value name="HIGH">
			<shadow type="math_number">
				<field name="NUM">100</field>
			</shadow>
			</value>
		</block>
		<block type="math_random_int">
			<value name="FROM">
			<shadow type="math_number">
				<field name="NUM">1</field>
			</shadow>
			</value>
			<value name="TO">
			<shadow type="math_number">
				<field name="NUM">100</field>
			</shadow>
			</value>
		</block>
		<block type="math_random_float"></block>
		</category>
			<category name="Text" colour="#5ba58c">
			<block type="text">
				<field name="TEXT"></field>
			</block>
			<block type="text_join">
				<mutation items="2"></mutation>
			</block>
			<block type="text_append">
				<field name="VAR" id="gs;CE-6:0JgB-N/+dcsg">item</field>
				<value name="TEXT">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
				</value>
			</block>
			<block type="text_length">
				<value name="VALUE">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			<block type="text_isEmpty">
				<value name="VALUE">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
				</value>
			</block>
			<block type="text_indexOf">
				<field name="END">FIRST</field>
				<value name="VALUE">
				<block type="variables_get">
					<field name="VAR" id="}1D+yP4d%w]T;kcaDq!Z">text</field>
				</block>
				</value>
				<value name="FIND">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			<block type="text_charAt">
				<mutation at="true"></mutation>
				<field name="WHERE">FROM_START</field>
				<value name="VALUE">
				<block type="variables_get">
					<field name="VAR" id="}1D+yP4d%w]T;kcaDq!Z">text</field>
				</block>
				</value>
			</block>
			<block type="text_getSubstring">
				<mutation at1="true" at2="true"></mutation>
				<field name="WHERE1">FROM_START</field>
				<field name="WHERE2">FROM_START</field>
				<value name="STRING">
				<block type="variables_get">
					<field name="VAR" id="}1D+yP4d%w]T;kcaDq!Z">text</field>
				</block>
				</value>
			</block>
			<block type="text_changeCase">
				<field name="CASE">UPPERCASE</field>
				<value name="TEXT">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			<block type="text_trim">
				<field name="MODE">BOTH</field>
				<value name="TEXT">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			<block type="text_print">
				<value name="TEXT">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			<block type="text_prompt_ext">
				<mutation type="TEXT"/>
				<field name="TYPE">TEXT</field>
				<value name="TEXT">
				<shadow type="text">
					<field name="TEXT">abc</field>
				</shadow>
				</value>
			</block>
			</category>
			<category name="Lists" colour="#745ba5">
			<block type="lists_create_with">
				<mutation items="0"></mutation>
			</block>
			<block type="lists_create_with">
				<mutation items="3"></mutation>
			</block>
			<block type="lists_repeat">
				<value name="NUM">
				<shadow type="math_number">
					<field name="NUM">5</field>
				</shadow>
				</value>
			</block>
			<block type="lists_length"></block>
			<block type="lists_isEmpty"></block>
			<block type="lists_indexOf">
				<field name="END">FIRST</field>
				<value name="VALUE">
				<block type="variables_get">
					<field name="VAR" id=";}ndj_9!=2rNh6o1D}eE">list</field>
				</block>
				</value>
			</block>
			<block type="lists_getIndex">
				<mutation statement="false" at="true"></mutation>
				<field name="MODE">GET</field>
				<field name="WHERE">FROM_START</field>
				<value name="VALUE">
				<block type="variables_get">
					<field name="VAR" id=";}ndj_9!=2rNh6o1D}eE">list</field>
				</block>
				</value>
			</block>
			<block type="lists_setIndex">
				<mutation at="true"></mutation>
				<field name="MODE">SET</field>
				<field name="WHERE">FROM_START</field>
				<value name="LIST">
				<block type="variables_get">
					<field name="VAR" id=";}ndj_9!=2rNh6o1D}eE">list</field>
				</block>
				</value>
			</block>
			<block type="lists_getSublist">
				<mutation at1="true" at2="true"></mutation>
				<field name="WHERE1">FROM_START</field>
				<field name="WHERE2">FROM_START</field>
				<value name="LIST">
				<block type="variables_get">
					<field name="VAR" id=";}ndj_9!=2rNh6o1D}eE">list</field>
				</block>
				</value>
			</block>
			<block type="lists_split">
				<mutation mode="SPLIT"></mutation>
				<field name="MODE">SPLIT</field>
				<value name="DELIM">
				<shadow type="text">
					<field name="TEXT">,</field>
				</shadow>
				</value>
			</block>
			<block type="lists_sort">
				<field name="TYPE">NUMERIC</field>
				<field name="DIRECTION">1</field>
			</block>
			</category>
			<category name="Color" colour="#a5745b">
			<block type="colour_picker">
				<field name="COLOUR">#ff0000</field>
			</block>
			<block type="colour_random"></block>
			<block type="colour_rgb">
				<value name="RED">
				<shadow type="math_number">
					<field name="NUM">100</field>
				</shadow>
				</value>
				<value name="GREEN">
				<shadow type="math_number">
					<field name="NUM">50</field>
				</shadow>
				</value>
				<value name="BLUE">
				<shadow type="math_number">
					<field name="NUM">0</field>
				</shadow>
				</value>
			</block>
			<block type="colour_blend">
				<value name="COLOUR1">
				<shadow type="colour_picker">
					<field name="COLOUR">#ff0000</field>
				</shadow>
				</value>
				<value name="COLOUR2">
				<shadow type="colour_picker">
					<field name="COLOUR">#3333ff</field>
				</shadow>
				</value>
				<value name="RATIO">
				<shadow type="math_number">
					<field name="NUM">0.5</field>
				</shadow>
				</value>
			</block>
			</category>
			<sep></sep>
			<category name="Variables" colour="#a55b80" custom="VARIABLE"></category>
			<category name="Functions" colour="#995ba5" custom="PROCEDURE"></category>
			<sep></sep>
			<category name="EDUV Movement" colour="#a55b8c">
				<block type="Forward"></block>
				<block type="Backwards"></block>
				<block type="Emerge"></block>
				<block type="Dive"></block>
				<block type="Turn_Right"></block>
				<block type="Turn_Left"></block>
				<block type="Turn_Up"></block>
				<block type="Turn_Down"></block>
				<block type="Roll_Right"></block>
				<block type="Roll_Left"></block>
			</category>
				  
				  
	</xml>
	<script>
	document.getElementById("codeArea").placeholder = "Write your Python code here...";
	document.getElementById("headerplattxt").innerHTML = "<span style='color:#bf4e4e; font-size: 24pt;'>Welcome to EDUV Platform!!</span>";
	</script>
	<script>
	var toolbox = document.getElementById("toolbox");

	var options = {
		toolbox: toolbox,
		collapse: true,
		comments: true,
		disable: true,
		maxBlocks: Infinity,
		trashcan: true,
		horizontalLayout: false,
		toolboxPosition: 'start',
		css: true,
		media: 'https://blockly-demo.appspot.com/static/media/',
		rtl: false,
		scrollbars: true,
		sounds: true,
		oneBasedIndex: true,
		grid: {
			spacing: 20,
			length: 1,
			colour: '#888',
			snap: true
		},
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2
		}
	};
		var blocklyArea = document.getElementById('blocklyArea');
		var blocklyDiv = document.getElementById('blocklyDiv');
		var blocklyDiv2 = document.getElementById('blocklyDiv2')
		var workspace = Blockly.inject('blocklyDiv', options);
		var workspace2 = Blockly.inject('blocklyDiv2',options);
		var onresize = function(e) {
		// Compute the absolute coordinates and dimensions of blocklyArea.
		var element = blocklyArea;
		var x = 0;
		var y = 0;
		do {
			x += element.offsetLeft;
			y += element.offsetTop;
			element = element.offsetParent;
		} while (element);
		// Position blocklyDiv over blocklyArea.
		blocklyDiv.style.left = x + 'px';
		blocklyDiv.style.top = y + 'px';
		blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
		blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
		Blockly.svgResize(workspace);
		};
		window.addEventListener('resize', onresize, false);
		onresize();
		Blockly.svgResize(workspace);  
		
	</script>
	<script>
		Blockly.Blocks['Forward'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Forward')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Forward'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Forward import Forward\nForward('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Forward'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Forward(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Backwards'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Backwards')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Backwards'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Backwards import Backwards\nBackwards('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Backwards'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Backwards(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Emerge'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Emerge')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Emerge'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Emerge import Emerge\nEmerge('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Emerge'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Emerge(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Dive'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Dive')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Dive'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Dive import Dive\nDive('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Dive'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Dive(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Turn_Right'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Turn_Right')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Turn_Right'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Turn_Right import Turn_Right\nTurn_Right('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Turn_Right'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Turn_Right(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Turn_Left'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Turn_Left')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Turn_Left'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Turn_Left import Turn_Left\nTurn_Left('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Turn_Left'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Turn_Left(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Turn_Up'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Turn_Up')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Turn_Up'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Turn_Up import Turn_Up\nTurn_Up('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Turn_Up'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Turn_Up(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Turn_Down'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Turn_Down')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Turn_Down'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Turn_Down import Turn_Down\nTurn_Down('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Turn_Down'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Turn_Down(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Roll_Right'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Roll_Right')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Roll_Right'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Roll_Right import Roll_Right\nRoll_Right('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Roll_Right'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Roll_Right(' + msg + ');\n';
			return code;
		};

		Blockly.Blocks['Roll_Left'] = {
			init: function() {
				this.appendDummyInput()
				.appendField('Roll_Left')
				.appendField('For:')
				.appendField(new Blockly.FieldNumber(2, 1, 10), 'seconds')
				.appendField('Seconds');
				this.setPreviousStatement(true); 
				this.setNextStatement(true);
				this.setOutput(false);
				this.setColour(260);
			}
		};
		Blockly.Python['Roll_Left'] = function(block) {
			var var1 = block.getFieldValue('seconds');
			var code = 'from Roll_Left import Roll_Left\nRoll_Left('+var1+')\n';
			return code;
		};
		Blockly.JavaScript['Roll_Left'] = function(block) {
			var msg = block.getFieldValue('seconds');
			var code = 'Roll_Left(' + msg + ');\n';
			return code;
		};
		</script>
		<!--<script src="js/checkcode.js"></script>-->
		<script>
			window.editor2 = CodeMirror.fromTextArea(document.getElementById("codeArea"), {
				mode: {name: "python",
						version: 3,
						singleLineStringErrors: false},
				lineNumbers: true,
				indentUnit: 4,
				matchBrackets: true,
				viewportMargin: Infinity
				});		
		</script>

		<div class="modal fade in" id="TimerModal" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header" style="padding-bottom: 0px;">
						<h4 class="modal-title"><img src="./images/logo.png" style="width:40%;"></h4>
					</div>
					<div class="modal-body" id="TimerModalbody1div">
						<h3 id="TimerModalbody1" style="text-align: center;white-space: pre-wrap;color:#bf4e4e;margin:0;" ></h3>
					</div>
					<div class="modal-body" id="TimerModalbody2div">
						<h3 id="TimerModalbody2" style="text-align: center;white-space: pre-wrap;color:#bf4e4e;margin:0;"></h3>
					</div>
					<div class="modal-footer">
						<h4  class="modal-title" style="text-align: center;"><img id="TimerModalPic" src="" style="width:40%;"></h4>
						<button type="button" class="btn btn-default" style="background-color:#8BCA9B;" onclick="hideModal('TimerModal')" id="TimerModalBtnResult"><id="TimerModalBtntxt">OK!</></button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade in" id="BlocksModal" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header" style="padding-bottom: 0px;">
							<h4 class="modal-title"><img src="./images/logo.png" style="width:40%;"></h4>
						</div>
						<div class="modal-body" id="BlocksModalbody1div">
							<h3 id="BlocksModalbody1" style="text-align: center;white-space: pre-wrap;color:#bf4e4e;margin:0;" ></h3>
						</div>
						<div class="modal-footer">
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B;" value="NAI!" id="BlocksModalBtnResult1">
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B;" value="OXI!" id="BlocksModalBtnResult2">
						</div>
					</div>
				</div>
		</div>
		<div class="modal fade in" id="OutputModal" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header" style="padding-bottom: 0px; text: center">
							<h4 class="modal-title"><img src="./images/elgreco_map.png" style="width:80%;"></h4>
						</div>
						<div class="modal-body" id="OutputModalbody1div">
							<h3 id="OutputModalbody1" style="text-align: center;color:#bf4e4e;margin:0;white-space: pre-wrap;" ></h3>
						</div>
						<div class="modal-body" id="OutputModalbody2div">
							<h3 id="OutputModalbody2" style="text-align: center;white-space: pre-wrap;  color:#bf4e4e;margin:0;" ></h3>
						</div>
						<div class="modal-footer" style="padding-bottom: 0px;">
							<h4  class="modal-title" style="text-align: center;"><img id="OutputPic" src="" style="width:40%;"></h4>
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B;" data-dismiss="modal" value="NAI!" id="OutputModalBtnResult1">
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B; display: none;" value="" id="OutputModalBtnResult2">
						</div>
					</div>
				</div>
		</div>
		<div class="modal fade in" id="FlashModal" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header" style="padding-bottom: 0px;">
							<h4 class="modal-title"><img src="./images/logo.png" style="width:40%;"></h4>
						</div>
						<div class="modal-body">
						<div class="modal-body" id="FlashModalbody1div">
							<h3 id="FlashModalbody1" style="text-align: center;color:#bf4e4e;margin:0;white-space: pre-wrap;" ></h3>
						</div>
						<div class="modal-body" id="FlashModalbody2div">
							<h3 id="FlashModalbody2" style="text-align: center;white-space: pre-wrap;  color:#bf4e4e;margin:0;" ></h3>
						</div>
					</div>
						<div class="modal-footer" style="padding-bottom: 0px;">
							<h4  class="modal-title" style="text-align: center;"><img id="FlashModalPic" src="" style="width:40%;"></h4>
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B;" value="NAI!" id="FlashModalBtnResult1">
							<input class="btn btn-success" type="button" style="background-color:#8BCA9B; display: none;" value="" id="FlashModalBtnResult2">
						</div>
					</div>
				</div>
		</div>
		<div class="modal left fade in" id="BrythonModal" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header" style="padding-bottom: 0px; text: center">
						<h4 class="modal-title"style="position:center;"><img src="./images/elgreco_map.png" style="width:80%;"></h4>
					</div>
					<div class="modal-body">
						<div class="modal-body" id="BrythonModalbody1div">
							<h3 id="BrythonModalbody1" style="text-align: center;color:#bf4e4e;margin:0;white-space: pre-wrap;" ></h3>
						</div>
						<div class="modal-body" id="BrythonModalbody2div">
							<h3 id="BrythonModalbody2" style="text-align: center;white-space: pre-wrap;  color:#bf4e4e;margin:0;" ></h3>
						</div>
					</div>
					<div class="modal-footer">
						<button onclick="PythonStepF()" class="btn btn-secondary btn-sm bg-success mr-auto" id="PythonStepF" data-toggle="tooltip" data-placement="top" title="Επόμενο Βήμα του Κώδικα Python"disabled></button>
						<button onclick="PythonStepΒ()" class="btn btn-secondary btn-sm bg-success mr-auto " id="PythonStepB" data-toggle="tooltip" data-placement="top" title="Προηγούμενο Βήμα του Κώδικα Python"disabled></button>
						<button onclick="StopCodeExecP2()" class="btn btn-secondary btn-sm bg-success mr-auto" id="StopCodeExecP2" data-toggle="tooltip" data-placement="top" title="Σταμάτημα της εκτέλεσης του Κώδικα Python"disabled></button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal right fade in" id="BlocklyModal" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header" style="padding-bottom: 0px; text: center">
						<h4 class="modal-title" style="position: center;"><img src="./images/elgreco_map.png" style="width:80%;"></h4>
					</div>
					<div class="modal-body">
						<div class="modal-body" id="BlocklyModalbody1div">
							<h3 id="BlocklyModalbody1" style="text-align: center;color:#bf4e4e;margin:0;white-space: pre-wrap;" ></h3>
						</div>
						<div class="modal-body" id="BlocklyModalbody2div">
							<h3 id="BlocklyModalbody2" style="text-align: center;white-space: pre-wrap;  color:#bf4e4e;margin:0;" ></h3>
						</div>
					</div>
					<div class="modal-footer">
						<button onclick="BlocklyStepF()" class="btn btn-secondary btn-sm bg-success mr-auto" id="BlocklyStepF" data-toggle="tooltip" data-placement="top" title="Επόμενο Βήμα του Κώδικα Python"disabled></button>
						<button onclick="BlocklyStepΒ()" class="btn btn-secondary btn-sm bg-success mr-auto " id="BlocklyStepB" data-toggle="tooltip" data-placement="top" title="Προηγούμενο Βήμα του Κώδικα Python"disabled></button>
						<button onclick="StopCodeExec2()" class="btn btn-secondary btn-sm bg-success mr-auto" id="StopCodeExec2" data-toggle="tooltip" data-placement="top" title="Σταμάτημα της εκτέλεσης του Κώδικα Python"disabled></button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade in" id="GifModal" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header" style="padding-bottom: 0px;">
							<h4 class="modal-title "style="text-align: center;white-space: pre-wrap;position:center;"><img src="./images/logo.png" style="width:40%;"></h4>
						</div>
						<div class="modal-body">
						<div class="modal-body" id="GifModalbody1div">
							<h4 class="modal-body"style="text-align: center;white-space: pre-wrap;position:center;"><img src="./images/thinking.gif" style="width:100%;"></h4>
						</div>
						<div class="modal-body" id="GifModalbody2div">
							<h4 class="modal-body "style="text-align: center;white-space: pre-wrap;position:center;"><img src="./images/animation.gif" style="width:20%;"></h4>
						</div>
					</div>
					</div>
				</div>
		</div>
		<script>
			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
				if (document.body.scrollTop > 450|| document.documentElement.scrollTop > 450) {
				document.getElementById("myBtn").style.display = "block";
				} else {
				document.getElementById("myBtn").style.display = "none";
				}
			}

			// When the user clicks on the button, scroll to the top of the document
			function topFunction() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		</script>
		
		<!-- Το κουμπί του scroll to top -->
		<button onclick="topFunction()" id="myBtn" title="Go to top">Αρχή</button>
	</body>
</html>



