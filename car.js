function Car(Color, People,Model){
  this.People = People;
  this.Color = Color;
  this.Model = Model;

}

module.exports = Car;

 var car = new Car("Silver",5,"Polo");
console.log(car);
