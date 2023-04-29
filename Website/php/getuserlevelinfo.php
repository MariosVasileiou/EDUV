<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
	session_start();
    $response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT;
	$levelnum=test_input($db->connect(),$_POST["userlevel"]);
	$userid=test_input($db->connect(),$_POST["userid"]);
	$levelnum = ++$levelnum;
	if(isset($_POST['userlevel']))
	{
		mysqli_query($db->connect(), "SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");    
		$result=mysqli_query($db->connect(),"SELECT * FROM scenarios WHERE level_id='".$levelnum."'");	
		if(mysqli_num_rows($result) > 0){
			$row=mysqli_fetch_row($result);
			$_SESSION['levelnum']=$levelnum;
			$_SESSION['levelname']=$row[1];
			$_SESSION['leveldes']=$row[2];
			$_SESSION['levelsol']=$row[3];
			$_SESSION['levelexecsol']=$row[4];
			$_SESSION['levelInitX']=$row[5];
			$_SESSION['levelInitY']=$row[6];
			$_SESSION['levelendX']=$row[7];
			$_SESSION['levelendY']=$row[8];
			$response['userid']=$userid;
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