<?php
	if (isset($_POST['submit'])){
		$company_name = $_POST['company_name'];
		$name = $_POST['name'];
		$mailFrom = $_POST['email'];
		$phonenumber = $_POST['phonenumber'];
		$message = $_POST['message'];

		$mailTo = 'sheeyao@hotmail.com';
		$header = "From: ".$mailFrom;
		$subject = "You have received an email from ".$company_name;
		$txt = "This email is written by ".$name." from ".$company_name."\n\n Contact Number: ".$phonenumb."\n\n Message:".$message;
		
		
		mail($mailTo,$subject,$txt,$header);
		header("Location: index.html?mailsend");	
		
		
		
		
	}






?>