const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
   inRange(number, start, end) {
     if (end === undefined) {
       end = start;
       start = 0;
     }
     if (start > end) {
       let temp = start;
       start = end;
       end = temp;
     }
     if (start <= number) {
       if (number < end) {
       return true;
       }
     } return false;
   },

    words(aStr){
      let wordArr = aStr.split(' ');
      return wordArr;
    },

   pad(aStr, aLength){
     let padding = aLength - aStr.length;
     let newStr = aStr;
     let spaces = 0;
     if (padding <= 0) {
       return aStr;
     } else if (padding % 2 === 1) {
       spaces = (padding - 1) / 2
          for (let i = 0; i < spaces; i++) {
          newStr = ' ' + newStr + ' ';
          } 
          newStr += ' ';
          return newStr;

     } else if (padding % 2 === 0) {
      spaces = padding / 2;
        for (let i = 0; i < spaces; i++) {
        newStr = ' ' + newStr + ' ';
        }
        return newStr;
     }

   },

   has(obj, aKey){
      if (!!obj[aKey]) {
        return true;
      } else {
        return false;
      }
   },

   invert(anObj) {
      let newValues = Object.keys(anObj);
      let newKeys = Object.values(anObj);
      let newObj = {};
      for (let i = 0; i < newValues.length; i++) {
        newObj[newKeys[i]] = newValues[i];
      }
      return newObj;
   },

   findKey(anObj, predicate) {
     for (let key in anObj) {
       if ( !!predicate(anObj[key]) === true) {
         return key;
       } else {
         return undefined;
       }
     }
   },
   drop(array, n) {
       if (n === undefined) {
         let droppedArr = [];
         droppedArr = array.slice(1);
         return droppedArr;
       } else {
         let droppedArr = [];
         droppedArr = array.slice(n);
         return droppedArr;
       }
   },

   dropWhile(array, predicate) {
    let dropInd = array.findIndex((elem, ind) => !predicate(elem, ind, array));
    let droppedArr = [];
    droppedArr = this.drop(array, dropInd);
    return droppedArr;
   },

   chunk(arr, size = 1){
     let chunks = [];
     for (let i = 0; i < arr.length; i+=size) {
       let arrayChunk = arr.slice(i, i+size);
       chunks.push(arrayChunk);
     }
    return chunks;
   }

};





// Do not write or modify code below this line.
module.exports = _;
