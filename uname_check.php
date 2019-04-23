<?php

session_start();

$conn = mysqli_connect("localhost", "root","apple123","guviInternTask");

$uname = $_POST['uname'];
$sql = "SELECT COUNT(*) as total FROM userinfo WHERE uname = '$uname'";
/*$sttmnt->bind_param("s",$uname);

$result = $sttmnt->execute();*/

$result = $conn->query($sql);

$row = $result->fetch_assoc();

$count = $row['total'];

echo $count;





 ?>
