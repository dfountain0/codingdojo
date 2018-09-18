/*1.Array odd - Write a function that would return an array of all the odd numbers 
between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.*/

function odd(){
	var newArray = [];
	for(var i=0; i<50;i++){
		if(i % 2 === 1){
			newArray.push(i);
		}
	}
return newArray;
}

console.log(odd());

/*2.Greater than Y - Given value of Y, write a function that takes an array and returns the number of 
values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
(There are two values in the array greater than 3, which are 5, 7).*/

function greaterThan(arr, y){
	var x = 0
	for(var i = 0; i<arr.length; i++){
		if(arr[i]>y){
			x = x + 1;
			console.log(x);
		}
	}
return x
}

greaterThan([1,2,6,7,45,16,100,-1],9);

/*3.Squares - Given an array with multiple values, write a function that replaces each value in the 
array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])*/

function square(arr){
	for(var i = 0; i < arr.length ; i++){
		arr[i] = arr[i] * arr[i];
		console.log(arr[i]);
	}
return arr
}

square([1,2,3,4,5,6,7]);
/*4.Negatives - Given an array with multiple values, write a function that replaces any negative numbers within 
the array with the value of 0. When the program is done the array should contain no negative values. 
(e.g. [1,5,10,-2] will become [1,5,10,0])
*/

function replNeg(arr){
	for(var i=0; i< arr.length; i++){
		if(arr[i] < 0) {
			arr[i] = 0;
			console.log(arr[i]);
		}
	}
return arr
}


replNeg([-1,-2,-3,-4,-50,3,45,0]);
/*5.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array 
that only contains the maximum, minimum, and average values of the original array. 
(e.g. [1,5,10,-2] will return [10,-2,3.5])*/


function minMaxAv(arr){
	var min = 0;
	var max = 0;
	var ave = 0;
	var temp = arr[0]
	var newArr=[];

	for (var i=0; i<arr.length; i++){
		ave = ave + arr[i];
	}

	ave = ave/arr.length;


	for(var i = 1; i < arr.length; i++){
		if(arr[i] < temp) {
			min = arr[i];
		} else {
			max = arr[i];
		}
	}

	newArr.push(max);
	newArr.push(min);
	newArr.push(ave);
return newArr;
}


minMaxAv([1,2,3,4,5,6,7,8,9,10,-4]);

/*6.Swap Values - Write a function that will swap the first and last values of any given array. 
The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).*/

function firLas(arr){

var first = arr[0];
var last = arr[arr.length - 1];

	if(arr.length >= 2){
		arr[0] = last
		arr[arr.length - 1] = first
	}
return arr
}


firLas([1,5,10,-2]);


/*7.Number to String - Write a function that takes an array of numbers and replaces 
any negative values within the array with the string 'Dojo'. 
For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].*/

function dojo(arr){
	for(var i=0; i < arr.length; i++){
		if (arr[i]<0){
			arr[i] = 'Dojo';
		}
	}
	return arr
}

dojo([-1, -3, 2]);
