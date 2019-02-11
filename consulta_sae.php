<?php
//$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Ejemplos\Ejemplos.fdb';
$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Empresa01\Datos\SAE70EMPRE01.FDB';
$username = "sysdba";
$password = "masterkey";

session_start();
$user = $_SESSION['usuario'];
$cve_vend = $_SESSION['cve_vend'];

/*Si pones echo no imprime resultados*/
    $gestor_db = ibase_connect($host,$username,$password,"UTF8");
    
    if ($gestor_db == true) {
        if($_SERVER['REQUEST_METHOD'] == "POST") {
            if (isset($_POST["get_clientes"])){
                $sql = "SELECT CLAVE,NOMBRE,RFC,SALDO FROM CLIE01 WHERE CVE_VEND = '$cve_vend'";
                //echo $sql;
            }
        if($_SERVER['REQUEST_METHOD'] == "POST") {
            if (isset($_POST["get_pedidos"])){
                $sql = "SELECT P.CVE_DOC,P.STATUS,P.DOC_SIG,C.NOMBRE AS CLIENTE FROM FACTP01 P LEFT JOIN CLIE01 C ON P.CVE_CLPV = C.CLAVE WHERE C.CVE_VEND = '$cve_vend'";
                //echo $sql;
            }    
        }    
                    
        if($_SERVER['REQUEST_METHOD'] == "POST") {
            if(isset($_POST["get_cotizaciones"])){
                $sql = "SELECT F.CVE_DOC,C.NOMBRE AS CLIENTE,F.IMPORTE,F.STATUS FROM FACTC01 F LEFT JOIN CLIE01 C ON F.CVE_CLPV = C.CLAVE WHERE C.CVE_VEND = '$cve_vend'";
            }
        }
            
            if (isset($_POST["get_totalSalidasEntradas"])) {
           //$sql = "SELECT CVE_ART,DESCR,LIN_PROD,EXIST,ROUND(COSTO_PROM,2) AS COSTO FROM INVE01 ";
           /*$sql = "SELECT DISTINCT(IV.CVE_ART),IV.DESCR,IV.LIN_PROD,IV.EXIST,PP.PRECIO AS PRECIO FROM INVE01 IV
                    LEFT JOIN PRECIO_X_PROD01 PP ON PP.CVE_ART = IV.CVE_ART";*/
             $sql = "SELECT DISTINCT(IV.CVE_ART),IV.DESCR,IV.LIN_PROD,IV.EXIST,PP.PRECIO AS PRECIO FROM INVE01 IV
                    LEFT JOIN PRECIO_X_PROD01 PP ON PP.CVE_ART = IV.CVE_ART
                     WHERE PP.CVE_PRECIO = 1";
             //echo $sql;
        }
        }
        
        
        
         
        
        $gestor_sent = ibase_query($gestor_db, $sql);

        $num_rows = 0;
        while ($rows[$num_rows] = ibase_fetch_assoc($gestor_sent)) {
            $num_rows++;
        }
        //echo $rows[0];
        //$result = $conn->query($sql);
         if ($num_rows > 0) {
            //$rows = array_map('utf8_encode_array', $rows);
            echo json_encode($rows);
        } else {
            echo "0 results";
        }
        
       

        ibase_free_result($gestor_sent);
        ibase_close($gestor_db);
    }

    
   

	

?>
