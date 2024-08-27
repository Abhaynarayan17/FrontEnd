 document.getElementsByTagName("form").onSubmit = funcName
function funcName(){
    //
}
document.querySelector('form').addEventListener('submit', (event)=> {
    event.preventDefault();

const username = document.querySelector('#username').value;
console.log(username);
const password = document.querySelector('password').value;
console.log(password);
if(username === 'abhay' && password === 'omega'){
    alert("Login successful");
}
else{
    alert("Login Failed");
}
});