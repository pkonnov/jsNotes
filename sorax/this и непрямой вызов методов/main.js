var greet = function(){
		return 'Hi ' + this.name;
	};

var person = {
	name: 'Pavel',
	greet: greet
};

var anotherPerson = {
	name: 'Leonid',
	greet: greet
};

console.log(anotherPerson.greet());
console.log(person.greet());