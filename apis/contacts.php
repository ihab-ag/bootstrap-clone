<?php
// connect to db
include("db_connection.php");
// select * query and execute
$query= $mysqli->prepare("SELECT * FROM contact_us");
$query->execute();
// get results from query
$array=$query->get_result();
// fill response
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}
// echo response
echo json_encode($response);
?>