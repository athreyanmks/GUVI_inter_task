<?php
session_start();

include "database_cred.php";


if($_POST['id'] == $_SESSION['id'])
{
  $id = $_SESSION['id'];

  $conn = mysqli_connect("localhost", $dbmsuname,$dbmspwd,"guviInternTask");
  $sttmnt = $conn->prepare("SELECT * FROM userinfo WHERE id = ? ");
  $sttmnt->bind_param("i",$id);
  $sttmnt->execute();
  $result = $sttmnt->get_result();
  $row = $result->fetch_assoc();

  $jsonObj->fname = $row['fname'];
  $jsonObj->lname = $row['lname'];
  $jsonObj->uname = $row['uname'];

  $sttmnt = $conn->prepare("SELECT * FROM adddet WHERE id = ? ");

  $sttmnt->bind_param("i",$id);
  $sttmnt->execute();
  $result = $sttmnt->get_result();
  $row = $result->fetch_assoc();

  $jsonObj->dob = $row['dob'];
  $jsonObj->age = $row['age'];
  $jsonObj->cont = $row['cont'];

  $json = json_encode($jsonObj);

  echo $json;
}



 ?>
