// Have no idea why they wanted the two characters to count for a space each. Subtract the one out of the code in line 18 if needing this for common sense purposes.

function subLength(aStr, aChar) {
  //convert the string to an array
  let workingArr = aStr.split('');
  // create a new array with each index of each character found
  let indexArr = [];
  for (let i = 0; i < workingArr.length; i++) {
    if (workingArr[i] === aChar) {
      indexArr.push(i);
    }
  }
 //if the array.length is < 2 or more than 2 return 0   
  if (indexArr.length !== 2) {
    return 0;
 //for only two return the distance between the two   
  } else {
    return 1 + indexArr[1] - indexArr[0];
  }
}
  
