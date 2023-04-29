<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
	session_start();
    $response=array();
	require_once __DIR__ . '/db_connect.php';
	if(!isset($_SESSION["user_id"])){
	$url = generateUrl("/EL_Greco/index.php");
    header($url);
    exit();
	}
	$db=new DB_CONNECT;
	$userlevel=test_input($db->connect(),$_POST["userlevel"]);
	$userid=test_input($db->connect(),$_POST["userid"]);
	$userlevel=++$userlevel;
	$levelnum = $userlevel;
	$levelnum = ++$levelnum;
	if(isset($_POST['userlevel']))
	{
		mysqli_query($db->connect(), "SET NAMES 'utf8'");
		mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'"); 
		$result=mysqli_query($db->connect(),"UPDATE profile SET userLevel =('".$userlevel."')   WHERE user_id ='".$userid."'");
		if($result)
		{	
			$result2=mysqli_query($db->connect(),"UPDATE users SET level =('".$userlevel."')   WHERE user_id ='".$userid."'");
			if($result2)
			{	
				if($levelnum<10)
				{
					$result3=mysqli_query($db->connect(),"SELECT * FROM scenarios WHERE level_id='".$levelnum."'");	
					if(mysqli_num_rows($result3) > 0){
						$row=mysqli_fetch_row($result3);
						$_SESSION['levelnum']=$levelnum;
						$_SESSION['levelname']=$row[1];
						$_SESSION['leveldes']=$row[2];
						$_SESSION['levelsol']=$row[3];
						$_SESSION['levelexecsol']=$row[4];
						$_SESSION['levelInitX']=$row[5];
						$_SESSION['levelInitY']=$row[6];
						$_SESSION['levelendX']=$row[7];
						$_SESSION['levelendY']=$row[8];
						$_SESSION['userlevel']=$userlevel;
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
				}	
			}
			else
			{	
				$url = generateUrl("/EL_Greco/Failure.php");
				$db->close();
				header($url);
			}	
		}
		else
		{	
			$url = generateUrl("/EL_Greco/Failure.php");
			$db->close();
			header($url);
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