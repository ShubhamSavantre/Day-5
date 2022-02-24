// Sum of all numbers in an array

let arr1=[1,2,3,4,5,6,7,8,9,10]

// Sum of all numbers in an array in anonymous function

let printSum=function(arr){
	let sumarr=arr.reduce(function(sum,current){sum+=current;return sum;},0);
	console.log(sumarr);
};  
printSum(arr1);

// Sum of all numbers in an array in IIFE

(function(){
	let sumarr=arr1.reduce(function(sum,current){sum+=current;return sum;},0);
	console.log(sumarr);
})();