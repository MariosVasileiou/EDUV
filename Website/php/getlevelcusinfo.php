<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
	session_start();
    $response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT;
	$levelnum=test_input($db->connect(),$_POST["clevel"]);
	if(isset($_POST["clevel"]))
	{
		mysqli_query($db->connect(), "SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");    
		$result=mysqli_query($db->connect(),"SELECT * FROM scenarios WHERE level_id='".$levelnum."'");	
		if(mysqli_num_rows($result) > 0){
			$row=mysqli_fetch_row($result);
			$_SESSION['levelcusnum']=$levelnum;
			$_SESSION['levelcusname']=$row[1];
			$_SESSION['levelcusdes']=$row[2];
			$_SESSION['levelcussol']=$row[3];
			$_SESSION['levelcusexecsol']=$row[4];
			$_SESSION['levelcusInitX']=$row[5];
			$_SESSION['levelcusInitY']=$row[6];
			$_SESSION['levelcusendX']=$row[7];
			$_SESSION['levelcusendY']=$row[8];
			$response['levelcusnum']=$levelnum;
			$response['levelcusname']=$row[1];
			$response['levelcusdes']=$row[2];
			$response['levelcussol']=$row[3];
			$response['success']=1;
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
		else
		{
			$response['success']=0;
			$response['levelnum']=$levelnum;
			$response["message"] = "Sql broken";
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
	$db->close();
	}
	else
	{
		$db->close();
		$response["success"] = 0;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response);
	}	
?>