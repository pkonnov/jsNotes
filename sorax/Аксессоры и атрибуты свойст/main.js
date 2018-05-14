var Person, person, anotherPerson;

Person = function(name) {
	this.name = name;
};

person = new Person('Pavel');
console.log(person.name);