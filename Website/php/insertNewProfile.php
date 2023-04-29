<?php
	include('../phpseclib1.0.9/Net/SSH2.php');
	include('../phpseclib1.0.9/Net/SFTP.php');
	include('AppTools.php');
	$responce=array();

	require_once __DIR__ . '/db_connect.php';
	$db=new DB_CONNECT();

	mysqli_query($db->connect(),"SET NAMES 'utf8'");
	mysqli_query($db->connect(),"SET CHARACTER SET 'utf8'");
	$email=($_POST["email"]);
	$result7 = mysqli_query($db->connect(),"SELECT * FROM verify WHERE email='".$email."'");
	if(mysqli_num_rows($result7) == 0)
	{
		$url = generateUrl("/EL_Greco/index.php");
		header($url);
		$db->close();
		exit();
	}
	else
	{
		//donothing
	}
	if(isset($_POST['username']) && isset($_POST['email']))
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
					move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
				}
			}
			else
			{
			$newfilename = $_POST["username"] . '.png';
			if(strcmp($_POST["gender"],"Άνδρας")==0)
			{
				copy("../images/boy.png","../User Images/".$newfilename);
				echo "<br/><b>Filetgo Name:</b> " . $_FILES["picture"]["name"] . "<br>";
			}
			else
			{
				copy("../images/girl.png","../User Images/".$newfilename);
				echo "<br/><b>Filetgo Name:</b> " . $_FILES["picture"]["name"] . "<br>";
			}
			}
		}
		else 
		{
			$url = generateUrl("/EL_Greco/Failure.php");
			$db->close();
			header($url);
		}
		$email=test_input($db->connect(),$_POST["email"]);
		$username = test_input($db->connect(),$_POST["username"]);
		$name = test_input($db->connect(),$_POST["name"]);
		$surname = test_input($db->connect(),$_POST["lastname"]);
		$gender = test_input($db->connect(),$_POST["gender"]);
		$dobday = test_input($db->connect(),$_POST["day"]);
		$dobmonth = test_input($db->connect(),$_POST["month"]);
		$dobyear = test_input($db->connect(),$_POST["year"]);
		$educationLevel = test_input($db->connect(),$_POST["educationLevel"]);
		$usertext = test_input($db->connect(),$_POST["publicinfo"]);
		$result=mysqli_query($db->connect(),"INSERT INTO profile (username, name, surname, gender, dobday, dobmonth, dobyear, loed, email, userText, profile_img) VALUES ('".$username."','".$name."','".$surname."','".$gender."','".$dobday."','".$dobmonth."','".$dobyear."','".$educationLevel."','".$email."','".$usertext."','".$newfilename."')");
		if($result)
		{	
			$result2=mysqli_query($db->connect(),"SELECT * FROM verify WHERE email='".$email."'");
			if(mysqli_num_rows($result2) > 0)
			{
				$row=mysqli_fetch_row($result2);
				$password = $row[2];
				$result3=mysqli_query($db->connect(),"INSERT INTO users (email, username, password) VALUES ('".$email."','".$username."','".$password."')");
					if($result3)
				{
					$result4=mysqli_query($db->connect(),"SELECT * FROM users WHERE email='".$email."'");
					if(mysqli_num_rows($result4) > 0)
					{
						$row2=mysqli_fetch_row($result4);
						$userid= $row2[0];
						$result5=mysqli_query($db->connect(),"UPDATE profile SET user_id =('".$userid."') WHERE email='".$email."'");
						if($result5)
						{
							$result6 = mysqli_query($db->connect(),"DELETE FROM verify WHERE email='".$email."'");
							if($result6)
							{
								$url = generateUrl("/EL_Greco/Success.php");
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
			}
			else
			{
				$url = generateUrl("/EL_Greco/Failure.php");
				$db->close();
				header($url);
			}
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