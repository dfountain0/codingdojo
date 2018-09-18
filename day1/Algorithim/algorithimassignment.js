var x = [1,2,3,4,5,10]
for(var i=0; i<5;i++){   
   console.log(i);
}

//output: 0,1,2,3,4

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++){ 
   i = i + 1; 
   //i=0 + 1 
   console.log(i);
}

//output: 1,3,5

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 3; 
   //i=0+3
   console.log(i);
}

//output: 3, 7

function y(num1, num2){    
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))

//output: 5
//output: 8

function y(num1, num2){
   console.log(num1);   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))

//output: 2
//output: 5
//output: 3
//output: 8

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);


//output: 15
//output: 10
//output: 10

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

//output: 15
//output: 10
//output: 20


