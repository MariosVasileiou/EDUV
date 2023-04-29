<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');; 
    include_once('AppTools.php');
	$responce=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();    
    $email=test_input($db->connect(),$_POST["email"]);
	mysqli_query($db->connect(), "SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
	$result=mysqli_query($db->connect(),"SELECT * FROM users WHERE Email='".$email."'");
	if(mysqli_num_rows($result)>0){
		$response["success"] = 0;
		$response["message"] = "This email exists";
		 // echoing JSON response
		$db->close();
		echo json_encode($response);
		
	}
	else{
		//required field is missing
		$response["success"] = 1;
		$response["message"] = "there is no user with this email";
		 // echoing JSON response
		$db->close();
		echo json_encode($response);
	}	
?>