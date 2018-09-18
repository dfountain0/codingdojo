//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function allNums() {
	var emptArr = [];
	for(var i=1; i<=255; i++){
		emptArr.push(i);
	}
	return emptArr
}

console.log(allNums());



//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sum(){
	var add = 0;
	for(var i=0; i<=1000; i++){
		if(i % 2 ===0){
			add = add + i;
			console.log(add);
		}
	}
	return add;
}

console.log(sum());

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd(){
	var odd = 0;
	for(var i = 1; i<5000; i++){
		if(i%2 === 1){
			odd = odd + i;
			console.log(odd);
		}
	}
	return odd;
}

sumOdd();
//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

//function takes in an array  
function sumArr(arr){
	var temp = 0
	for(var i = 0; i < arr.length ; i++){
	temp = temp + arr[i];
	console.log(temp);
	}
return temp
}

sumArr([1,2,5]);

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function biggest(arr){
	var max = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
			console.log(max);
		}
	}
return max
}

biggest([-3,3,5,7]);


//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)


function givesAve(arr){
	var average = 0
	for(var i = 0; i < arr.length; i++){
		average = average + arr[i];
		console.log(average);
	}
return average/arr.length;
}

givesAve([1,3,5,7,20]);
