$(document).ready(function(){
	function onClick(){
		var div = document.getElementById("recepTable")
		var table = document.getElementById("table_productos")
		var i = 0;
		[].forEach.call(document.querySelectorAll('#table_productos > thead > tr'),function(tr){
			if(i == 1){
				//var clone = tr.cloneNode(true)
				var tbody = document.getElementById("thead")
				var clone = tr.cloneNode(true)
				tbody.appendChild(clone)
				clone.id = "clone"
			}
			i++
			
		});

		/*var clone = table.cloneNode(true)
		clone.id = "New_table";
		div.appendChild(clone);*/
		/*[].forEach.call(document.querySelectorAll('#New_table > thead > tr > td'),function(td){
			var x = td.getElementsByTagName('button')
			if(x.item(0) != null){
				if(x.item(0).id == 'N'){
					x.item(0).click(() => onClick())
				}
			}
		});*/

	}
	$("#N").click(() => onClick());
	$("#clone").click(() => onClick());
	/*[].forEach.call(document.querySelectorAll('#clone > td'),function(td){
			var x = td.getElementsByTagName('button')
			if(x.item(0) != null){
				if(x.item(0).id == 'N'){
					x.item(0).click($('.N').click())
				}
			}
		})*/

	  /*[].forEach.call(document.querySelectorAll('.table_productos > thead'),function(thead){
	  	var table = document.getElementById("table_productos")
	  	var tbody = document.createElement("tbody")
	  	table.appned(tbody)
	  })*/
    
});