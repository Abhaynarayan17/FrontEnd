const abhay= document.getElementById('input-container');
   const inputBox=document.createElement('input');
   let i = 1;
   inputBox.type="text";
    inputBox.id=`input ${i}`;
    inputBox.placeholder=`Enter text in Input ${i}`;

   inputBox.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        alert(`Input${i}: ${event.target.value}`);
    }
   });

 abhay.appendChild(inputBox);


// const abhay= document.getElementById('input-container');
// let i =1;
// const inputBox = document.createElement('input');
// inputBox.type = "text";
// inputBox.id = `input${i}`;
// inputBox.placeholder = `Enter text in Input ${i}`;

// // Create button
// const submitButton = document.createElement('button');
// submitButton.textContent = 'Submit';

// // Add click event listener on the button
// submitButton.addEventListener('click', function() {
//   alert(`Input ${i}: ${inputBox.value}`);
// });

// // Append the input box and button to the container
// abhay.appendChild(inputBox);
// abhay.appendChild(submitButton);
