<?php	

    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	$response=array();
	$hash = md5( rand(0,1000) );
	if(isset($_POST['email']) && isset($_POST['password'])){
		require_once __DIR__ . '/db_connect.php';
		$db=new DB_CONNECT();
		$email=test_input($db->connect(),$_POST["email"]);
		$password=md5(test_input($db->connect(),$_POST["password"]));
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		$result2 = mysqli_query($db->connect(),"SELECT * FROM verify WHERE email='".$email."'");
		if(mysqli_num_rows($result2) > 0)
		{
			mysqli_query($db->connect(),"SET NAMES 'utf8'");
			$result3=mysqli_query($db->connect(),"UPDATE  verify SET hash= '".$hash."' WHERE email ='".$email."'");
			if($result3){
				$response["success"] = 1;
				$response["email"]=$email;
				$response["hash"]=$hash;
				$db->close();
				echo json_encode($response);	
			}else{
				// required field is missing
				$response["success"] = 0;
				$response["message"] = "Fail! Something went wrong";
				$db->close();
				// echoing JSON response
				echo json_encode($response);
			}
		}
		else {
			mysqli_query($db->connect(),"SET NAMES 'utf8'");
			$result=mysqli_query($db->connect(),"INSERT INTO verify (email, hash, password) VALUES ('".$email."','".$hash."','".$password."')");
			if($result){
				$response["success"] = 1;
				$response["email"]=$email;
				$response["hash"]=$hash;
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
	}
	else 
	{
		$db->close();
		$response["success"] = 0;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response);
	}
?>