'use strict';

var arr = [1, 0, 3, 5, 3, 4, 5, 6, 2, 9];

function hasIncrementingSequence(arr) {
    var count = 0;
    var isIncrementing = false;

    for(var i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) {
        if(isIncrementing) {
          count += 1;
          isIncrementing = false;
        }
      }
      else {
        isIncrementing = true;
       }
     }
     if(isIncrementing) {
      count += 1;
      console.log(count);
      return count;
    }
};
hasIncrementingSequence(arr);
