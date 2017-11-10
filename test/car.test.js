// Once you can load cars into the Ferry, look at other things the Ferry company is interested in:
//
// knowing how many cars of a certain color are on the Ferry;
// updating the people and car counts correctly when a car leaves the Ferry;
// giving a car 50% discount after three trips on the same ferry. The board method should return ‘half price!’;
// giving a free trip after 7 trips on any Ferry. The board method should return ‘you go free!’

const assert = require("assert");
const Car = require("../car");
// const ferry = require("./ferry");


describe('Car Function', function(){

         it('should return certain color of a car that is on the ferry', function(){

           var car = new Car("Silver",5);

           assert.equal(car.Color, "Silver");

         })

         it('should return the number of passengers that are in a car that is on the ferry', function(){

           var car = new Car("Silver",5);

           assert.equal(car.People,5);
         })
       });
