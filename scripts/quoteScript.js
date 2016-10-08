$(document).ready(function() { 
	
	$("#quoteButton").on("click", function(){
		/*$.jQuery.ajax("http://forismatic.com/en/api/", function(quoteJson){
			$(".quoteTarget").html(JSON.stringify(quoteJson));
		});*/ 
		$(".quoteTarget").html("<h3 class = 'animated zoomIn'>Here is a quote</h3>");
		$(".authorTarget").html("<h3 class = 'animated zoomIn'>Here is an author</h3>");
	});
});