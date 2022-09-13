<?php
// connect to db
include("db_connection");
// get values to insert
$name=$_POST['fullname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
// insert query
$query = $mysqli->prepare("INSERT INTO contact_us(fullname, email, phone, message) VALUE (?, ?, ?, ?)");
// bind values
$query->bind_param("ssss", $name, $email, $phone, $message);
// excute query
$query->excute();
?>