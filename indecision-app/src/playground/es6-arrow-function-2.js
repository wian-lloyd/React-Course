// arguments object - no longer bound with arrow functions.

const add = (a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions.

const user = {
	name: 'Wian',
	cities: ['Johannesburg', 'Bethal'],
	printPlacesLived() {
		return this.cities.map((city) => `${this.name} has lived in ${city}`);
	},
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	numbers: [8, 12, 23, 54],
	multipyBy: 2,
	multiply() {
		return this.numbers.map((number) => number * this.multipyBy);
	},
};

console.log(multiplier.multiply());
