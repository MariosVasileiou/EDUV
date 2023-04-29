<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
    $response=array();  
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT;
    mysqli_query($db->connect(), "SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");    
    $email=test_input($db->connect(),$_POST["email"]);
	$password=md5(test_input($db->connect(),$_POST["password"]));
	$result=mysqli_query($db->connect(),"SELECT * FROM users WHERE Email='".$email."' and Password='".$password."'");	
	if(mysqli_num_rows($result) > 0){
		$row=mysqli_fetch_row($result);
		removePreviusSessionIfExists();
		session_start();
        $_SESSION['user_id'] = $row[0];
		$_SESSION['user_name'] = $row[2];
		$_SESSION['userlevel'] = $row[4];
		$response['userlevel'] = $row[4];
		$_SESSION['sessioName']=session_id();
        $response['success']=1;
		$response['userid']=$row[0];
		$db->close();
		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
	else
	{
		$result2 = mysqli_query($db->connect(),"SELECT * FROM users WHERE username='".$email."' and Password='".$password."' ");
		if(mysqli_num_rows($result2) > 0)
		{
				
			removePreviusSessionIfExists();
			session_start();
			$row=mysqli_fetch_row($result2);
			$_SESSION['user_id'] = $row[0];
			$_SESSION['user_name'] = $row[2];
			$_SESSION['userlevel'] = $row[4];
			$response['userlevel'] = $row[4];
			$_SESSION['sessioName']=session_id();
			$response['success']=1;
			$response['userid']=$row[0];
			$db->close();
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
		else
		{
			$response['success']=0;
			$db->close();
			echo json_encode($response, JSON_UNESCAPED_UNICODE);
		}
	}
	
	
	function removePreviusSessionIfExists(){
		session_start();
		$sessionId=(string)session_id();
		$sessionNames = scandir(session_save_path());
        foreach($sessionNames as $sessionName) {
            if((strpos($sessionName,$sessionId) !== false)){
                session_destroy();
			}
		}
	}
?>