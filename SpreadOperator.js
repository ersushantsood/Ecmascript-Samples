//ES6: Spread Operator ...
function testSpread(a,b,c){
 console.log(a,b,c);
 
}

testSpread(...[123,124,125]);

var a = [12,23,34];
var b = [0,...a,5];

console.log(b);

//Resting data into a variable using ... operator
function testRest(x,y,...z){
    console.log('Testing the REST '+x,y,z)
}

testRest(1,2,34,35,37);