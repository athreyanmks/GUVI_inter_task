<?php

$myFile = "database_cred.txt";
$lines = file($myFile);//file in to an array
//var_dump($lines);


foreach($lines as $line)
{
    $var = explode(':', $line, 2);
    $arr[$var[0]] = $var[1];

}

$dbmsuname = preg_replace("/[^a-zA-Z0-9]+/","",$arr['username']);
$dbmspwd = preg_replace("/[^a-zA-Z0-9]+/","",$arr['password']);


 ?>
