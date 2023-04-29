<?php	
    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	$response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	$bookingid=test_input($db->connect(),$_POST["booking_id"]);
	$userid=test_input($db->connect(),$_POST["user_id"]);
	
	if(isset($_POST['booking_id']) && isset($_POST['user_id']))
	{
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$result2=mysqli_query($db->connect(),"SELECT * FROM booking WHERE booking_id='".$bookingid."' AND user_id='".$userid."'");
		if(mysqli_num_rows($result2) > 0){
			$row=mysqli_fetch_row($result2);
			$date=$row[4];
			
			$result=mysqli_query($db->connect(),"DELETE FROM booking WHERE booking_id='".$bookingid."' AND user_id='".$userid."'");
			if($result){
				$response["success"] = 1;
				$response["date"] = $date;
				$response["message"] = "Delete Happened!";
				$db->close();
				echo json_encode($response, JSON_UNESCAPED_UNICODE);
			}
			else
			{	
				$db->close();
				$response["success"] = 0;
				$response["message"] = "Fail! Something went wrong";
				echo json_encode($response, JSON_UNESCAPED_UNICODE);
			}
		}
		else
		{
		$db->close();
		$response["success"] = 2;
		$response["message"] = "There is no booking with this parameters";
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