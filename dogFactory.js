// Write your code here:

let dogFactory = (name, breed, weight) => {
   return {
     _name: name,
     _breed: breed,
     _weight: weight,  
    get name() {
    return this._name;
      },
    set name(newName) {
    this._name = newName;
      },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
   },
   bark() {
     return 'ruff! ruff!';
   },
   eatTooManyTreats() {
     this._weight++;
     return this._weight;
   }
 }
}

let mochi = dogFactory('mochi', 'cavalier king charles spaniel', 27);

console.log(mochi)

console.log(mochi.eatTooManyTreats())
