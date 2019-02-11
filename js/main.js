$(document).ready(function() {
	
	$("input[name='query-submit']").click(function(){
		$.post("monitor_costos.php").done(function(data) {
            var result = JSON.parse(data);
			console.log(result);
			//$(".result").html(result.length+" coincidencias encontradas");
		});
	});
	
});