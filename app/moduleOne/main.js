define("moduleOne/main",["jquery",
						"moduleOne/messages"],main);

function main($,messages){
	
	var str = "<h3 style='color:red;font-size:50px'>"+ messages.getHello() + "</h3>";
 
	$("#moduleOne-app").html(str);
}