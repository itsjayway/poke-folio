<?php
	$name = $_GET["sender_name"];
  if (empty($_GET["sender_company"])) {
    $company = "N/A";
  }
  else {
    $company = $_GET["sender_company"];
  }
	$email = $_GET["sender_email"];
	$message = $_GET["sender_message"];
  // constants

  $subject = "Message from $name, $company, $email";
	$to = "jga26@njit.edu";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	mail($to, $subject, $message, $headers);

	echo "Message sent! Redirecting you home...";
	header("refresh: 3, url=../index.html");

?>
