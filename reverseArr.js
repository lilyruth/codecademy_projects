function reverseArray(anArr) {
  let reversedArray = [];
  for (let i = 0; i < anArr.length; i++) {
    reversedArray.unshift(anArr[i]);
  }
  console.log(anArr);
  console.log(reversedArray);
  return reversedArray;
}

let example = ["apples", "oranges", "bananas", "plums"];

reverseArray(example);