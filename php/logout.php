<?php 
    session_start();
    
    error_reporting(0);
    $user = $_SESSION['usuario'];
    if ($user == null || $user = '') {
        header("Location: ../error.html");
        die();
    }
session_destroy();
header("Location: ../index.php");

?>