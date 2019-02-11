<?php 
session_start();
//$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Ejemplos\Ejemplos.fdb';
$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Empresa01\Datos\SAE70EMPRE01.FDB';
$username = "sysdba";
$password = "masterkey";

$gestor_db = ibase_connect($host,$username,$password,"UTF8");


if ($gestor_db == true) {
    //echo "bien";
    $usuario = $_POST["inputVendedor"];    
    $contra = $_POST["inputPassword"];
    
    $stmt = "SELECT * FROM VEND01 WHERE CVE_VEND = $usuario AND CLASIFIC = '$contra'";
    //echo $stmt;
   
    $gestor_sent = ibase_query($gestor_db,$stmt);
    
    /*$num_rows = 0;
        while ($rows[$num_rows] = ibase_fetch_assoc($gestor_sent)) {
            print_r($rows[$num_rows]);
            $num_rows++;
        }*/ 
    $rows = ibase_fetch_row($gestor_sent);    
        //$result = $conn->query($sql);
        if ($rows > 0) {           
            $_SESSION['usuario'] = $rows[2];
            $_SESSION['cve_vend'] = $rows[0];
            //echo $_SESSION['usuario'];
            //echo $_SESSION['cve_vend'];
            header("Location: ../principal.php");
        } else {
            //echo "0 results";
           header("Location: ../error.html");
        }
   
    
if (isset($_POST["logout"])) {
     session_unset();
}

        ibase_free_result($gestor_sent);
        ibase_close($gestor_db);
    
} else {
    echo "Error al conectar con la BD, consultalo con el Desarrollador!!";
}


?>