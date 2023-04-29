<?php
set_include_path('phpseclib1.0.9/');
include('Net/SSH2.php');
include('Net/SFTP.php');
   // $server = "192.168.201.2";
   // $username = "pi";
   // $password = "raspberry";
    
    //$sftp = new Net_SFTP($server);
    //if (!$sftp->login($username, $password)) {
        //exit('Login Failed');
   // }
   // $ssh = new Net_SSH2($server);
   // if (!$ssh->login($username, $password)) {
   //     exit('Login Failed');
   // }
header('Content-Type: application/json');
$aResult = array();

if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

if( !isset($aResult['error']) ) {

  switch($_POST['functionname']) {
    case 'add':
       $filename = 'logFiles/'.$_POST['arguments'][0].'.txt';
       $myfile = fopen($filename, "w") or die("Unable to open file!");
       $txt = $_POST['arguments'][1];
       fwrite($myfile, $txt);
       fclose($myfile);
       echo "I'm about to learn PHP!<br>";
       break; 
    default:
       $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
       break;
     }

   }

   echo json_encode($aResult, JSON_UNESCAPED_UNICODE);

   ?>