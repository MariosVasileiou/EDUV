<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');; 
    include_once('AppTools.php');
	$responce=array();
	
	if(isset($_POST['username'])){

		require_once __DIR__ . '/db_connect.php';
		$db=new DB_CONNECT();
		mysqli_query($db->connect(), "SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$username=test_input($db->connect(),$_POST["username"]);
		$result=mysqli_query($db->connect(),"SELECT * FROM profile WHERE username='".$username."'");
		
		if(mysqli_num_rows($result)>0){
			$row=mysqli_fetch_row($result);
			$response["success"] = 0;
			$response["email"] = $row[10];
			$response["message"] = "This username exists";
			$db->close();
			// echoing JSON response
			echo json_encode($response);
			
		}else
		{
			// required field is missing
			$response["success"] = 1;
			$response["message"] = "there is no user with this username";
			// echoing JSON response
			$db->close();
			echo json_encode($response);
			
		}
		
	}else 
	{
		// required field is missing
		$response["success"] = 0;
		$response["message"] = "Required field(s) is missing";
		$db->close();
		// echoing JSON response
		echo json_encode($response);
	}
?>