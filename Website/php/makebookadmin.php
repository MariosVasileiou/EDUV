<?php
include('../phpseclib1.0.9/Net/SSH2.php');
include('../phpseclib1.0.9/Net/SFTP.php');
include('AppTools.php');
$responce=array();

require_once __DIR__ . '/db_connect.php';
$db=new DB_CONNECT();
$datee=test_input($db->connect(),$_POST["datee"]);
$hourss = test_input($db->connect(),$_POST["hourss"]);
$houree = test_input($db->connect(),$_POST["houree"]);
$useridd = test_input($db->connect(),$_POST["useridd"]);
$usernamee = test_input($db->connect(),$_POST["usernamee"]);
$emaill = test_input($db->connect(),$_POST["emaill"]);
$skypee = test_input($db->connect(),$_POST["skypee"]);
$commentss = test_input($db->connect(),$_POST["commentss"]);
if(isset($_POST['datee']) && isset($_POST['hourss'])&& isset($_POST['houree'])&& isset($_POST['useridd']))
{		
	mysqli_query($db->connect(),"SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
	$result=mysqli_query($db->connect(),"INSERT INTO booking (user_id, email, username, date, sos, eos, skype, comments) VALUES ('".$useridd."','".$emaill."','".$usernamee."','".$datee."','".$hourss."','".$houree."','".$skypee."','".$commentss."')");
	if($result){
		$response["success"] = 1;
		$response["date"] = $datee;
		$db->close();
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else
	{	
		$db->close();
		$response["success"] = 2;
		$response["message"] = "Fail! Something went wrong with sql";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}	

}
else 
{
	$db->close();
	$response["success"] = 0;
	$response["message"] = "Required field(s) is missing";
	echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
?>