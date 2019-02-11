<?php 
//$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Ejemplos\Ejemplos.fdb';
$host = 'C:\Program Files (x86)\Common Files\Aspel\Sistemas Aspel\SAE7.00\Empresa01\Datos\SAE70EMPRE01.FDB';
$username = "sysdba";
$password = "masterkey";

session_start();
$user = $_SESSION['usuario'];
$cve_vend = $_SESSION['cve_vend'];
    
$gestor_db = ibase_connect($host,$username,$password,"UTF8");
    
    if ($gestor_db == true) {
        $nombre_cli = utf8_decode($_POST["nombre_cli"]);           
        $numext = utf8_decode($_POST["numext"]);
        $numint = utf8_decode($_POST["numint"]);
        $calle1 = utf8_decode($_POST["calle1"]);
        $calle2 = utf8_decode($_POST["calle2"]);
        $cp = utf8_decode($_POST["cp"]);
        $calle = utf8_decode($_POST["calle"]);
        $refer = utf8_decode($_POST["refer"]);
        $poblacion = utf8_decode($_POST["poblacion"]);
        $estado = utf8_decode($_POST["estado"]);
        $pais = utf8_decode($_POST["pais"]);
        $municipio = utf8_decode($_POST["municipio"]);
        $nacion = utf8_decode($_POST["nacion"]);
        $clasif = utf8_decode($_POST["clasif"]);
        $RFC = utf8_decode($_POST["RFC"]);
        $curp = utf8_decode($_POST["curp"]);
        $web = utf8_decode($_POST["web"]);
        $tel = utf8_decode($_POST["tel"]);
        $colonia = utf8_decode($_POST["colonia"]);
        $email = utf8_decode($_POST["email"]);
        
        
        //echo "conexión exitosa\n";
        //$sql = "SELECT FIRST 1 CLAVE FROM CLIE01 ORDER BY CLAVE DESC";        
        $sql = "SELECT FIRST 1 CLAVE FROM CLIE01  WHERE CLAVE like ' %' ORDER BY CLAVE DESC";
        $gestor_sent = ibase_query($gestor_db,$sql);
        //echo $gestor_sent;
        $coln = ibase_num_fields($gestor_sent);
        
        while($row = ibase_fetch_object($gestor_sent)) {
            $contador = $row->CLAVE;
        }//echo "contador es: $contador";
        $id = ++$contador;
        $str = intval($id);
        //$str = "         ".$id;
        //echo $str;
        $data = random_bytes(16);
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); 
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); 
        $uuid = vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));    
        
        $datetime = gmdate("Y-m-d H:i:s");          
        //echo $id;      

        $sqlInsert = "INSERT INTO CLIE01 (CLAVE, STATUS, NOMBRE, RFC, CALLE, NUMINT, NUMEXT, CRUZAMIENTOS, CRUZAMIENTOS2, COLONIA, CODIGO, LOCALIDAD, MUNICIPIO, ESTADO, PAIS, NACIONALIDAD, REFERDIR, TELEFONO, CLASIFIC, FAX, PAG_WEB, CURP, CVE_ZONA, IMPRIR, MAIL, NIVELSEC, ENVIOSILEN, EMAILPRED, DIAREV, DIAPAGO, CON_CREDITO, DIASCRED, LIMCRED, SALDO, LISTA_PREC, CVE_BITA, ULT_PAGOD, ULT_PAGOM, ULT_PAGOF, DESCUENTO, ULT_VENTAD, ULT_COMPM, FCH_ULTCOM, VENTAS, CVE_VEND, CVE_OBS, TIPO_EMPRESA, MATRIZ, PROSPECTO, CALLE_ENVIO, NUMINT_ENVIO, NUMEXT_ENVIO, CRUZAMIENTOS_ENVIO, CRUZAMIENTOS_ENVIO2, COLONIA_ENVIO, LOCALIDAD_ENVIO, MUNICIPIO_ENVIO, ESTADO_ENVIO, PAIS_ENVIO, CODIGO_ENVIO, CVE_ZONA_ENVIO, REFERENCIA_ENVIO, CUENTA_CONTABLE, ADDENDAF, ADDENDAD, NAMESPACE, METODODEPAGO, NUMCTAPAGO, MODELO, DES_IMPU1, DES_IMPU2, DES_IMPU3, DES_IMPU4, DES_PER, LAT_GENERAL, LON_GENERAL, LAT_ENVIO, LON_ENVIO, UUID, VERSION_SINC, USO_CFDI, CVE_PAIS_SAT, NUMIDREGFISCAL, FORMADEPAGOSAT) VALUES('   $str', 'A', '$nombre_cli', '$RFC', '$calle', '$numint', '$numext', '$calle1', '$calle2', '$colonia', '$cp', '$poblacion', '$municipio', '$estado', '$pais', '$nacion', '$refer', '$tel', '$clasif', NULL, '$web', '$curp', '', 'S', 'S', 0, 'N', '$email', NULL, NULL, 'S', 0, 0, 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, 0, '$cve_vend', 0, 'M', ' 1', 'N', '$calle', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'N', 'N', 'N', 'N', 'N', 0, 0, 0, 0,'$uuid', '$datetime' , NULL, NULL, NULL, NULL)";
        //echo $sqlInsert;
        $gestor_sent = ibase_query($gestor_db, $sqlInsert);
        if(ibase_affected_rows()>0) {
            $sqlUpdate = "UPDATE TBLCONTROL01 SET ULT_CVE=$contador WHERE ID_TABLA=0";       
            $gestor_sent = ibase_query($gestor_db, $sqlUpdate);
            echo "insert";
        } else {
            echo "Error";
            //echo ibase_errcode();
        }
         
       
        
            
        
    }  else {
        echo "Error al conectar con la BD, consultalo con el Desarrollador!!";
    }
?>




