<?php	

    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	$response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	$levelname=test_input($db->connect(),$_POST["levelname"]);
	$levelnum=test_input($db->connect(),$_POST["levelnum"]);
	$levelreq=test_input($db->connect(),$_POST["levelreq"]);
	$levelsol=test_input($db->connect(),$_POST["levelsol"]);
	$levelexecsol=test_input($db->connect(),$_POST["levelexecsol"]);
	if(isset($_POST['levelname']) && isset($_POST['levelnum']) && isset($_POST['levelreq']) && isset($_POST['levelsol']) && isset($_POST['levelexecsol'])){
		if (($levelnum>9) ||($levelnum<1)){
			$response['success']=2;
			$db->close();
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
		else{
			mysqli_query($db->connect(),"SET NAMES 'utf8'");
			mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
			$result=mysqli_query($db->connect(),"UPDATE scenarios SET scenario_name =('".$levelname."') , description =('".$levelreq."') , regularExpression =('".$levelsol."') , expectedOutput =('".$levelexecsol."')  WHERE level_id ='".$levelnum."'");
			if($result){
				$response["success"] = 1;
				$db->close();
				echo json_encode($response, JSON_UNESCAPED_UNICODE);
			}
			else
			{
				$db->close();
				$response["success"] = 0;
				$response["message"] = "Fail! Something went wrong in first insert";
				echo json_encode($response, JSON_UNESCAPED_UNICODE);
			}	
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