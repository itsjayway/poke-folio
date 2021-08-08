<?php
	$name = $_GET["sender_name"];
  $company = $_GET["sender_company"];
	$message = $_GET["sender_message"];
  // constants
  $subject = "Message from $name, $company"
	$to = "jga26@njit.edu";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	mail($to, $subject, $message, $headers);

?>
