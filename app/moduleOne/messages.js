define("moduleOne/messages",[],messages);

function messages(){
	var obj = {};
	obj.getHello = getHello;
	return obj;

	function getHello(){
		return "Hello World";
	}
}