//Default value Expressions

function funcExpr(val){
    console.log("Calling Default Function");
  	return b+val;
}

function defValueExpr(a=b+10,c=funcExpr( a )){
 console.log(a,c);
}

var b=10;
defValueExpr();

//passing a param
defValueExpr(10);