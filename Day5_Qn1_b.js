// Convert all the strings to title caps 

let arr1=["Hello","my","NAME","is","shuBHam"]

// Convert all the strings to title caps in a string array in anonymous function

let printtc=function(arr){
	
	let arr2=arr.reduce(function(last,x){
			x=x.toLowerCase();
			let arrTemp=x.split('');
			arrTemp[0]=arrTemp[0].toUpperCase();
			x=arrTemp.join('');
			last.push(x);
			return last;
		
	},[]);
	console.log(arr2);
};
printtc(arr1);


// Convert all the strings to title caps in a string array in IIFE

(function(){
	
	let arr2=arr1.reduce(function(last,x){
			x=x.toLowerCase();
			let arrTemp=x.split('');
			arrTemp[0]=arrTemp[0].toUpperCase();
			x=arrTemp.join('');
			last.push(x);
			return last;
		
	},[]);
	console.log(arr2);
})();