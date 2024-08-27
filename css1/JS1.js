// Get student name from local storage
const studentName = localStorage.getItem('studentName');
document.getElementById('student-name').textContent = studentName;

// Fetch data from JSON file
fetch('data.JSON')
    .then(response => response.json())
    .then(data => {
        const activitiesList = document.getElementById('activities-list');
        data.Activities.forEach(activity => {
            const listItem = document.createElement('li');
            listItem.textContent = `${activity.activity} (${activity.subject})`;
            activitiesList.appendChild(listItem);
        });
    });

// Handle extra activity form submission
document.getElementById('extra-activity-form').addEventListener('submit', event => {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;
    const subject = document.getElementById('subject').value;

    // Create a new extra activity object
    const newExtraActivity = {
        id: data.Extra_Activity.length + 1,
        date: date,
        activity: activity,
        subject: subject
    };

    // Add the new extra activity to the JSON data
    data.Extra_Activity.push(newExtraActivity);

    // Update the JSON file
    fetch('data.JSON', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Display the new extra activity on the welcome page
    const activitiesList = document.getElementById('activities-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${activity} (${subject})`;
    activitiesList.appendChild(listItem);

    // Clear the form fields
    document.getElementById('date').value = '';
    document.getElementById('activity').value = '';
    document.getElementById('subject').value = '';
});