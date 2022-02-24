// Return all the palindromes in an array

let arr1=["abba","abcdcba","hello","guvi","okokoko"]


// Return all the palindromes in an array in anonymous function

let findPalindromes=function(arr){
	arr2=arr.filter(function(x){
		let y=x.split('');
		let g=Math.floor(y.length/2);
		for(let i=0,j=y.length-1;i<g;i++,j--)
		if(y[i]!=y[j])
		return false;
		return true;
	});
	return arr2;
}
console.log(findPalindromes(arr1));



// Return all the palindromes in an array in IIFE

console.log(function(){
	arr2=arr1.filter(function(x){
		let y=x.split('');
		let g=Math.floor(y.length/2);
		for(let i=0,j=y.length-1;i<g;i++,j--)
		if(y[i]!=y[j])
		return false;
		return true;
	});
	return arr2;
}());