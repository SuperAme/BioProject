<?php
session_start();
$user = $_SESSION['usuario'];
$_POST['observ'];
$_POST['cli'];
$observ = $_POST['observ'];
$obsPart = $_POST['part'];
//echo $_POST['cli'];
$name = "Pedido";
$from_email = "cotiza@bionourisso.com";
$subject = "Pedido de: $user";
$bodyText = "Haz recibido un pedido \n\n".
            "con observaciones del producto: $observ \n\n";
require 'PHPMailerAutoload.php';
//seccion correo******************************************

$mail = new PHPMailer;
$mail->setFrom($from_email, $name);
$mail->addAddress('cotiza@bionourisso.com');
$mail->Subject = $subject;
$mail->Body = $bodyText;
$mail->IsHTML(true);

$mail->CharSet="utf-8";
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = 'cotiza@bionourisso.com';
$mail->Password = 'bionourisso123';
//$mail->SMTPSecure = 'tls';
$mail->Port = 587;

//seccion correo******************************************

$modFileName = "Pedido_".date("d-m-Y\THi").".mod";

$mod = prepareMod();

//echo $modFileName;
$modfile = fopen($modFileName, "w") or die("Unable to open file!");
fwrite($modfile, $mod);
fclose($modfile);
$modPath = realpath($modFileName);
//echo $modPath;
//Attach an image file
$mail->addAttachment($modPath);

