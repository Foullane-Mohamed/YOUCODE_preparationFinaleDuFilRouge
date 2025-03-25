// Exercise 1:
// Find Longest String in Array
// Write a JavaScript function to find 
// the longest string from a given array of strings.
// Possible solution 1 
// for finding the longest string in an array using built-in-functions


function finding_longest(arr){
  let str = arr[0]
  arr.forEach(x => {
    str.length<x.length?str=x:str
  });
  return str
  }



// Possible solution 2: 
// for finding the longest string in an array
//  without using any-built-in-functions like reduce, map or sort.
function finding_longest(arr){
  let str =arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (str.length<arr[i].length) {
      str = arr[i];
    }  
  }
  return str;
  
  }
  console.log(finding_longest(["kdf","kdfdkjd","kdk"]));
  

  