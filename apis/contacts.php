<?php
// connect to db
include("db_connection.php");
// select * query and execute
$query= $mysqli=>prepare("SELECT * FROM contact_us");
$query=>execute();
?>