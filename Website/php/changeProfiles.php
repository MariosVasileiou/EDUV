<?php
	include('../phpseclib1.0.9/Net/SSH2.php');
	include('../phpseclib1.0.9/Net/SFTP.php');
	include('AppTools.php');
	require_once __DIR__ . '/db_connect.php';
	session_start();
	if(!isset($_SESSION["user_id"])){
	$url = generateUrl("/EL_Greco/index.php");
    header($url);
    exit();
	}
	$db=new DB_CONNECT();
	mysqli_query($db->connect(),"SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
	$userid= test_input($db->connect(),$_SESSION["user_id"]);
	if(isset($_POST['first_name']) && isset($_POST['last_name']))
	{	
		if(isset($_FILES["picture"]["type"]))
		{
			$validextensions = array("jpeg", "jpg", "png");
			$temporary = explode(".", $_FILES["picture"]["name"]);
			$file_extension = end($temporary);
			if ((($_FILES["picture"]["type"] == "image/png") ||($_FILES["picture"]["type"] == "image/jpg") || ($_FILES["picture"]["type"] == "image/jpeg")
			) && ($_FILES["picture"]["size"] < 256000)//Approx. 100kb files can be uploaded.
			&& in_array($file_extension, $validextensions)) 
			{
				if ($_FILES["picture"]["error"] > 0)
				{
					$url = generateUrl("/EL_Greco/Failure.php");
					header($url);
				}
				else
				{
					$newfilename = $_POST["username"] . '.' . end($temporary);
					$sourcePath = $_FILES['picture']['tmp_name']; // Storing source path of the file in a variable
					$targetPath = "../User Images/".$newfilename; // Target path where file is to be stored
					if (file_exists($targetPath)) 
						{
							unlink($targetPath);
						} 
					move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
					if(end($temporary) == "png")
					{
						$targetPath1 = "../User Images/".$_POST["username"] . '.jpg';
						$targetPath2 = "../User Images/".$_POST["username"] . '.jpeg';
						if (file_exists($targetPath1)) 
						{
							unlink($targetPath1);
						}
						if (file_exists($targetPath2)) 
						{
							unlink($targetPath2);
						} 
					}
					else if(end($temporary) == "jpg")
					{
						$targetPath1 = "../User Images/".$_POST["username"] . '.png';
						$targetPath2 = "../User Images/".$_POST["username"] . '.jpeg';
						if (file_exists($targetPath1)) 
						{
							unlink($targetPath1);
						}
						if (file_exists($targetPath2)) 
						{
							unlink($targetPath2);
						} 
					}
					else
					{
						$targetPath1 = "../User Images/".$_POST["username"] . '.jpg';
						$targetPath2 = "../User Images/".$_POST["username"] . '.jpeg';
						if (file_exists($targetPath1)) 
						{
							unlink($targetPath1);
						}
						if (file_exists($targetPath2)) 
						{
							unlink($targetPath2);
						} 
					}

					$result2=mysqli_query($db->connect(),"UPDATE profile SET profile_img =('".$newfilename."')  WHERE user_id ='".$userid."'");
					if($result2)
					{	
						
					}else
					{	
						$url = generateUrl("/EL_Greco/Failure.php");
						$db->close();
						header($url);
					}	
				}
			}
			else
			{
				//donothing
			}
		}
		else 
		{
			$url = generateUrl("/EL_Greco/Failure.php");
			$db->close();
			header($url);
		}
		$name = test_input($db->connect(),$_POST["first_name"]);
		$surname = test_input($db->connect(),$_POST["last_name"]);
		$educationLevel = test_input($db->connect(),$_POST["educationLevel"]);
		$usertext = test_input($db->connect(),$_POST["publicinfo"]);
		$result=mysqli_query($db->connect(),"UPDATE profile SET name =('".$name."'), surname =('".$surname."'), loed =('".$educationLevel."'), userText =('".$usertext."')  WHERE user_id ='".$userid."'");
		if($result)
		{	
			$url = generateUrl("/EL_Greco/changeProfile.php?profileChanged=1");
			$db->close();
			?><script>
				window.location.href = "../changeProfile.php?profileChanged=1";
			</script><?php
		}else
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