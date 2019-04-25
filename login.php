<?php



session_start();

include "database_cred.php";
$conn = mysqli_connect("localhost", $dbmsuname,$dbmspwd,"guviInternTask");

$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

$pwd = sha1($pwd);

$sttmnt = $conn->prepare("SELECT id FROM userinfo where uname = ? AND pwd = ? ");
$sttmnt->bind_param("ss",$uname,$pwd);
$sttmnt->execute();

$result = $sttmnt->get_result();

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
