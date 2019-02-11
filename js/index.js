$(document).ready(function() {
    $("#clientes").css("background-color", "gray");
    
    var recepTable;
    var clieTable;
    var nombre;
   
    $(document).on("click","#clientes",function(){
        $(".table_clientes").removeClass("hidden");
        $(".table_cotizaciones").addClass("hidden");
        $(".table_pedidos").addClass("hidden");
        $(".table_productos").addClass("hidden");
        $("#btn-modRecep").addClass("hidden");
        $(".pagination").addClass("hidden");
        $("#nombre").addClass("hidden");
        $(".busqueda").addClass("hidden");
        $(".form-control").addClass("hidden");
        $(".table_clie").removeClass("hidden");
        $("#clieTable").removeClass("hidden");
        $("#combobox").addClass("hidden");
        $("#observ_text").addClass("hidden");
        $("#form").addClass("hidden");
        $("#alta-form").addClass("hidden");
        $(this).css("background-color", "gray");
        $("#cotizaciones").css("background-color", "white");
        $("#pedidos").css("background-color", "white");
        $("#productos").css("background-color", "white");
        $("#Alta").css("background-color", "white");
        $("#cliepag").removeClass("hidden");
        $("#cotpag").addClass("hidden");
        $("#pedipag").addClass("hidden");
        $("#observ_part").addClass("hidden");
        $("#contenedor_productos").addClass("hidden");
        $("#tabla_productos").addClass("hidden");
    });
    $(document).on("click","#cotizaciones",function(){
       $(".table_cotizaciones").removeClass("hidden");
       $(".table_clientes").addClass("hidden");
       $(".table_pedidos").addClass("hidden");
       $(".table_productos").addClass("hidden");
       $("#btn-modRecep").addClass("hidden");
       $(".pagination").addClass("hidden");
       $("#nombre").addClass("hidden");
       $(".busqueda").addClass("hidden");
       $(".form-control").addClass("hidden");
       $(".table_clie").addClass("hidden");
       $("#combobox").addClass("hidden");
        $("#observ_text").addClass("hidden");
        $("#form").addClass("hidden");
        $("#alta-form").addClass("hidden");
        $(this).css("background-color", "gray");
        $("#clientes").css("background-color", "white");
        $("#pedidos").css("background-color", "white");
        $("#productos").css("background-color", "white");
        $("#Alta").css("background-color", "white");
        $("#cliepag").addClass("hidden");
        $("#cotpag").removeClass("hidden");
        $("#pedipag").addClass("hidden");
        $("#observ_part").addClass("hidden");
        $("#contenedor_productos").addClass("hidden");
        $("#tabla_productos").addClass("hidden");
    });
    $(document).on("click","#pedidos",function(){
       $(".table_clientes").addClass("hidden");
       $(".table_cotizaciones").addClass("hidden");
       $(".table_productos").addClass("hidden");
       $(".table_pedidos").removeClass("hidden");
       $("#btn-modRecep").addClass("hidden");
       $(".pagination").addClass("hidden");
       $("#nombre").addClass("hidden");
       $(".busqueda").addClass("hidden");
       $(".form-control").addClass("hidden");
       $(".table_clie").addClass("hidden");
       $("#combobox").addClass("hidden");
        $("#observ_text").addClass("hidden");
        $("#form").addClass("hidden");
        $("#alta-form").addClass("hidden");
        $(this).css("background-color", "gray");
        $("#clientes").css("background-color", "white");
        $("#cotizaciones").css("background-color", "white");
        $("#productos").css("background-color", "white");
        $("#Alta").css("background-color", "white");
        $("#cliepag").addClass("hidden");
        $("#cotpag").addClass("hidden");
        $("#pedipag").removeClass("hidden");
        $("#observ_part").addClass("hidden");
        $("#contenedor_productos").addClass("hidden");
        $("#tabla_productos").addClass("hidden");
    });
    $(document).on("click","#productos",function(){
       /*$("#btn-modRecep").removeClass("hidden");boton para generar model seccion productos*/
       $("#btn-modRecep").addClass("hidden");
       $(".table_clientes").addClass("hidden");
       $(".table_cotizaciones").addClass("hidden");
       $(".table_pedidos").addClass("hidden");
       $(".table_productos").removeClass("hidden");       
       $(".pagination").removeClass("hidden");
       $("#nombre").removeClass("hidden");
       $(".busqueda").addClass("hidden");/*busqueda por clave*/
       $(".form-control").removeClass("hidden");
       $(".table_clie").addClass("hidden");
       $("#clieTable").addClass("hidden");
       $("#combobox").addClass("hidden");/*Combo box de cliente al que se le genera el modelo de recepcion*/
        $("#observ_text").removeClass("hidden");
        $("#form").addClass("hidden");
        $("#alta-form").addClass("hidden");
        $(this).css("background-color", "gray");
        $("#clientes").css("background-color", "white");
        $("#cotizaciones").css("background-color", "white");
        $("#pedidos").css("background-color", "white");
        $("#Alta").css("background-color", "white");
        $("#cliepag").addClass("hidden");
        $("#cotpag").addClass("hidden");
        $("#pedipag").addClass("hidden");
        $("#observ_part").removeClass("hidden");
        $("#contenedor_productos").removeClass("hidden");
        $("#tabla_productos").removeClass("hidden");
    });
    $(document).on("click","#Alta",function(){
        $("#btn-modRecep").addClass("hidden");
       $(".table_clientes").addClass("hidden");
       $(".table_cotizaciones").addClass("hidden");
       $(".table_pedidos").addClass("hidden");
       $(".table_productos").addClass("hidden");
       $("#btn-modRecep").addClass("hidden");
       $(".pagination").addClass("hidden");
       $("#nombre").addClass("hidden");
       $(".busqueda").addClass("hidden");
       $(".form-control").addClass("hidden");
       $(".table_clie").addClass("hidden");
       $("#clieTable").addClass("hidden");
       $("#combobox").addClass("hidden");
        $("#observ_text").addClass("hidden");
       $("#form").removeClass("hidden");
        $("#alta-form").removeClass("hidden");
        $(this).css("background-color", "gray");
        $("#clientes").css("background-color", "white");
        $("#cotizaciones").css("background-color", "white");
        $("#pedidos").css("background-color", "white");
        $("#productos").css("background-color", "white");
        $("#cliepag").addClass("hidden");
        $("#cotpag").addClass("hidden");
        $("#pedipag").addClass("hidden");
        $("#observ_part").addClass("hidden");
        $("#contenedor_productos").addClass("hidden");
        $("#tabla_productos").addClass("hidden");
    });
    
    $("#insertar-cliente").click(function(){        
         insertar();
    });
   
    
    
     //--Imprime todos los clientes del vendedor
        $.post("/Bionourisso/consulta_sae.php", {"get_clientes":true})
            .done(function(data){           
            //console.log(data);
            if (data != "0 results") {
                //console.log(data);
                var prods = $.parseJSON(data);
                var entradas;
                for (var x in prods) {
                    if (prods[x]){
                        $("#clieTable tbody")
                        .append("<tr>"+
                                "<td class='CLAVE'>"+prods[x]["CLAVE"]+"</td>"+
                                "<td class='NOMBRE'>"+prods[x]["NOMBRE"]+"</td>"+
                                "<td class='RFC'>"+prods[x]["RFC"]+"</td>"+
                                "<td class='SALDO'>"+prods[x]["SALDO"]+"</td>"+                               
                                "</tr>");
                    }
                }//--Activa la búsqueda y paginación de la tabla de materiales para la remisión
                clieTable = new List('clieTable', {
                  valueNames: ['CLAVE', 'NOMBRE', 'TELEFONO', 'SALDO'],
                  page: 20,
                  pagination: true
                }); 
            }else {
                $("#clieTable tbody").append("<tr><td colspan='5'>No clientes</td></tr>");
            }
        });
    
    
        //--Imprime todos los pedidos del vendedor
         $.post("/Bionourisso/consulta_sae.php", {"get_pedidos": true})
            .done( function(data) {
            //console.log(data);
            if (data != "0 results") {
               var prods = $.parseJSON(data);
                var entradas;                
                for (var x in prods) {
                    if (prods[x]) {
                        //entradas = prods[x]["CVE_ART"];                        
                        
                        $("#pedTable tbody")
                            .append("<tr>"+
                                        "<td class='CVE_DOC'>"+prods[x]["CVE_DOC"]+"</td>"+
                                        "<td class='STATUS'>"+prods[x]["STATUS"]+"</td>"+
                                        "<td class='DOC_SIG'>"+prods[x]["DOC_SIG"]+"</td>"+
                                        "<td class='CLIENTE'>"+prods[x]["CLIENTE"]+"</td>"+                                        
                                    "</tr>");
                    }
                }
                
                //--Activa la búsqueda y paginación de la tabla de materiales para la remisión
                pedTable = new List('pedTable', {
                  valueNames: ['CVE_DOC','STATUS','DOC_SIG','CVE_DOC'],
                  page: 15,
                  pagination: true
                });                
               
                
            } else {
                $("#pedTable tbody").append("<tr><td colspan='5'>SIN PEDIDOS</td></tr>");
            }
        });
    
    
    //--Imprime todas las cotizaciones del cliente
    
    $.post("/Bionourisso/consulta_sae.php", {"get_cotizaciones": true})
            .done( function(data) {
            //console.log(data);
            if (data != "0 results") {
               var prods = $.parseJSON(data);
                var entradas;                
                for (var x in prods) {
                    if (prods[x]) {
                        //entradas = prods[x]["CVE_ART"];                        
                        
                        $("#cotTable tbody")
                            .append("<tr>"+
                                        "<td class='CVE_DOC'>"+prods[x]["CVE_DOC"]+"</td>"+
                                        "<td class='CLIENTE'>"+prods[x]["CLIENTE"]+"</td>"+
                                        "<td class='IMPORTE'>"+prods[x]["IMPORTE"]+"</td>"+
                                        "<td class='STATUS'>"+prods[x]["STATUS"]+"</td>"+                                      
                                    "</tr>");
                    }
                }

                //--Activa la búsqueda y paginación de la tabla de materiales para la remisión
                cotTable = new List('cotTable', {
                  valueNames: ['CVE_DOC', 'CLIENTE', 'IMPORTE', 'STATUS'],
                  page: 20,
                  pagination: true
                });                
               
                
            } else {
                $("#cotTable tbody").append("<tr><td colspan='5'>ERROR</td></tr>");
            }
        });
    
        $(document).on('keyup', '.input-cant', function() {
         $(this).parents("tr").find(".cant").text($(this).val());
         var uno = $(this).val();
            //console.log(uno);
         var dos = $(this).parents("tr").find(".PRECIO").text();
         var dos = parseInt(dos);
         var total = 0;
         var subtotal = parseInt(uno) * dos;
        if(Number.isNaN(subtotal)){
            var subtotalRes = $(this).parents("tr").find(".SUBTOTAL").text(subtotal);           
        } else {
            var subtotalRes = $(this).parents("tr").find(".SUBTOTAL").text(subtotal);            
        }       
            //$('.table_productos tfoot tr th:last-child').eq(6).text(subtotal);            
    });
        $(document).on('keyup', '.input-part',function() {
            $(this).parents("tr").find(".part").text($(this).val());
        });
    
        $("#btn-modRecep").click(function() {
            
        var observ = $('#observ_text').val();
        if(confirm("Estan correctos tus datos??")){
            $(".loader").show();
            //alert(confirm("desea continuar"));
        //console.log($('select[name="combobox"] option:selected').text());
        var cliente = $('select[name="combobox"] option:selected').text();
            var cli = cliente.substr(1,9);
            //console.log(cli);
            //saco el valor accediendo al id del input = nombre
        
            
        var prods = [];
        var idx = 0;
        var cap = false;
        var cant = 0;
        var part;
        var precio;
        var subtotal;
        prods.push({name: "observ",value:observ});
        prods.push({name: "cli",value:cli});
        prods.push({name: "subtotal",value:subtotal});
            
        recepTable.reindex();
        var items = recepTable.items;
        //console.log(items);
        for (var x in items) {
            
            cant = parseInt(items[x].values().cant);
            part = items[x].values().part;            
            precio = items[x].values().precio;
            subtotal = items[x].values().SUBTOTAL;
            
            if (!isNaN(cant) && cant > 0) {
                
                //console.log("xx");
                prods.push({name: "keyProds["+idx+"][CVE_ART]", value: items[x].values().CVE_ART});
                prods.push({name: "keyProds["+idx+"][DESCR]", value: items[x].values().DESCR});
                prods.push({name: "keyProds["+idx+"][LIN_PROD]", value: items[x].values().LIN_PROD});
                prods.push({name: "keyProds["+idx+"][EXIST]", value: items[x].values().EXIST});
                prods.push({name: "keyProds["+idx+"][cant]", value: items[x].values().cant});
                prods.push({name: "keyProds["+idx+"][part]", value: items[x].values().part});
                prods.push({name: "keyProds["+idx+"][PRECIO]", value: items[x].values().PRECIO});
                prods.push({name: "keyProds["+idx+"][SUBTOTAL]", value: items[x].values().SUBTOTAL});
                //cli.push({name: "array["+cli+"]",value: $("#nombre").val()});
                
                idx++;
                cap = true;
                //console.log(cap);
            }
        }
            
        if (cap) {          
            $.post("/Bionourisso/php/recep_mail.php",prods).done( function(data) {
                $(".loader").hide();
                console.log(data);
                if (data !== null) {
                    alertify.alert("Bionourisso",data);
                    //window.location.href = window.location.href;
                } else {
                    alert("No se pudo enviar el pedido, revisa tu conexión a internet y vuelve a intentarlo.")
                }
            });
             
           
        } else {
            alert("Debes capturar al menos una cantidad para poder enviar la Recep.mod");
        } 
        }else{
            window.location.href = window.location.href;
        }
        
    });
    function primary(){
        var prods = [];
        var idx = 0;
        var cap = false;
        var part;
        var cant = 0;
        var precio;
        var subtotal;
        var art;
        var descr;
        
        
        prods.push({name: "subtotal",value:subtotal});
            
        recepTable.reindex();
        var items = recepTable.items;
        //console.log(items);
        
        for (var x in items) {

            cant = parseInt(items[x].values().cant);
            art = items[x].values().CVE_ART;
            part = items[x].values().part;            
            precio = parseInt(items[x].values().PRECIO);
            subtotal = items[x].values().SUBTOTAL;
            descr = items[x].values().DESCR;
            //console.log(cant);
            //console.log(part);
            if (!isNaN(cant) && cant > 0){                
                /*var div = document.createElement("DIV");
                var txt = document.createTextNode(descr+"//"+part+"//"+precio+"//"+subtotal);
                div.setAttribute("style", "background-color: pink;");
                div.setAttribute("ID","divdin");
                div.setAttribute("class","clase");
                div.appendChild(txt);
                document.body.appendChild(div);   */
                var temp = cant;
                var i = 0;
                while(cant > 0){
                  var div = document.createElement("DIV");
                  var tb = document.createElement("TABLE");
                  var tbody = document.createElement("TBODY");
                  var tr = document.createElement("TR");
                  var td = document.createElement("TD");
                  var td5 = document.createElement("TD")
                  var td1 = document.createElement("TD");
                  var td2 = document.createElement("TD");
                  var td3 = document.createElement("TD");
                  var td4 = document.createElement("TD");
                  var txt = document.createTextNode(descr);
                  var txt1 = document.createTextNode(part);
                  var txt2 = document.createTextNode(1);
                  var txt3 = document.createTextNode(precio);
                  var input = document.createElement("INPUT");
                  input.setAttribute("ID","input_comentario");
                  td1.setAttribute("ID","td1");
                  //var txt4 = document.createTextNode(subtotal / temp);                
                  div.setAttribute("class","tabla_remove");div.setAttribute("ID","clieTable");
                  tb.setAttribute("ID","table1");
                  tb.setAttribute("class","table_partidas");tb.setAttribute("style","table-layout: fixed;overflow-x:hidden;");
                  tr.setAttribute("ID","clase");
                  td.setAttribute("ID","td")
                  td2.setAttribute("ID","td2");
                  td3.setAttribute("ID","td3")
                  td.setAttribute("class","tdclass");td.setAttribute("style","word-wrap: break-word;");
                  td1.setAttribute("class","tdclass");td1.setAttribute("style","word-wrap: break-word;border:1px solid red;");
                  td2.setAttribute("class","tdclass");
                  td3.setAttribute("class","tdclass");
                  td4.setAttribute("class","tdclass");
                  div.appendChild(tb);
                  tb.appendChild(tbody);
                  tbody.appendChild(tr);
                  tr.appendChild(td);
                  tr.appendChild(td5);
                  td5.appendChild(input);
                  tr.appendChild(td1);
                  tr.appendChild(td2);
                  tr.appendChild(td3);
                  tr.appendChild(td4);
                  td.appendChild(txt);
                  td1.appendChild(txt1);
                  td2.appendChild(txt2);
                  td3.appendChild(txt3);

                  //td4.appendChild(txt4);
                  document.body.appendChild(div);
                  cant--;
                  
                }
            }
        }       
    }
    $("#mostrarProd").click(
        () => primary()
    );
    var comentario = "";
    var product = [];
    /*function save(){
      var sav = document.getElementById("input_comentario")
      var txt1 = document.getElementById("td1")
      comentario = sav.value
      var text = document.createTextNode(comentario)
      txt1.innerHTML = ""
      txt1.appendChild(text)
    }*/
    function save(){
      var t = "";
      [].forEach.call(document.querySelectorAll('#table1 > tbody  > tr'), function(tr) {
        console.log(tr.cells[1].children[0].value);
        var txt1 = tr.cells[2]
        
        var txt; 
        if(tr.cells[1].children[0].value == "" || tr.cells[1].children[0].value.length == 0){
          t = tr.cells[2].innerHTML
          txt = document.createTextNode(t)
        }else{
          txt =  document.createTextNode(tr.cells[1].children[0].value)
        }
        txt1.innerHTML = ""
        txt1.appendChild(txt)
        /*var sav = document.getElementById("input_comentario")
        var txt1 = document.getElementById("td1")
        comentario = sav.value
        var text = document.createTextNode(comentario)
        txt1.innerHTML = ""
        txt1.appendChild(text)*/
      });
    }
    $('#guardar').click(() => save());
    $("#borrarPed").click(function(){
        $(".tabla_remove").remove();        
    });
    
    
    
    //--Busca un material por clave de producto
    $("input[name='claveMat']").keyup(function() {
        $("input[name='descMat']").val("");
        recepTable.search($(this).val(), ['CVE_ART']);
    });

    //--Busca un material por descripción de producto
    $("input[name='descMat']").keyup(function() {
        $("input[name='claveMat']").val("");
        recepTable.search($(this).val(), ['DESCR']);
    });
    
    /*$(".btn-default").click(function() {
        intervalManager(false);
});*/
    function insertar(){
        
        //var tipo_c1 = $('input[name="radio-c1"]:checked').parent().text(); 
        var numext = $('#numext').val();
        var numint = $('#numint').val();
        var calle1 = $('#calle1').val();
        var calle2 = $('#calle2').val();
        var colonia = $('#colonia').val();
        var cp = $('#cp').val();
        var calle = $('#calle').val();
        var refer = $('#refer').val();
        var poblacion = $('#poblacion').val();
        var estado = $('#estado').val();
        var pais = $('#pais').val();
        if ($('#pais').val()== "") {
            alert("Ingresa tu país");
        }
        var municipio = $('#municipio').val();
        var nacion = $('#nacion').val();
        var clasif = $('#clasif').val();
        var RFC = $('#RFC').val();
        if ($('#RFC').val()== "") {
            alert("Ingresa RFC");
        }
        var curp = $('#curp').val();        
        var web = $('#web').val();
        var tel = $('#tel').val();
        var nombre_cli = $('#nombre_cli').val();
         if ($('#nombre_cli').val()== "") {
            alert("Ingresa Nombre");
        }
        var email = $("#email").val();
        
          $.post("/Bionourisso/php/insert_cliente.php", {"numext":numext, "numint":numint, "calle1":calle1, "calle2":calle2, "cp":cp, "calle":calle, "refer":refer, "poblacion":poblacion, "estado":estado, "pais":pais, "municipio":municipio, "nacion":nacion, "clasif":clasif, "RFC":RFC, "curp":curp, "web":web, "tel":tel,"nombre_cli":nombre_cli,"colonia":colonia,"email":email}).done(function(data) { 
              
        if (data == "insert") {
           //alert("Registro Insertado");
            console.log(data);
            //window.location.href = "index.html";
           
        } else {  
            console.log(data);
            //alert("Registro Insertado");
            
        }
        });alert("Registro Insertado");
    }
        
   /* $("#busca_descr").click(function(){
        console.log($(this).closest('td').siblings().find('select').val());
        var busca_descr = $(this).closest('td').siblings().find('select').val();  
    });*/
    $("#combobox_cve").on("change",function(){
        var cve_art = $(this).val();
        //console.log(cve_art);
        $.post("/Bionourisso/principal.php",{"cve_art":cve_art});
    });
    var i = 0
   $(".agrega").click(function(){
    try{
      i++
      var cant = document.getElementById("cant").value
      if(cant == "0" || cant == 0){
        alert("La cantidad no puede estar vacía")
      }else{
        var td_cant = document.createElement("TD")
        td_cant.setAttribute("class","cant")
        td_cant.innerHTML = cant
        /*var table = document.createElement("TABLE")
        table.setAttribute("class","table")
        table.id = "tabla_productos"*/
        var cve_art = document.getElementById("cve_art").innerHTML
        var descrip = document.getElementById("descrip").innerHTML
        var prec = document.getElementById("precio").innerHTML
        var td_precio = document.createElement("TD")
        td_precio.innerHTML = prec
        var obs = document.getElementById("obs").value
        var td_obs = document.createElement("TD")
        if(obs.length == 0){
          obs = document.createElement("INPUT")
          td_obs.appendChild(obs)
          td_obs.id = "td_input_obs"
          obs.setAttribute("class","observ")
        }else{
          td_obs.setAttribute("class","observ")
          td_obs.innerHTML = obs
            
        }
        var subtotal = document.getElementById("sub").innerHTML
        var td_sub = document.createElement("TD")
        td_sub.id = "subtotal"
        td_sub.innerHTML = subtotal
        var td_cve = document.createElement("TD")
        td_cve.setAttribute("class","cve_art")
        td_cve.innerHTML = cve_art
        var tr = document.createElement("TR")
        var td_descrip = document.createElement("TD")
        td_descrip.setAttribute("class","descrip")
        td_descrip.innerHTML = descrip
        var button = document.createElement("BUTTON")
        button.innerHTML = "Borrar"
        button.id = "button_borrar"
        button.setAttribute("class","button_borrar btn btn-primary")
        button.setAttribute("type","button")
        tr.appendChild(td_cve)
        tr.appendChild(td_descrip)
        tr.appendChild(td_obs)
        tr.appendChild(td_precio)
        tr.appendChild(td_cant)
        tr.appendChild(td_sub)
        tr.appendChild(button)
        var td_total = document.createElement("TD");
        var total = 0;
        var tr_total = document.createElement("TR")
        tr_total.id = "tr_total"
        tr_total.appendChild(td_total)
        var div = document.getElementById("recepTable")
        var table = document.getElementById("tabla_productos")
        table.appendChild(tr)
        table.appendChild(tr_total)
        div.appendChild(table);
        [].forEach.call(document.querySelectorAll("#tabla_productos > tr > td"),function(td){
          if(td.id == "subtotal"){
            total += parseFloat(td.innerHTML);
          }
        });
        td_total.innerHTML = "Total " + total.toString() + "$";
          
          //console.log($('tr:last').text());
            //console.log(i);
        [].forEach.call(document.querySelectorAll("#tabla_productos > tr"),function(tr){
            
          if(tr.id == "tr_total" && i > 1){
              //console.log(i)
            //console.log($('tr:last').text());
              
            table.deleteRow(tr.rowIndex)
            table.appendChild(tr_total)
            /*var tabla = document.getElementById("#tabla_productos")
            table.deleteRow(tr.rowIndex)
            table.appendChild(tr_total)*/
          }
        })
        //$("#myModal").fadeOut()
      }
    }catch(error){
      //alert("No has capturado nada")
    }
   });
   $("#Borra").click(function(){
    [].forEach.call(document.querySelectorAll("#tabla_productos > tr"),function(tr){
      tr.remove()
    })
   })
   var eu = ""
   var io = [];
   var temp2 = [];
   var nr = 0
   $(document).on("click",".button_borrar",function(e){
    if(document.getElementById("tabla_productos").rows.length == 2 || document.getElementById("tabla_productos").rows.length == "2"){
      document.getElementById("tabla_productos").deleteRow(document.getElementById("tr_total").rowIndex)
    }else{
      eu = e['originalEvent']['target'].closest("tr").cells[e['originalEvent']['target'].closest("tr").cells.length-1]['firstChild']['data'];
      [].forEach.call(document.querySelectorAll('#tabla_productos > tr'),function(tr){
        if(tr.id == "tr_total"){
          io = tr.cells[0].innerHTML.split(" ")
          temp2 = io[1].split("$")
          temp2.push(eu.split("$")[0])
          nr = parseFloat(temp2[0]) - parseFloat(temp2[2])
          if(nr % 1 != 0){
            nr = nr * 1.16
            io = nr.toString().split(".")
            eu = io[0] + "." + io[1][0] + io[1][0]
            nr = parseFloat(eu)
          }
          tr.cells[0].innerHTML = ""
          tr.cells[0].innerHTML = "Total " + nr.toString() + "$"
          temp2 = []
          io = []
          nr = 0
          eu = ""
        }
      })
    }
    document.getElementById("tabla_productos").deleteRow(e['originalEvent']['target'].closest("tr").rowIndex)
   })
   
   $("#Generar").click(function(){
    //try{
      var cli = $("#select_cli").find('option:selected').attr("name");
      var coment_ped = $("#coment_ped").val();
       //console.log(coment_ped);
      var list_productos = [];
      var list_para_pdf = [];
      var temp = [];
      var list_s = [];
      var list_t = [];
      var s = "";
      var i = 0;
      [].forEach.call(document.querySelectorAll("#tabla_productos > tr > td"), function(td){
        if(td.innerHTML.includes("Total")){
          s += ";;;." + td.innerHTML
        }else if(td.id == "td_input_obs"){
          s += td.children[0].value + "///."
        }else{
          s += td.innerHTML + "///."
        }
      })
      temp = s.split(";;;.")
      list_productos = temp[0].split("///.")
      list_productos.forEach(function(e){
        if(e.includes(".00") || e[e.length - 1] == "$"){
          list_s.push(e)
          
          list_t.push(list_s)
          list_para_pdf.push(list_s)
          list_s = []
            //console.log(list_s);
        }else{
            //console.log(list_s);
          list_s.push(e)
        }
      })
      var oa = 0;
      var f = 55;
      var t = 10;
      var pdf = new jsPDF()
      var od = document.getElementById("select_cli")
      pdf.text("Bionourisso",100,10)
      pdf.setFontSize(10);
      var ty = document.getElementById("span-header").innerHTML
      var sdf = ty.split(":")
      pdf.text("Vendedor: " + sdf[1],10,25)
      pdf.text("Cliente: " + od.options[od.selectedIndex].value, 10, 35)
      pdf.setFontSize(9);
      list_para_pdf.forEach(function(po){
          po.forEach(function(os){
            if(os.length > 0 && oa == 2){
                pdf.text("Comentario: "+os,10,f+8)
            }else{
                pdf.text(os,t,f)
            }
            t =  t+40;
            oa++
        })
        t = 10
        f += 15;
        oa = 0
      })
      
      pdf.text(temp[1],t,f)
      var pdfBase64 = pdf.output('datauristring');
       list_t.push({name:"cli",value:cli});
       list_t.push({name:"coment_ped",value:coment_ped});
       list_t.push({name:"pdf",value:atob(pdfBase64.split(",")[1])});
for (var i = 0; i < list_t.length; i+=1) {
    for (var j= 0; j < list_t[i].length; j+=1){
        
        list_t.push({name: "keyProds["+i+"]["+j+"]",value:list_t[i][j]});
              
        //console.log("este es la posicion '"+i+"',"+j+","+list_t[i][j]);
        //console.log(list_t[i][j]);
        //var param = {cve_art: }
    }
 
}
       
            $.ajax({
            type: 'POST',
            dataType: 'JSON',            
            url: '/Bionourisso/php/recep_mail.php',
            data: list_t,
           beforeSend: function(){
              console.log('Enviando')
            },
            success: function(data){
                if(data.pedido == "Pedido enviado"){
                    alert("Pedido Enviado");
                }else{                    
                    alert("ERROR No se envio el pedido");
                }              
            }
          })
            

       //pdf.save("cotizaciones.pdf")
       /****** FUNCIONA FOREACH ENVIO PETICIONES EN DISTINTOS POST
      list_t.forEach(function(e){
        if(e.length == 4){
          console.log(e)
          var param = {cve_art: e[0],descr: e[1], osb: "", cant: e[2], sub: e[3]};
            console.log(param);
          $.ajax({
            type: 'POST',
            dataType: 'JSON',            
            url: '/Bionourisso/php/recep_mail.php',
            data: param,
            beforeSend: function(){
              console.log('Enviando')
            },
            success: function(res){
              console.log(res)
            }
          });
        }else if(e.length == 5){
         var param = {cve_art: e[0],descr: e[1], osb: e[2], cant: e[3], sub: e[4]};
          console.log(param);
          $.ajax({
            type: 'POST',
            dataType: 'JSON',            
            url: '/Bionourisso/php/recep_mail.php',
            data: param,
            beforeSend: function(){
              console.log('Enviando')
            },
            success: function(res){
              console.log(res)
            }
          }); 
        }else{
          console.log("fail")
        }
      })
       TERMINA FOREACH************************/
       
       
      /*if(list_t.length == 4){
        $.post("/Bionourisso/php/recep_mail.php",{"cve_art":list_t[0],"descrip":list_t[1],"obs":"","cant":list_t[2],"sub":list_t[3]})
      }else if(list_t.length == 5){
        $.post("/Bionourisso/php/recep_mail.php",{"cve_art":list_t[0],"descrip":list_t[1],"obs":list_t[2],"cant":list_t[3],"sub":list_t[4]})
      }*/
    //}catch(error){
      //alert("Aún no has capturado nada")
    //}
   })
   
    //$('#combobox_cve').on('change',() => select_usuario())
});