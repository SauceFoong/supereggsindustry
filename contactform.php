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
		$txt = "This email is written by ".$name." from ".strtoupper($company_name)."\n\n Contact Number: ".$phonenumber."\n\n Message: ".$message;
		
		
		mail($mailTo,$subject,$txt,$header);
		echo "Form submitted successfully, thank you! Press "."<a href='index.html' style='text-decoration:none;color:blue;'>here</a> to return home.";
		
		
		
		
	}






?>