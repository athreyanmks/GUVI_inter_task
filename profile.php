<?php
session_start();

include "database_cred.php";


if($_POST['id'] == $_SESSION['id'])
{
  $id = $_SESSION['id'];

  $conn = mysqli_connect("localhost", $dbmsuname,$dbmspwd,"guviInternTask");
  $result = $conn->query("SELECT * FROM userinfo WHERE id = '$id'");
  //$sttmnt->bind_param("i",$id);
  //$result = $sttmnt->execute();
  $row = $result->fetch_assoc();

  $jsonObj->fname = $row['fname'];
  $jsonObj->lname = $row['lname'];
  $jsonObj->uname = $row['uname'];

  $sql = "SELECT * FROM adddet WHERE id = '$id'";

  $result = $conn->query($sql);
  $row = $result->fetch_assoc();

  $jsonObj->dob = $row['dob'];
  $jsonObj->age = $row['age'];
  $jsonObj->cont = $row['cont'];

  $json = json_encode($jsonObj);

  echo $json;
}



 ?>
