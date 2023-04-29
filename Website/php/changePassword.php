<?php
	include('../phpseclib1.0.9/Net/SSH2.php');
	include('../phpseclib1.0.9/Net/SFTP.php');
	include('AppTools.php');
	$responce=array();

	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	
	mysqli_query($db->connect(),"SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
	$email=($_POST['email']);
	$result3 = mysqli_query($db->connect(),"SELECT * FROM verify WHERE email='".$email."'");
	if(mysqli_num_rows($result3) == 0)
	{
		$url = generateUrl("/EL_Greco/index.php");
		header($url);
		$db->close();
		exit();
	}
	else
	{
		//donothing
	}
	if(isset($_POST['password']) && isset($_POST['email']))
	{	
		$email=test_input($db->connect(),$_POST["email"]);
		$password=md5(test_input($db->connect(),$_POST["password"]));
		$result=mysqli_query($db->connect(),"UPDATE users SET password=('".$password."') WHERE email='".$email."'");
		if($result)
		{
			$result2 = mysqli_query($db->connect(),"DELETE FROM verify WHERE email='".$email."'");
			if($result2)
			{	
				$db->close();
				$response["success"] = 1;
				$response["message"] = "All ok";
				echo json_encode($response);
			}
			else
			{
				$db->close();
				$response["success"] = 0;
				$response["message"] = "Fail! Something went wrong";
				echo json_encode($response);
			}		
		}
		else
		{   
			$db->close();
			$response["success"] = 0;
			$response["message"] = "Fail! Something went wrong";
			echo json_encode($response);
		}
	}
	else
	{	
		$db->close();
		$response["success"] = 0;
		$response["message"] = "Fail! Something went wrong";
		echo json_encode($response);
	}
?>