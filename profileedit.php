<?php

session_start();

$id = $_SESSION['id'];

//echo $dob;
//echo $age;
//echo $cont;
$conn = mysqli_connect("localhost", "root","apple123","guviInternTask");

if(!$conn->query("SHOW TABLES LIKE 'adddet'")->num_rows)
{
  $sql = "CREATE TABLE adddet(
    id INT(9) UNSIGNED NOT NULL,
    dob VARCHAR(10) ,
    age VARCHAR(5) ,
    cont VARCHAR(750),
    FOREIGN KEY id(id)
    REFERENCES userinfo(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
  )";

  if($conn->query($sql)===TRUE)
  {
    echo "Table created succesfully";
  }
  else {
    echo "Error:".$conn->error;
  }

}

$result = $conn->query("SELECT * FROM adddet WHERE id = '$id'");

$count = mysqli_num_rows($result);

if(!$count)
{
  $sttmnt = $conn->prepare("INSERT INTO adddet (id,dob,age,cont) VALUES (?,?,?,?)");

  $sttmnt->bind_param("isss",$id,$dob,$age,$cont);


  $id = $_SESSION['id'];
  $dob = $_POST['dob'];
  $age = $_POST['age'];
  $cont = $_POST['cont'];
  $sttmnt->execute();
}

else
{
  $sttmnt = $conn->prepare("UPDATE adddet SET dob=?,age=?,cont=? WHERE id=?");

  $sttmnt->bind_param("sssi",$dob,$age,$cont,$id);

  $id = $_SESSION['id'];
  $dob = $_POST['dob'];
  $age = $_POST['age'];
  $cont = $_POST['cont'];
  $sttmnt->execute();


}



 ?>
