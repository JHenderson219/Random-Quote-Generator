$(document).ready(function() { 
	var quotes = ["May God have mercy upon my enemies, because I won’t.", 
					"If everyone is thinking alike, then somebody isn't thinking.", 
					"A good plan violently executed right now is far better than a perfect plan executed next week.",
					"Accept the challenges, so that you may feel the exhilaration of victory.",
					"Success is how high you bounce when you hit bottom.",
					"A pint of sweat will save a gallon of blood.",
					"It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.",
					"Wars may be fought with weapons, but they are won by men. It is the spirit of the men who follow and of the man who leads that gains the victory.",
					"Courage is fear holding on a minute longer.",
					"May God have mercy upon my enemies, because I won’t."];
	var quoteNumber = 0				
	$("#quoteButton").on("click", function(){
		function getRandom(min, max) {
   			return min + Math.floor(Math.random() * (max - min + 1))};
    		quoteNumber = getRandom(0,quotes.length-1);
    	console.log(quoteNumber);
		 
		/*$.jQuery.ajax("http://forismatic.com/en/api/", function(quoteJson){
			$(".quoteTarget").html(JSON.stringify(quoteJson));
		});*/ 
		$(".quoteTarget").html("<h3 class = 'animated zoomIn'>"+'"'+ quotes[quoteNumber]+'"'+"</h3>");
		//$(".quoteTarget").html("<h3 class = 'animated zoomIn'>Here is a quote</h3>");	
	});
	$("#quoteButton").on("tap", function(){
		function getRandom(min, max) {
   			return min + Math.floor(Math.random() * (max - min + 1))};
    		quoteNumber = getRandom(0,quotes.length-1);
    	console.log(quoteNumber);
		 
		/*$.jQuery.ajax("http://forismatic.com/en/api/", function(quoteJson){
			$(".quoteTarget").html(JSON.stringify(quoteJson));
		});*/ 
		$(".quoteTarget").html("<h3 class = 'animated zoomIn'>"+'"'+ quotes[quoteNumber]+'"'+"</h3>");
		//$(".quoteTarget").html("<h3 class = 'animated zoomIn'>Here is a quote</h3>");	
	});
	$("#tweetButton").on("click", function(){
		$("#tweetButton").attr("href","https://twitter.com/intent/tweet/?text="+quotes[quoteNumber]+" -General George S. Patton");
	});
	$("#tweetButton").on("tap", function(){
		$("#tweetButton").attr("href","https://twitter.com/intent/tweet/?text="+quotes[quoteNumber]+" -General George S. Patton");
	});
});