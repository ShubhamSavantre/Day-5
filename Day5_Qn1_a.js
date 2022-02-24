// Print odd numbers in an array in anonymous function


let arr1=[1,2,3,4,5,6,7,8,9,10]
let printOdd=function(arr){
	let arr2=arr.filter(x => x%2!=0);
	console.log(arr2.join(' '));
};
printOdd(arr1);


// Print odd numbers in an array in IIFE

(function(arr){
	let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !==0) {
      odd.push(arr[i])
    }
  }
  console.log(odd)
})([1,2,3,4,5,6,7,8,9,10]);



