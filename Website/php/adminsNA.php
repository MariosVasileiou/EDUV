<?php	

    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	$response=array();
	if(isset($_POST['username']) && isset($_POST['password'])){
		require_once __DIR__ . '/db_connect.php';
		$db=new DB_CONNECT();
		$username=test_input($db->connect(),$_POST["username"]);
		$password=md5(test_input($db->connect(),$_POST["password"]));
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$result=mysqli_query($db->connect(),"INSERT INTO admins (username, password) VALUES ('".$username."','".$password."')");
		if($result){
			$response["success"] = 1;
			$db->close();
			echo json_encode($response);
		}
		else
		{
			$db->close();
			$response["success"] = 0;
			$response["message"] = "Fail! Something went wrong in first insert";
			echo json_encode($response);
		}	
		
	}
	else 
	{
		$db->close();
		$response["success"] = 0;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response);
	}
?>