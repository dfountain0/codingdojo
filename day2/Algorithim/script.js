function a(){
	console.log('hello');
}
console.log('Dojo');

//Output: Dojo

function a(){
	console.log('hello');
	return 15;
}

x = a();
console.log('x is', x);

//Output: hello...x i, 15

function a(n){
	console.log('n is', n);
	return n+15;
}

x = a(3);
console.log('x is', x);

//Output: n is 3...x is 18

function a(n){
	console.log('n is', n);
	y = n*2;
	return y;
}

x = a(3) + a(5);
console.log('x is', x);

//Output: n is 3...n is 5...x is 16

function op(a,b){
	c = a+b;
	console.log('c is', c);
	return c;
}

x = op(2,3) + op(3,5);
console.log('x is', x);

//Output: c is 5...c is 8...x is 13

function op(a,b){
	c = a+b;
	console.log('c is', c);
	return c;
}

x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)

//Output: c is 5...c is 3...c is 6...c is 3...c is 5...c is 8...x is 19




var x = 15;
	function a(){
	var x = 10;
}

console.log(x);
a();
console.log(x);

//Output: 15, 15

//Assignment

function multiply(x,y){
    console.log(x);
    console.log(y);
}

b = multiply(2,3);
console.log(b);

//Output: 2...3...undefined

function multiply(x,y){
    return x*y;
}

b = multiply(2,3);

console.log(b);
console.log(multiply(5,2));

//Output: 6...10

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//Output: 3...7

var x=15;
console.log(x);

function awesome(){
    var x=10;
    console.log(x);
}

console.log(x);
awesome();
console.log(x);

//Output: 15...15...10...15

for(var i=0; i<15; i+=2){
   console.log(i);
}

//Output: ///Output: 0...2...4...6...8...10...12...14

for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){       
       console.log(i*j);
   }
}

//Output://0...0...0...1...0...2

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){         
          console.log(i*j);
      } 
   }
}

z = looping(3,3);
console.log(z);

//Output: 0...0...0...0...1...2...0...2...4

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){         
         console.log(i*j);
      } 
   }
   return x*y;
}

z = looping(3,5);
console.log(z);

///Output: 0...0...0...0...0..0...1...2...3..4...0...2...4...6...8...15





//Part2






//Print 1 to x

/*Please complete the codes below to have the function print all the integers from 1 to x.
If x is negative, have it print/log "negative number' and have the function return false.*/

function printUpTo(x){
  // your code here
	if (x >= 0){
  		for(var i = 1; i <= x; i++) {
  			console.log(i);
		}
 	}

  	else {
  		return false
  	}
}

printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false




//PrintSum

/*Please complete the code below to have the function print integers 
from 0 to 255 and with each integer print the sum so far. Have the function return the final sum*/

function printSum(x){
  sum = 0;
  //your code here
  for(var i = 0; i < 255; i++){
  	sum = sum + i
  	console.log(sum)
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640



//PrintSumArray


/*Please complete the code below to have the function return the sum of 
all the values in a given array*/

function printSumArray(x){
  sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum = sum + x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6












/*Create a function that returns the largest element in a given array.  
For example largestElement( [1,30,5,7] ) should return 30.*/

function lar(arr){
	var x=0;

	for(var i = 0; i <= arr.length; i++){
		if (arr[i]>x){
			var x = arr[i];
		}
	}
	return x
}

