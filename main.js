// sum range // -- Create 2 functions to generate an array between to arguments and sum them.
function sum(range){
  var total = 0;
  for (var i = 0; i < range.length; i++){
    total += range[i];
  }
  return total;
}

function range(start, end, step){
  if(step === undefined){step = 1};
  var array = [];
 if(step > 0){
    for(var i = start; i <= end; i += step){
      array.push(i);
    }
  } else {
    for(var i = start; i >= end; i += step){
      array.push(i);
    }
  }
  return array;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

//
