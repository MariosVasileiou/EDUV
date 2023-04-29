<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');; 
    include_once('AppTools.php');
	$responce=array();
	$fulldate=$_POST["fulldatess"];
	$date=$_POST["datee"];
	$fulldatees=$_POST["fulldateee"];
	$control1=$_POST["control1"];
	$control2=$_POST["control2"];
	$albook = 0;
	$albook2 = 0;
	$target_arres = explode (",", $fulldatees);
	$target_arr = explode (",", $fulldate);
	$date_arr  = explode ("/", $date);
	date_default_timezone_set("Europe/Athens");
	$d=cal_days_in_month(CAL_GREGORIAN,$target_arr[4],$target_arr[5]);
	$target = mktime($target_arr[0], $target_arr[1], $target_arr[2], $target_arr[4], $target_arr[3], $target_arr[5]);
	$targetes = mktime($target_arres[0], $target_arres[1], $target_arres[2], $target_arres[4], $target_arres[3], $target_arres[5]);
	$today = time () ;
	$difference3 = ($target-$today); //sos>0 sto mellon sos<0 exei perasei
	$difference4 = ($targetes-$today);  //eos>0 sto mellon eos<0 exei perasei
	$days =(int) ($difference3/86400) ;
	if(isset($_POST['fulldatess']) && isset($_POST['fulldateee']) && isset($_POST['datee']))
	{
		if($target_arr[3]>$d){ //"Month does not have days"
			$albook = -2;
		}
		else if ($difference4<0){ //"Set in the past"
			$albook = -3;
		}
		else if (($difference3<0)&&($difference4>0)&&($control1=="true")){ //"SOS Set in the past"
			$albook = -4;
		} 
		else if (($difference3>0)&&($difference3<86400)&&($control2=="true")){ //"Set in the same day"
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
					$difference5 = ($targetes-$sos);
					$difference6 = ($targetes-$eos);
					//koini ora ekinisis
					if($difference1===0){
						$albook = ++$albook;		
						}
					//ora ekinisis se allo rantebou
					else if(($difference1>0) && ($difference2<0)){	
						$albook = ++$albook;
						}
					//diarkeia megaliteru apo to epitrepto(anamesa)
					if(($difference5>0)&&($difference6<0)){
						$albook2 = ++$albook2;
						}
					if(($difference1<0)&&($difference6>0)){
						$albook2 = ++$albook2;
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
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	if($albook >0)
	{	
		$response["date"] = $date;
		$response["date1"] = $date_arr[0];
		$response["date2"] = $date_arr[1];
		$response["date3"] = $date_arr[2];
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 0;
		$response["message"] = "SOS in start or middle of book";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else if($albook2 >0)
	{	
		$response["date"] = $date;
		$response["date1"] = $date_arr[0];
		$response["date2"] = $date_arr[1];
		$response["date3"] = $date_arr[2];
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = -1;
		$response["message"] = "EOS after eos of an other book";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else if(($albook2 >0)&&($albook >0))
	{	
		$response["date"] = $date;
		$response["date1"] = $date_arr[0];
		$response["date2"] = $date_arr[1];
		$response["date3"] = $date_arr[2];
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = -2;
		$response["message"] = "SOS AND EOS PROBLEM";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else if($albook === -1)
	{	
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 2;
		$response["message"] = "Set in the same day";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	
	}
	else if($albook === -2){
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 3;
		$response["message"] = "Month does not have days";
		
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	
	}
	else if($albook === -3){
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 5;
		$response["message"] = "Set in the past";
		
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	
	}
	else if($albook === -4){
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 6;
		$response["message"] = "SOS Set in the past";
		
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	
	}
	else if($albook === 0)
	{	
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 1;
		$response["message"] = "There is no booking for this date";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else
	{	
		$response["control1"] = $control1;
		$response["control2"] = $control2;
		$response["albook"] = $albook;
		$response["success"] = 4;
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
?>