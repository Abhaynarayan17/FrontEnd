const inputContainer = document.getElementById('input-container');
// Create 10 input boxes using a for loop
for (let i = 1; i <= 10; i++) {
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = `input${i}`;
    inputBox.placeholder = `Input ${i}`;

    // Add event listener for the "Enter" key
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert(`Input ${i}: ${event.target.value}`);
        }
    });

    inputContainer.appendChild(inputBox);
}
