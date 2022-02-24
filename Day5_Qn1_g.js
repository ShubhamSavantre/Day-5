// Remove duplicates from an array

let a1=[1,2,2,2,4,4,9,9,9,9,11,14,9,15];

// Remove duplicates from an array in anonymous function

let removeDuplicates=function(arr1){
	let arr=arr1.filter(function(x,i,arr1){
		let flag=true;
		arr1.splice(i,1);
		if(arr1.includes(x))
		flag=false;
		arr1.splice(i,0,x);
		return flag;
	});
	return arr;
}
console.log(removeDuplicates(a1));


// Remove duplicates from an array in IIFE


console.log(function(){
	let arr=a1.filter(function(x,i,arr1){
		let flag=true;
		arr1.splice(i,1);
		if(arr1.includes(x))
		flag=false;
		arr1.splice(i,0,x);
		return flag;
	});
	return arr;
}());