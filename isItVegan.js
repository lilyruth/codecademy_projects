// Write your code here:
function fromPlant(food) {
  if (food['source'] === 'plant') {
    return true;
  } else {
  return false;
  }
}

function isTheDinnerVegan(anArr) {
  return anArr.every( item => fromPlant(item));
  }
   
     
 






// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
