<?php
	include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	session_start();
	$response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	$userid=test_input($db->connect(),$_POST["userid"]);
	date_default_timezone_set("Europe/Athens");
	$time = time();
	$today = date("d/m/Y",$time);
	$today2 = date("m/d/Y",$time);
	$date_arr  = explode ("/",$today);
	$control = 86400;
	if(isset($_POST['userid']))
	{
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$result=mysqli_query($db->connect(),"SELECT * FROM booking WHERE user_id='".$userid."' AND  date='".$today."'");
		if(mysqli_num_rows($result) > 0)
		{
			while($row = mysqli_fetch_assoc($result)){
				$start = $row['sos'];
				$start_arr = explode (":", $start);
				$end = $row['eos'];
				$end_arr = explode (":", $end);
				$sos = mktime($start_arr[0], $start_arr[1], 0, $date_arr[1], $date_arr[0], $date_arr[2]) ;
				$eos = mktime($end_arr[0], $end_arr[1], 0, $date_arr[1], $date_arr[0], $date_arr[2]) ;
				$difference1 = ($sos-$time); //sos>0 sto mellon sos<0 exei perasei
				$difference2 = ($eos-$time);  //eos>0 sto mellon eos<0 exei perasei
				if(($difference1>=0)||(($difference1<0)&&($difference2>0))){
					if($difference1<$control){
					$_SESSION['sos'] = $start;
					$_SESSION['eos'] = $end;
					$control = $difference1;
				}
			}
			}
			
			$_SESSION['date'] = $today2;
			$response["start"] =$start;
			$response["end"]= $end ;
			$response["success"] = 1;
			$response["message"] = "Booking for today for this user";
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
		else
		{
		$response["success"] = 1;
		$response["message"] = "There is no booking  for today for this user";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
		$db->close();
	}
	else 
	{
		$db->close();
		$response["success"] = 1;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
?>