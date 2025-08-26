// script.js

// Handle Appointment Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;

    if (!name || !doctor || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const appointmentList = document.getElementById('appointmentList');
    const listItem = document.createElement('li');
    listItem.textContent = `Appointment with ${doctor} on ${date}`;
    appointmentList.appendChild(listItem);

    alert('Appointment booked successfully!');
    event.target.reset();
});

// Handle Login Form Submission
// document.getElementById('authForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();

//     if (!username || !password) {
//         alert('Please enter both username and password.');
//         return;
//     }

//     alert(`Welcome, ${username}!`);
//     event.target.reset();
// });


// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inquiry = document.getElementById('inquiry').value.trim();

    if (!inquiry) {
        alert('Please enter your inquiry.');
        return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    event.target.reset();
});

// Expand and Collapse FAQ Sections
document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', function() {
        if (detail.open) {
            document.querySelectorAll('details').forEach(otherDetail => {
                if (otherDetail !== detail) {
                    otherDetail.open = false;
                }
            });
        }
    });
});
