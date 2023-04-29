<?php	

    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	$response=array();
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	$usernamedd=test_input($db->connect(),$_POST["usernamedd"]);
	$useridd=test_input($db->connect(),$_POST["useridd"]);
	if((isset($useridd) === true) && ($useridd != ""))
	{
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$result=mysqli_query($db->connect(),"SELECT * FROM profile WHERE user_id='".$useridd."'");
		if(mysqli_num_rows($result) > 0)
		{
			$row=mysqli_fetch_row($result);
			$bdayd = $row[6] . '.' . $row[7]. '.' .$row[8];
			$bday = new DateTime($bdayd); // Your date of birth
			$today = new Datetime(date('m.d.y'));
			$diff = $today->diff($bday);
			if(($diff->m > 6) ||(($diff->m == 6) && ($diff->d > 0)))
			{
				$age = $diff->y + 1;
			}
			else
			{
				$age = $diff->y;
			}
			$response["age"]=$age;
			$response["useride"]=$row[1];
			$response["usernamee"]=$row[2];
			$response["namee"]=$row[3];
			$response["surnamee"]=$row[4];
			$response["gendere"]=$row[5];
			$response["loede"]=$row[9];
			$response["emaile"]=$row[10];
			$response["usertexte"]=$row[11];
			$response["uslev"]=$row[13];
			$response["success"] = 1;
			$response["message"] = "retrieve with useridd";
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
	else if((isset($usernamedd) === true) && ($usernamedd != ""))
	{
		mysqli_query($db->connect(),"SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
		$result=mysqli_query($db->connect(),"SELECT * FROM profile WHERE username='".$usernamedd."'");
		if(mysqli_num_rows($result) > 0)
		{
			$row=mysqli_fetch_row($result);
			$bdayd = $row[6] . '.' . $row[7]. '.' .$row[8];
			$bday = new DateTime($bdayd); // Your date of birth
			$today = new Datetime(date('m.d.y'));
			$diff = $today->diff($bday);
			if(($diff->m > 6) ||(($diff->m == 6) && ($diff->d > 0)))
			{
				$age = $diff->y + 1;
			}
			else
			{
				$age = $diff->y;
			}
			$response["age"]=$age;
			$response["useride"]=$row[1];
			$response["usernamee"]=$row[2];
			$response["namee"]=$row[3];
			$response["surnamee"]=$row[4];
			$response["gendere"]=$row[5];
			$response["loede"]=$row[9];
			$response["emaile"]=$row[10];
			$response["usertexte"]=$row[11];
			$response["uslev"]=$row[13];
			$response["success"] = 1;
			$response["message"] = "retrieve with username";
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
		$response["message"] = "Required field(s) is missing";
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
?>