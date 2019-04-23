<?php

$conn = mysqli_connect("localhost", "root","apple123");



$sql = "CREATE DATABASE IF NOT EXISTS guviInternTask";
if ($conn->query($sql) === TRUE) {
    //echo "Database created successfully";
} else {
    //echo "Error creating database: " . $conn->error;
}

mysqli_close($conn);

$conn = mysqli_connect("localhost", "root","apple123","guviInternTask");

if(!$conn->query("SHOW TABLES LIKE 'userinfo'")->num_rows)
{
  $sql = "CREATE TABLE userinfo(
    id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(30) NOT NULL,
    lname VARCHAR(30) NOT NULL,
    uname VARCHAR(30) NOT NULL,
    pwd VARCHAR(300) NOT NULL,
    rpwd VARCHAR(300) NOT NULL
  )";

  if($conn->query($sql)===TRUE)
  {
    echo "Table created succesfully";
  }
  else {
    echo "Error:".$conn->error;
  }

}

$sttmnt = $conn->prepare("INSERT INTO userinfo(fname,lname,uname,pwd,rpwd) values(?,?,?,?,?)");
$sttmnt->bind_param("sssss",$fname,$lname,$uname,$pwd,$rpwd);


$fname = $_POST['fname'];
$lname = $_POST['lname'];
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];
$rpwd = $_POST['rpwd'];

$pwd = sha1($pwd);
$rpwd = sha1($rpwd);

$sttmnt->execute();

//echo $conn->error;

?>
