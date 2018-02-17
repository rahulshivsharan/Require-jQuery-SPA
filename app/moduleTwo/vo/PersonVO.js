define("moduleTwo/vo/PersonVO",[],PersonVO);

function PersonVO(){
	var vo = vo;
	return vo;

	function vo(firstName,lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.getFullName = function(){
			return this.firstName + " " + this.lastName;
		}
	}
}