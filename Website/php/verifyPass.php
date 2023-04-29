<?php
    include('../phpseclib1.0.9/Net/SSH2.php');
    include('../phpseclib1.0.9/Net/SFTP.php');
    include('AppTools.php');
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();
	mysqli_query($db->connect(),"SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");

	if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash']))
	{
		$email=($_GET['email']);
		$hash=($_GET['hash']);
		$result = mysqli_query($db->connect(),"SELECT * FROM verify WHERE email='".$email."' and hash='".$hash."'");
		if(mysqli_num_rows($result) > 0)
		{	
			$url = generateUrl("/EL_Greco/changePass.php?email=$email");
			$db->close();
			header($url);
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
?>