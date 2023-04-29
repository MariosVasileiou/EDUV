<?php
	include_once('../phpseclib1.0.9/Net/SSH2.php');
    include_once('../phpseclib1.0.9/Net/SFTP.php');
    include_once('AppTools.php');
    $response=array();  
	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT;
    mysqli_query($db->connect(), "SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");    
    $username=test_input($db->connect(),$_POST["username"]);
	$password=md5(test_input($db->connect(),$_POST["password"]));
	$result=mysqli_query($db->connect(),"SELECT * FROM admins WHERE username='".$username."' and password='".$password."'");	
	if(mysqli_num_rows($result) > 0){
		$row=mysqli_fetch_row($result);
		removePreviusSessionIfExists();
		session_start();
        $_SESSION['admin_id'] = $row[0];
        $response['success']=1;
		$db->close();
		echo json_encode($response);
	}
	else
	{
		$response['success']=0;
		$db->close();
		echo json_encode($response);
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