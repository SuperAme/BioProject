<?php
//$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Ejemplos\Ejemplos.fdb';
$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Empresa01\Datos\SAE70EMPRE01.FDB';
$username = "sysdba";
$password = "masterkey";

session_start();
$user = $_SESSION['usuario'];
$cve_vend = trim($_SESSION['cve_vend']);
    
    $gestor_db = ibase_connect($host,$username,$password,"UTF8");
    
    if ($gestor_db == true) {
       /* echo "Conexión exitosa :)";
        echo $cve_vend;
        echo $user;*/
        
            $sql = "SELECT STATUS,CVE_DOC FROM FACTC01 WHERE CVE_VEND like '%$cve_vend'";
        
            $gestor_sent = ibase_query($gestor_db, $sql);
            
            
            $table = "<table width='50%' border='1' cellpadding='10' cellspacing='0' bordercolor='#666666' style='border-collapse:collapse;'>\n<thead>\n <tr>\n";        
            $coln = ibase_num_fields($gestor_sent);
            for ($i = 0; $i < $coln; $i++) {
            $col = ibase_field_info($gestor_sent, $i);
            $table .= '<th>'.$col['alias'].'</th>';
            }
            $table .=	"		</tr>\n
                            </thead>\n";
            $table .= "<tbody>\n";
        
            $num_rows = 0;
            while ($row[$num_rows] = ibase_fetch_assoc($gestor_sent)) {
            $num_rows++;
        }
            for($i = 0; $i < $num_rows; $i++) {
            $table .= "<tr>\n";
            foreach($row[$i] as $field) {
                $table .= "<td>" . utf8_encode($field) . "</td>\n";
            }
            $table .= "</tr>\n";
        }
	
        $table .= "</tbody>\n".
                    "</table>";
            
            echo $table;

        ibase_free_result($gestor_sent);
        ibase_close($gestor_db);
            
        
    }
    else {
        echo "Error al conectar con la BD, consultalo con el Desarrollador!!";
    }


	

?>
