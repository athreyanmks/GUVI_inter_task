<?php

session_start();

$conn = mysqli_connect("localhost", "root","apple123","guviInternTask");

$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

$pwd = sha1($pwd);

$sql = "SELECT id FROM userinfo where uname = '$uname' AND pwd = '$pwd'";

$result = $conn->query($sql);

$row = $result->fetch_assoc();

if($row['id'])
{
  $_SESSION['id'] = $row['id'];

  echo $_SESSION['id'];
}

else {
  echo 0;
  session_destroy();
}

//header("Location: profile.html");


 ?>
