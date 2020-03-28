<?php
$name=$_POST['name'];
#$request=$_POST['request'];
$to='abhinaay.bhatt@gmail.com';
$subject=$_POST['subject'];
$body=$_POST['message'];
$headers = 'From: noreply@portfolio.com';

mail($to,$subject,$body,$headers);

?>	