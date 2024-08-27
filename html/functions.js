function sum(x , y) 
{
    var result = x + y;
    return result;
}

var result = sum(3, 4);
console.log('result:', result);


// function expression
var sum2 = function(x,y) {
    var result = x + y;
    return result;
}

console.log(sum2(12,12));

function foo(){
    console.log('foo was called');
}

foo();
