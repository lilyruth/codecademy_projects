function groceries(anArr) {
  let groceryArr = [];
  anArr.forEach( grocery => groceryArr.push( grocery.item ));
  if (groceryArr.length === 1) {
    return groceryArr[0];
  } else if (groceryArr.length === 2) {
    return `${groceryArr[0]} and ${groceryArr[1]}`;
  } else if (groceryArr.length === 3){
    return `${groceryArr[0]}, ${groceryArr[1]} and ${groceryArr[2]}`;
  } else return `${groceryArr[0]}, ${groceryArr[1]}, ${groceryArr[2]} and ${groceryArr[3]}`;
}

// Original for loop 
// for (let i = 0; i < anArr.length; i++) {
//     groceryArr.push(anArr[i].item);
//   }
