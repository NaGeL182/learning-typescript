var spiderman = function (person) {
    return 'Hello, ' + person;
};
var user = 'Peter Parker';
console.log(spiderman(user));
var desert = function (type) {
    console.log('Android ' + type.name + ' has ' + type.language + ' language');
};
var nougat = {
    name: 'N',
    language: 'Java'
};
desert(nougat);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.make = function () {
        console.log("This car is " + this.model + " which has " + this.doors + " doors");
    };
    return Car;
}());
var newCar = new Car('Innova', 4, false);
newCar.make();
