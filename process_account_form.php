<?php

$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
$email = filter_input(INPUT_POST, 'email');
$phone = filter_input(INPUT_POST, 'phone');
$first_name = filter_input(INPUT_POST, 'first_name');
$last_name = filter_input(INPUT_POST, 'last_name');

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "quickmart";

//Database connection
$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

if(mysqli_connect_error()){
    die('Connection Failed');
}
else{
    $sql = "INSERT INTO accounts (Username, Password, email, PhoneNum, FirstName, LastName)
    values('$username', '$password', '$email', '$phone', '$first_name', '$last_name')"
    if ($conn->query($sql)){
        echo "New Account registered!";
    }
    else{
        echo "Error: ".$sql."<br>".$conn->error;
    }
    $conn->close();
}
?>