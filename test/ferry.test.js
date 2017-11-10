// Once you can load cars into the Ferry, look at other things the Ferry company is interested in:
//
// knowing how many cars of a certain color are on the Ferry;
// updating the people and car counts correctly when a car leaves the Ferry;
// giving a car 50% discount after three trips on the same ferry. The board method should return ‘half price!’;
// giving a free trip after 7 trips on any Ferry. The board method should return ‘you go free!’

const assert = require("assert");
const Car = require("../car");
const myFerry = require("../ferry");

var ferryAmount = new myFerry(25, 50);
describe('Maximum cars Function', function() {

  it('should return the number of maximum cars that are in the fairy.', function() {
    assert.equal(ferryAmount.maximumCars, 25);
  })
  it('should return the number of maximum people that are in the fairy.', function() {
    assert.equal(ferryAmount.maximumPeople, 50);
  });
});

var ferryAmount = new myFerry(25, 50);
describe('onBoard Function', function() {

  it('should return Accepted if the Ferry is Full  ', function() {
    assert.equal(ferryAmount.board(new Car('White', 3, 'Polo')), "'Accepted'");
  })


  it('should return you will travel at Half Price after the Ferry travels 3 times.', function() {
    assert.equal(ferryAmount.board(new Car('White', 3, 'Polo')), "You will Travel on Half Price");
  })

  it('should give a free trip after a certain model travels for 7 trips.', function() {
    ferryAmount.board(new Car('White', 3, 'Polo'));
    ferryAmount.board(new Car('White', 3, 'Polo'));
    ferryAmount.board(new Car('White', 3, 'Polo'));
    assert.equal(ferryAmount.board(new Car('White', 3, 'Polo')), "You will Travel for free!");
  })


  it('should Reject the car if the Ferry is Full.', function() {
    ferryAmount.board(new Car('White', 24, 'Polo'));
    assert.equal(ferryAmount.board(new Car('White', 15, 'Polo')), "'Rejected'");
  })
});
