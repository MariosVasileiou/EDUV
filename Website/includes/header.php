
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">	<!--Για σώστη αναπαράσταση των χαρακτήρων-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">	<!-- Για συμβατότητα της ιστοσελίδας με παλιούς ΙΕ της Microsoft-->
		<title>El Greco Platform</title>	<!--Τίτλος Σελίδας-->
		<meta name="viewport" content="width=device-width, initial-scale=1">	<!--Για να εμφανίζεται σωστά σε όλες τις συσκεύες-->
		<meta name="description" content="Robot learning website">	<!--Περιγραφή ιστοσελίδας-->
		<meta name="keywords" content="ElGreco,Robot aim in learning">	<!--Λέξεις κλειδιά για ανάζητηση από μηχανές αναζήτησης-->
		<meta name="author" content="Aegean Robotics Team">	<!--Ο δημιουργός της σελίδας-->

  		<!-- Facebook and Twitter integration -->
		<meta property="og:title" content=""/>	<!--Τα og χρησιμοποιούνται από αλλές ιστοσελίδες για την παρουσίαση της ιστοσελιδας π.χ. όταν κάνεις share στο fb-->
		<meta property="og:image" content=""/>	<!--Δεν επηρέαζουν την λειτουργικότητα της ιστοσελίδας-->
		<meta property="og:url" content=""/>
		<meta property="og:site_name" content=""/>
		<meta property="og:description" content=""/>
		<meta name="twitter:title" content="" />	<!--Παρόμοια σαν τα og για twitter.Δεν επηρέαζουν την λειτουργικότητα της ιστοσελίδας-->
		<meta name="twitter:image" content="" />
		<meta name="twitter:url" content="" />
		<meta name="twitter:card" content="" />
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">	<!-- Για να χρησιμοποιεί η ιστοσελίδα τους χαρακτήρες Sans -->
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
		<link rel="stylesheet" href="css/customize.css">
		<!-- Modernizr JS εντοπίζει της δυνατότητες του browser του επισκέπτη της σελίδας -->
		<script src="js/modernizr-2.6.2.min.js"></script>
		<script src="js/timer.js"></script>
		<!-- FOR IE9 below -->
		<!--[if lt IE 9]>
		<script src="js/respond.min.js"></script>
		<![endif]-->
		<style>	
			.timercss {
			  position: relative;
			  text-align: center;
			  color: white;
			}
			.centered {
			  position: absolute;
			  top: 50%;
			  left: 50%;
			  transform: translate(-50%, -50%);
			}
		</style>	
	   
		<style>
		#timer{
			visibility: hidden;
		}
		.wrap {
			width: 100%;
			height:auto;
			margin: auto;
			text-align:center;
			position:relative;
		}
		.text_over_image {
			position: absolute;
			margin: auto;
			top: 50px;
			left:0;
			right:0;
			bottom:0;
			color:#828282;
			height:100px;
			display:none;
			font-size: 25px;
		}
		.dropbtn {
			background-color: #4CAF50;
			color: white;
			padding: 16px;
			font-size: 16px;
			border: none;
		}

		.dropdown {
			position: relative;
			display: inline-block;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: #f1f1f1;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			z-index: 1001;
		}

		.dropdown-content a {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			display: block;
		}

		.dropdown-content a:hover {
		background-color: #ddd
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}

		.dropdown:hover .dropbtn {
			background-color: #3e8e41;
		}
		</style><!--Style για τα κουμπιά-->
	</head>

	<body>	<!--Ξεκινάει η ώρα-->
		<!-- Η γραμμη εικονιδίων στο πάνω μέρος της σελίδας -->
		<nav class="fh5co-nav" role="navigation">
				<div class="top-menu" style="padding-top:5px;padding-bottom:0px;">
					<div class="container-fluid">
						<div class="row">	<!-- Η γραμμη εικονιδίων στο πάνω μέρος της σελίδας -->
							<div class="col-xs-5"id="logo">
								<div id="fh5co-logo"><img src="./images/aegean.png" style="width:30%;height:auto"></div><!-- Το εικονίδιο με την λάμπα Έβγαλα την href στο index-->
								</div>
									<div class="col-xs-2" id="timer">
										<div class="wrap" >
										<input type="image" src="images/timerHeader.png" style="width: 100%;height:auto;"></div> <!--Message icon το είχαν βάλει δεν ξέρω γιατί μάλλον για help-->
										<div class="centered" id="counterDownHeader" style="font-size:200%;"></div>
									</div>
								<div class="col-xs-5 text-right menu-1" id="menu" style="float:right;">
									<ul><?php
										echo '<li><div class="dropdown">
													<a>About</a>
														<div class="dropdown-content">
															<a href="https://icsdweb.aegean.gr/aegeanrbtcs/" target="_blank"><img src="./images/aegean.png" style="width:40%">Aegean Robotics Team</a>
															
															<a href=".\contact.php"><span>Φόρμα επικοινωνίας</a>
														 </div>
												</div></li>
												
												<li ><a href=".\Register.php"><span></span></a></li>';
										?>
										
									</ul>
								</div>
					
									<div class="modal fade in" id="Modalsynarthseis" role="dialog">
												<div class="modal-dialog">
												  <!-- Modal content-->
												  <div class="modal-content">
													<div class="modal-header" style="padding-bottom: 0px;">
														<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
													</div>
														<div class="modal-body">
														  <p>Δημιουργoύμε συναρτήσεις για πολύπλοκες διαδικασίες που μπορεί να τις χρειαστούμε πολλαπλές φορές</p>
														</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('Modalsynarthseis');">Κλείσε το παράθυρο</button>
													</div>
												  </div>
												</div>
									</div>
						
									<div class="modal fade in" id="Modalmetavlites" role="dialog">
												<div class="modal-dialog">
												  <!-- Modal content-->
												  <div class="modal-content">
													<div class="modal-header" style="padding-bottom: 0px;">
														<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
													</div>
														<div class="modal-body">
														  <p>Για τον προγραμματισμό δημιουργείς και διαχειρίζεσαι μεταβλητές οι οποίες είναι παρόμοιες με εκείνες των μαθηματικών που αλλάζουν τιμές ανάλογα με το πρόβλημα μας</p>
														</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('Modalmetavlites');">Κλείσε το παράθυρο</button>
													</div>
												  </div>
												</div>
									</div>
									<div class="modal fade in" id="Modallogikoitelestes" role="dialog">
												<div class="modal-dialog">
												  <!-- Modal content-->
												  <div class="modal-content">
													<div class="modal-header" style="padding-bottom: 0px;">
														<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
													</div>
														<div class="modal-body">
														  <p>Λογικοί τελεστές: Κάποιοι έλεγχοι που αν ισχύουν θα πραγματοποιηθεί το "do" κάθε φορά</p>
														</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('Modallogikoitelestes');">Κλείσε το παράθυρο</button>
													</div>
												  </div>
												</div>
									</div>

										<div class="modal fade in" id="Modalelegxoi" role="dialog">
													<div class="modal-dialog">
													  <!-- Modal content-->
													  <div class="modal-content">
															<div class="modal-header" style="padding-bottom: 0px;">
																<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
															</div>
																<div class="modal-body">
																  <p>Έλεγχος "if" (εάν) ισχύει κάτι τότε "do" (κάνε) κάποιες εντολές<br>Έλεγχος repeat while/until για ίδια διαδικασία αλλά επαναληπτικά</p>
																</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('Modalelegxoi');">Κλείσε το παράθυρο</button>
															</div>
													  </div>
													</div>
										</div>

										<div class="modal fade in" id="Modalarithmitikoitelestes" role="dialog">
												<div class="modal-dialog">
												  <!-- Modal content-->
												  <div class="modal-content">
													<div class="modal-header" style="padding-bottom: 0px;">
														<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
													</div>
														<div class="modal-body">
														  <p>Αριθμητικά στοιχεία για ορισμό τιμής σε μεταβλητή ή σε έλεγχο και διάφορες αριθμητικές πράξεις ανάμεσα σε δύο τιμές/μεταβλητές</p>
														</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('Modalarithmitikoitelestes');">Κλείσε το παράθυρο</button>
													</div>
												  </div>
												</div>
										</div>
										<div class="modal fade in" id="Modalodigiesxrhshs" role="dialog">
												<div class="modal-dialog">
												  <!-- Modal content-->
												  <div class="modal-content">
													<div class="modal-header" style="padding-bottom: 0px;">
														<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
													</div>
														<div class="modal-body">
														  <p>Για να χρησιμοποιήσεις την ιστοσελίδα πρέπει να κάνεις εγγραφή!!!<br>Για να μπορέσεις να χειριστείς τον EL Greco πρέπει να κλείσεις ραντεβού!!!</p>
														  <h2>Επεξήγηση βασικών λειτουργιών ιστοσελίδας</h2>
														  <h4 ><img src="./images/controls.png" style="width:100%"></h4>
														  <h4 ><img src="./images/step off.png" style="width:10%">  Απενεργοποιημένη βηματική εκτέλεση κώδικα.</h4>
														  <h4 ><img src="./images/step on.png" style="width:10%">  Ενεργοποιημένη βηματική εκτέλεση κώδικα.</h4>
														  <h4 ><img src="./images/play.png" style="width:10%">  Eκτέλεση κώδικα.</h4>
														  <h4 ><img src="./images/forward.png" style="width:10%">  Επόμενο βήμα στη βηματική εκτέλεση κώδικα.</h4>
														  <h4 ><img src="./images/backwards.png" style="width:10%">  Προηγούμενο βήμα στη βηματική εκτέλεση κώδικα.</h4>
														  <h4 ><img src="./images/off.png" style="width:10%">  Διακοπή βηματικής εκτέλεσης κώδικα.</h4>
														  <h4 ><img src="./images/eye.png" style="width:10%">  Μετατροπή κώδικα Blockly σε Python.</h4>
														  <h4 ><img src="./images/check.png" style="width:10%">  Έλεγχος αν ο κώδικας ικανοποιεί τα απαιτούμενα επιπέδου του El Greco Adventure.</h4>
														  <h4 ><img src="./images/elgrecobutton.png" style="width:10%">  Εκτέλεση κώδικα από τον El Greco.</h4>
														  <p>Η λειτουργία των παραπάνω χειρηστιρίων αλλάζει αναλόγα με την θέση τους. Εαν είναι πάνω από την περιοχή του Blockly επιδρούν στον κώδικα Blockly, ενώ αυτά που βρίσκονται πάνω από την περιοχή python επιδρούν στον κώδικα μορφής Python</p>
														</div>
														</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-default" id="modalIn3Btn" onclick="hideModal('Modalodigiesxrhshs');">Κλείσε το παράθυρο</button>
													</div>
												  </div>
												</div>
										</div>

										<div class="modal fade in" id="ModalsynarthseisElgreco" role="dialog">
													<div class="modal-dialog2">
													  <!-- Modal content-->
													  <div class="modal-content">
															<div class="modal-header" style="padding-bottom: 0px;">
																<h4 class="modal-title"><img src="./images/logo.png" style="width:40%"></h4>
															</div>
																<div class="modal-body2">
																  <p>Έτοιμες δικές μας συναρτήσεις που κάνουν το ρομπότ μας να κάνει διάφορες ενδιαφέρουσες λειτουργίες όπως ομιλία ή κινήσεις</p>
																</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-default" id="modalInBtn" onclick="hideModal('ModalsynarthseisElgreco');">Κλείσε το παράθυρο</button>
															</div>
													  </div>
										</div>

										




										</div>

						</div>
					</div>	
				</div>
		</nav>
	</body>
</html>
