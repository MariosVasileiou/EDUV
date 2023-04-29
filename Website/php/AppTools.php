<?php
    function test_input( $conn, $data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        $data = mysqli_real_escape_string($conn ,$data);
        return $data;
    }
	
	function generateUrl($filePath){
		$url="Location: http://localhost"; //panepistimiou 195.251.166.47
		$url.= $filePath;
		return $url;
	}

	function generateUrl2($filePath){
		$url="http://localhost"; //panepistimiou 195.251.166.47
		$url.= $filePath;
		return $url;
	}
?>