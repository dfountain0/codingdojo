/*Basic Foundation III
Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
*/

function makeItBig(arr){
	for(var i=0; i<arr.length;i++){
		if(arr[i] >= 0){
			arr[i] = "big";
		}
	}
return arr
}

makeItBig([-1,3,5,-5]);

/*
Print Low, Return High - Create a function that takes array of numbers.  The function should print 
the lowest value in the array, and return the highest value in the array.
*/

function prntLow(arr) {
	var low = 0
	var high = 0
	for(var i=0; i< arr.length;i++){
		if(arr[i] <= low){
			low = arr[i];
		} else {
			high = arr[i];
		}
	}
console.log(low);
return high
}

prntLow([1,2,3,4,5,3,4,2,-51,43]);


/*Print One, Return Another - Build a function that takes array of numbers.  The function should print 
second-to-last value in the array, and return first odd value in the array.
*/
function prntOne(arr){
    var scndtoLast = arr[arr.length-2];
    var firstVal = arr[0];
    for(var i=0; i< arr.length; i++){
        if(arr[i] % 2 == 1){
            firstVal = arr[i];
            break;
        }
    }
console.log(scndtoLast);
return firstVal
}

prntOne([1,3,103,0]);

/*Double Vision - Given array, create a function to return a new array where each value in the original 
has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
*/

function double(arr){
	for(var i=0; i < arr.length;i++){
		arr[i] = arr[i] * 2;
	}
return arr
}


double([1,2,3]);


/*Count Positives - Given array of numbers, create function to replace last value with number of positive values.  
Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.*/

function countPositives(arr){
	var posi = 0
	for(var i=0;i<arr.length;i++){
		if(arr[i]>=0){
			posi += 1;
		}
	}
arr[arr.length-1] = posi;
return arr 
}

countPositives([-1,1,1,1]);
/*
Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a 
row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"*/


function evenOdd(arr){
    var evenCount=0
    var oddCount=0

    for(var i=0;i<arr.length;i++){
        if (arr[i] % 2 == 1){
            oddCount = oddCount +1;
            console.log(oddCount);
            if(oddCount == 3){
                console.log("Thats Odd!");
                oddCount = 0;
            }
        } else if (arr[i] % 2 == 0){
            evenCount = evenCount +1;
            if(evenCount == 3){
                console.log("Even More so!!");
                evenCount = 0;
            }
        }
    }
return arr
}

evenOdd([1,2,3,4,5,6,7,8,9,0]);
/*Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those 
whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.*/

function incrmnt(arr){
	for (var i = 0; i < arr.length; i++){
		if(i % 2 == 1){
			arr[i] = arr[i] + 1
		}															
	}
console.log(arr);
return arr
}

incrmnt([1,2,3,4,5,6,7,8,9,10]);