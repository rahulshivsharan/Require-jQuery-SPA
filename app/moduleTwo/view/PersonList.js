define("moduleTwo/view/PersonList",["jquery","underscore"],PersonList);

function PersonList($,_){
	return {
		el : null,
		personArray : null,
		setElement : function(el){
			this.el = el;
		},
		render : function(){
			if(this.el === null){
				throw new Error("Element in null for PersonList view");
			}

			if(this.personArray === null){
				throw new Error("Person List is empty or null");
			}

			var elementObj = this.el;
			var personList = this.personArray;
			
			$.get("./templates/personList.html",function(templateString){
				
				var compiled = _.template(templateString);
				
				var str = compiled({
					"list" : personList					
				});
				
				$(elementObj).html(str);
			});
			
		}
	}
}