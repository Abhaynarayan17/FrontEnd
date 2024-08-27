// JavaScript source code

const users = [
    { username: 'Abhaynarayan', password: 'omega' },
    { username: 'Tanu', password: 'lambda' }
];

const activities = [
    { id: 1, activity: 'Create project file which contains tables between 12 to 19', subject: 'Maths' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'Welcome.html';
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    
    alert('Registeration successful.');
}

function goToMonthlyActivities() {
    window.location.href = 'MonthlyAct.html';
}

function displayActivities() {
    const list = document.getElementById('activityList');
    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity.activity} (Subject: ${activity.subject})`;
        list.appendChild(listItem);
    });
}

if (window.location.pathname.includes('monthly-activity.html')) {
    displayActivities();
}

