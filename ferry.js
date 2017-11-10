function myFerry(maximumCars, maximumPeople) {

  this.maximumCars = maximumCars;
  this.maximumPeople = maximumPeople;

  this.maxPeopleCount = 0;
  this.ferryCars = {};
  this.maxCarsCount = [];

  this.board = function(car) {
    //check for how many cars and passengers that are onBoard
    if (this.maxCarsCount.length + 1 <= maximumCars && this.maxPeopleCount + car.People <= maximumPeople) {

    //Adds the passengers in the car
      this.maxPeopleCount += car.People;

      //saves the cars in the ferry
      this.maxCarsCount.push(car);

      //Checks if the car already exists
      if (!this.ferryCars[car.Model]) {

        //Adds the car in the ferry
        this.ferryCars[car.Model] = 1;

      } else {
        //
        this.ferryCars[car.Model]++;
      }
      //if the car travels 3 times, Let the car travel at a half price
      if (this.ferryCars[car.Model] == 2) return "You will Travel on Half Price"
      //if the car travels 7 times, Let the Car travel free
     else if (this.ferryCars[car.Model] == 6) return "You will Travel for free!"
    else return "'Accepted'";
  } else {
    return "'Rejected'";
  }
}

}

var Car = require("./car");
module.exports = myFerry;
var ferryAmount = new myFerry(25, 50, 3);
console.log(ferryAmount.board(new Car('White', 4, 'Polo')));
console.log(ferryAmount.board(new Car('Orange', 2, 'Jetta')));
console.log(ferryAmount.board(new Car('Yellow', 9, 'Land Rover')));
console.log(ferryAmount.board(new Car('Silver', 6, 'Polo')));
console.log(ferryAmount.board(new Car('White', 6, 'Golf')));
console.log(ferryAmount.board(new Car('White', 6, 'Polo')));
  console.log(ferryAmount.board(new Car('White', 1, 'Polo')));
    console.log(ferryAmount.board(new Car('White', 1, 'Polo')));
      console.log(ferryAmount.board(new Car('White', 6, 'Polo')));
      console.log(ferryAmount.board(new Car('White', 1, 'Polo')));
      console.log(ferryAmount.board(new Car('White', 2, 'Polo')));
      console.log(ferryAmount.board(new Car('White', 3, 'Polo')));

console.log(ferryAmount);
console.log(myFerry);
console.log(ferryAmount.maximumPeople);
console.log(ferryAmount.maximumCars);
