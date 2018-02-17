requirejs.config({
	"baseUrl" : "./app",
	"paths" : {		
		"jquery" : "../lib/jquery-3.3.1.min",
		"underscore" : "../lib/underscore.min"
	},
	"packages" : ["moduleOne","moduleTwo"]	
});


require(["moduleOne","moduleTwo"]);