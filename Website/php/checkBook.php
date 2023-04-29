<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');; 
    include_once('AppTools.php');
	$responce=array();
	$fulldate=$_POST["fulldate"];
	$date=$_POST["date"];
	$target_arr = explode (",", $fulldate);
	$date_arr  = explode ("/", $date);
	date_default_timezone_set("Europe/Athens");
	$d=cal_days_in_month(CAL_GREGORIAN,$target_arr[4],$target_arr[5]);
	$target = mktime($target_arr[0], $target_arr[1], $target_arr[2], $target_arr[4], $target_arr[3], $target_arr[5]) ;
	$today = time();
	$difference3 = ($target-$today);
	$days =(int) ($difference3/86400) ;
	if(isset($_POST['fulldate']) && isset($_POST['date']))
	{
		if($target_arr[3]>$d){
			$albook = -2;
		}
		else if ($days<=1){
				$albook = -1;
		}
		else
		{
			require_once __DIR__ . '/db_connect.php';
			$db=new DB_CONNECT();    
			mysqli_query($db->connect(), "SET NAMES 'utf8'");
			mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
			$result=mysqli_query($db->connect(),"SELECT * FROM booking WHERE date='".$date."'");
			if(mysqli_num_rows($result)>0)
			{
				$albook = 0;
				while($row = mysqli_fetch_assoc($result))
				{
					$start = $row['sos'];
					$start_arr = explode (":", $start);
					$end = $row['eos'];
					$end_arr = explode (":", $end);
					$sos = mktime($start_arr[0], $start_arr[1], 0, $date_arr[1], $date_arr[0], $date_arr[2]) ;
					$eos = mktime($end_arr[0], $end_arr[1], 0, $date_arr[1], $date_arr[0], $date_arr[2]) ;
					$difference1 = ($target-$sos);
					$difference2 = ($target-$eos);
					if($difference1===0){
						$albook = ++$albook;
						}
					else if(($difference1>0) && ($difference2<0)){
						$albook = ++$albook;
						}
				}
				$db->close();
			}
			else
			{
				$albook = 0;
				$db->close();
			}
		}	
	}
	else
	{
		$response["success"] = 4;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response);
	}
	if($albook >0)
	{
		$response["success"] = 0;
		$response["message"] = "Already booked";
		echo json_encode($response);
	}
	else if($albook === -1)
	{
		$response["success"] = 2;
		$response["message"] = "Set in the past";
		echo json_encode($response);
	
	}
	else if($albook === -2){
		$response["success"] = 3;
		$response["message"] = "Month does not have days";
		echo json_encode($response);
	
	}
	else
	{
		$response["success"] = 1;
		$response["message"] = "There is no booking for this date";
		echo json_encode($response);
	}	
?>