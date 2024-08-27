var globalX= 1;
console.log("outside function",globalX);
function foo(){
    localX=2;
    console.log("inside function", globalX);
    console.log("inside function foo", localX);
}
foo();
