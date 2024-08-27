var price=42000, balance=20000, credit = 60000;
if(price < balance){
    console.log("process payment");

}
else if(price < credit){
    console.log("low balance, credit card will be used...");
}
else{
    console.log("Insufficient funds");
}

for(var i=0; i<=10; i++){
    console.log("Number:",i);
}
var j=1;
while( j <= 10){
    console.log(j);
    j++;
}

//Switch Case
var choc = 'Hershyes', quantity;
switch(choc){
    case 'Diary Milk':
          quantity=10;
          break;

    case 'Hershyes':
          quantity=100;
          break;
}
console.log(quantity); 