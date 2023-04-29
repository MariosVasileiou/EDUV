<?php
set_include_path('phpseclib1.0.9/');
//set_include_path('phpseclib3.0.9/phpseclib/');
include('Net/SSH2.php');
//include('Net/SFTP.php');
    $server = "192.168.201.2";
    $username = "pi";
    $password = "raspberry";
    
    $sftp = new Net_SFTP($server);
    $sftp = new SFTP($server);
    if (!$sftp->login($username, $password)) {
        exit('Login Failed sftp');
    }
    $ssh = new Net_SSH2($server);
    $ssh = new SSH2($server);
    if (!$ssh->login($username, $password)) {
       exit('Login Failed ssh');
   }
header('Content-Type: application/json');

$aResult = array();

if( !isset($_POST['functionname']) ) { echo 'ajax fault'; $aResult['error'] = 'No function name!'; }

if( !isset($_POST['arguments']) ) { echo 'ajax fault'; $aResult['error'] = 'No function arguments!'; }

if( !isset($aResult['error']) ) {

  switch($_POST['functionname']) {
    case 'add':
       $myfile = fopen("main.py", "w") or die("Unable to open file!");
       echo"file created";
       $txt = $_POST['arguments'][0];
       fwrite($myfile, $txt);
       echo"data written to file";
       fclose($myfile);
       echo 'file written';
       $sftp->put('/home/pi/Desktop/Elgreco/components/main.py',$txt);
       echo "sftp transfer";
       echo $ssh->exec("python3 /home/pi/Desktop/Elgreco/components/fixmain.py");
       usleep(200000);
       echo"ssh python 3 fix main";
       echo $ssh->exec("python3 /home/pi/Desktop/Elgreco/components/fixedmain.py");
       echo"ssh python 3 fixed main";
       break;
    default:
       $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
       echo "fault in ajax";
       break;
     }

   }

   echo json_encode($aResult, JSON_UNESCAPED_UNICODE);

   ?>