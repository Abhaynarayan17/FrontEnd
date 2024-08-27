//arithmetic operators
var x=12.6 , y=4.32;
console.log(10.6 + 20.34);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

//relational operators
//var isBefore = "hello" < "hi";
//console.log(isBefore);
//var isBefore = "zebra" > "zerka";
//console.log(isBefore);
//var isBig = 10 < 9;
//console.log(isBig);

// console.log(x>y);
//console.log(x<y);
//console.log(x>=y);
//console.log(x<=y);
//console.log(x!=y);
//console.log(x==y);

console.log(x===y); //compares both value and datatype

console.log(1 == '1'); //DrawBack 

console.log(1 === '1'); 
//logical operators
console.log("logical operators");
var isRain = true;
var walk = true;
var car= false;
var takeUmbrella= isRain && walk;
console.log(takeUmbrella);

var price=42000, balance=60000, fbalance =789;
var MyInterest= true;
var buy= price < balance && MyInterest;
console.log(buy);
console.log(price < balance || price < fbalance);

console.log(! true);





//misc
var n="abhay", h="narayan";
console.log(n + h);