//send the message, check for errors
if ($mail->send()) {
    echo "Pedido enviado";
    
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

function prepareMod () {
    if($_POST['cli'] > 10){
        $modcabecera .= '<ROW RowState="4" CVE_CLPV=" '.$_POST["cli"].'" NUM_ALMA="1" CVE_PEDI="" ESQUEMA="1" DES_TOT="0" DES_FIN="0" CVE_VEND="" COM_TOT="0" NUM_MONED="1" TIPCAMB="1" STR_OBS="" MODULO="FACT" CONDICION="">';
    }else{
        $modcabecera .= '<ROW RowState="4" CVE_CLPV=" '.$_POST["cli"].'" NUM_ALMA="1" CVE_PEDI="" ESQUEMA="1" DES_TOT="0" DES_FIN="0" CVE_VEND="" COM_TOT="0" NUM_MONED="1" TIPCAMB="1" STR_OBS="" MODULO="FACT" CONDICION="">';
    }
    //$numClie = str_pad($numClie,10," ",STR_PAD_LEFT);
    
    $modProds = "";
    $changeLogA = "1 0 4";
    $changeLogB = "1 0 4 1 1 64";
    
    foreach ($_POST["keyProds"] as $key=>$value) {        
        
        $cveArt = $value['CVE_ART'];        
        $cant = $value['cant'];
        $precio = $value['PRECIO'];
        $subt = $value['SUBTOTAL'];
        $ObsProd = $value['part'];
        $sub =  $precio* $cant;
        $tot = $sub + $tot;
        
        
       
        $modProds .= '<ROWdtfield RowState="4" CANT="'.$cant.'" CVE_ART="'.$cveArt.'" DESC1="0" DESC2="0" DESC3="0" IMPU1="0" IMPU2="0" IMPU3="0" IMPU4="16" COMI="0" PREC="'.$precio.'" NUM_ALM="1" STR_OBS="'.$ObsProd.'" G_GPOPROD="0" COSTO="0" TIPO_PROD="P" TIPO_ELEM="N" TIP_CAM="1" UNI_VENTA="" IMP1APLA="4" IMP2APLA="4" IMP3APLA="4" IMP4APLA="0" PREC_SINREDO="" COST_SINREDO="" LINK_FIELD="'.($key+1).'"/>';
       
        
         
        //$modProds .= '<ROWdtfield RowState="4" CANT="'.$cant.'" CVE_ART="'.$cveArt.'" DESC1="0" IMPU1="0" IMPU2="0" IMPU3="0" IMPU4="16" PREC="" NUM_ALM="10" STR_OBS="" REG_GPOPROD="0" COSTO="" TIPO_PROD="P" TIPO_ELEM="N" MINDIRECTO="0" TIP_CAM="1" FACT_CONV="1" UNI_VENTA="" IMP1APLA="4" IMP2APLA="4" IMP3APLA="4" IMP4APLA="0" PREC_SINREDO="" COST_SINREDO="" LINK_FIELD="'.($key+1).'"/>';
        
        if ($key > 0) {
            $changeLogA .= " ".($key+1)." 0 4";
            $changeLogB .= " 1 1 64";
        }
    }echo "Total: ".$tot."\n";
   
    $mod = '<?xml version="1.0" standalone="yes"?>
            <DATAPACKET Version="2.0">
                <METADATA>
                    <FIELDS>
                        <FIELD attrname="CVE_CLPV" fieldtype="string" WIDTH="10"/>
                        <FIELD attrname="NUM_ALMA" fieldtype="i4"/>
                        <FIELD attrname="CVE_PEDI" fieldtype="string" WIDTH="20"/>
                        <FIELD attrname="ESQUEMA" fieldtype="i4"/>
                        <FIELD attrname="DES_TOT" fieldtype="r8"/>
                        <FIELD attrname="DES_FIN" fieldtype="r8"/>
                        <FIELD attrname="CVE_VEND" fieldtype="string" WIDTH="5"/>
                        <FIELD attrname="COM_TOT" fieldtype="r8"/>
                        <FIELD attrname="NUM_MONED" fieldtype="i4"/>
                        <FIELD attrname="TIPCAMB" fieldtype="r8"/>
                        <FIELD attrname="STR_OBS" fieldtype="string" WIDTH="255"/>
                        <FIELD attrname="ENTREGA" fieldtype="string" WIDTH="25"/>
                        <FIELD attrname="SU_REFER" fieldtype="string" WIDTH="20"/>
                        <FIELD attrname="TOT_IND" fieldtype="r8"/>
                        <FIELD attrname="MODULO" fieldtype="string" WIDTH="4"/>
                        <FIELD attrname="CONDICION" fieldtype="string" WIDTH="25"/>
                        <FIELD attrname="dtfield" fieldtype="nested">
                            <FIELDS>
                                <FIELD attrname="CANT" fieldtype="r8"/>
                                <FIELD attrname="CVE_ART" fieldtype="string" WIDTH="20"/>
                                <FIELD attrname="DESC1" fieldtype="r8"/>
                                <FIELD attrname="DESC2" fieldtype="r8"/>
                                <FIELD attrname="DESC3" fieldtype="r8"/>
                                <FIELD attrname="IMPU1" fieldtype="r8"/>
                                <FIELD attrname="IMPU2" fieldtype="r8"/>
                                <FIELD attrname="IMPU3" fieldtype="r8"/>
                                <FIELD attrname="IMPU4" fieldtype="r8"/>
                                <FIELD attrname="COMI" fieldtype="r8"/>
                                <FIELD attrname="PREC" fieldtype="r8"/>
                                <FIELD attrname="NUM_ALM" fieldtype="i4"/>
                                <FIELD attrname="STR_OBS" fieldtype="string" WIDTH="255"/>
                                <FIELD attrname="REG_GPOPROD" fieldtype="i4"/>
                                <FIELD attrname="REG_KITPROD" fieldtype="i4"/>
                                <FIELD attrname="NUM_REG" fieldtype="i4"/>
                                <FIELD attrname="COSTO" fieldtype="r8"/>
                                <FIELD attrname="TIPO_PROD" fieldtype="string" WIDTH="1"/>
                                <FIELD attrname="TIPO_ELEM" fieldtype="string" WIDTH="1"/>
                                <FIELD attrname="MINDIRECTO" fieldtype="r8"/>
                                <FIELD attrname="TIP_CAM" fieldtype="r8"/>
                                <FIELD attrname="FACT_CONV" fieldtype="r8"/>
                                <FIELD attrname="UNI_VENTA" fieldtype="string" WIDTH="10"/>
                                <FIELD attrname="IMP1APLA" fieldtype="i4"/>
                                <FIELD attrname="IMP2APLA" fieldtype="i4"/>
                                <FIELD attrname="IMP3APLA" fieldtype="i4"/>
                                <FIELD attrname="IMP4APLA" fieldtype="i4"/>
                                <FIELD attrname="PREC_SINREDO" fieldtype="r8"/>
                                <FIELD attrname="COST_SINREDO" fieldtype="r8"/>
                                <FIELD attrname="LINK_FIELD" fieldtype="ui4" hidden="true" linkfield="true"/>
                            </FIELDS>
                            <PARAMS CHANGE_LOG="'.$changeLogA.'"/>
                        </FIELD>
                    </FIELDS>
                    <PARAMS CHANGE_LOG="'.$changeLogB.'"/>
                </METADATA>
                <ROWDATA>
                    '.$modcabecera.'
                        <dtfield>'.$modProds.'</dtfield>                    
                    </ROW>
                </ROWDATA>
            </DATAPACKET>';
    
    return $mod;
}



?>
