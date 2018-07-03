function returnArray(){
    return [10,20,30];
}

//array destructuring
var [a,b,c] = returnArray();
console.log(a,b,c);

//object destructuring
function returnObject(){
    return {
        val1: 10,
        val2: 20,
        val3: 45
    };
}

//note:val1 name in left should match with val1 being returned
var {val1:x , val2:r , val3:t} = returnObject();

console.log("x,r,t"+x,r,t);
console.log(val1,val2,val3);