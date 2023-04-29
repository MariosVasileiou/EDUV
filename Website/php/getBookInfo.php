<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
    $response=array();
	$outArray = array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT;
	$date=test_input($db->connect(),$_POST["date"]);
	if(isset($_POST['date'])){
		mysqli_query($db->connect(), "SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");    
		$result=mysqli_query($db->connect(),"SELECT * FROM booking WHERE date='".$date."'");	
		if($result){
			$i=0;
			while ($row = mysqli_fetch_assoc($result)){
			++$i;
			$outArray[] = $row;
			}
			$db->close();
			echo json_encode($outArray, JSON_UNESCAPED_UNICODE);
		}
		else
		{
			$response['success']=0;
			$db->close();
			echo json_encode($response);
		}
		
	}
	else
	{
		$response['success']=0;
		$db->close();
		echo json_encode($response);
	}
?>