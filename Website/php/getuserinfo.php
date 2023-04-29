<?php 
$responce=array();
require_once __DIR__ . '\db_connect.php';
$db=new DB_CONNECT();
mysqli_query($db->connect(),"SET NAMES 'utf8'");
mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
$userid=$_POST["appuserid"];
$result=mysqli_query($db->connect(),"SELECT * FROM profile WHERE user_id='".$userid."'");
if(mysqli_num_rows($result) > 0)
{
		$row=mysqli_fetch_row($result);
		$dobd = $row[6];
		$dobm = $row[7];
		$doby = $row[8];
		$response['levelofeducation']=$row[9];
		$response['levelofuser'] = $row[13];
		$db->close();
		$bdayd = $dobd . '.' . $dobm. '.' .$doby;
		$bday = new DateTime($bdayd); // Your date of birth
		$today = new Datetime(date('m.d.y'));
		$diff = $today->diff($bday);
		if(($diff->m > 6) ||(($diff->m == 6) && ($diff->d > 0)))
		{
			$response['ageofuser'] = $diff->y + 1;
		}
		else
		{
			$response['ageofuser'] = $diff->y;
		}
		$response['success']=1;
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
else
{
	$response['success']=0;
	$db->close();
	echo json_encode($response, JSON_UNESCAPED_UNICODE);
	$url = generateUrl("/EL_Greco/Failure.php");
	header($url);
	exit();
}
?>