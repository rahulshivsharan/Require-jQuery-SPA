define("moduleTwo/main",["moduleTwo/vo/PersonVO",
						"moduleTwo/view/PersonList"],main);

function main(PersonVO,PersonList){
	var view = PersonList;
	var Person = PersonVO;
	var personArray = [];

	personArray.push(new Person("Ganesh","Waghmare"));
	personArray.push(new Person("Sunil","Kadam"));
	personArray.push(new Person("Sukanya","Patil"));
	personArray.push(new Person("Mahesh","Sanawane"));
	personArray.push(new Person("Hemant","Tikam"));
	personArray.push(new Person("Mahendra","Gaikwad"));

	view.personArray = personArray;
	view.setElement("#moduleTwo-app");
	view.render();
}