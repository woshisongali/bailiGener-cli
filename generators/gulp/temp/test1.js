class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	getName () {
		return this.name
	}
	getAge () {
		return this.age
	}
	grow (year) {
		this.age += year
	}
}
export default Person