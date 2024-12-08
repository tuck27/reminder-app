let reminders = []; // Array to store reminders
const reminderInput = document.getElementById('reminder-input'); // Input field for new reminder
const addButton = document.getElementById('add-button'); // Add button
const reminderContainer = document.querySelector('.reminder-container'); // Container for reminders

// Function to add a new reminder
addButton.addEventListener('click', () => {
    const reminderText = reminderInput.value.trim();

    if (reminderText) {
        reminders.push(reminderText); // Add new reminder to the array
        reminderInput.value = ''; // Clear input field
        updateReminderList(); // Update UI
    }
});

// Function to update the displayed list of reminders
function updateReminderList() {
    reminderContainer.innerHTML = ''; // Clear existing reminders

    // Loop through the reminders array and display each reminder
    reminders.forEach((reminder, index) => {
        const reminderElement = document.createElement('div');
        reminderElement.classList.add('reminder-item');
        
        const reminderText = document.createElement('p');
        reminderText.textContent = reminder;
        
        // Create an edit button for each reminder
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editReminder(index);
        });

        // Create a delete button for each reminder
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            removeReminder(index);
        });

        reminderElement.appendChild(reminderText);
        reminderElement.appendChild(editButton);
        reminderElement.appendChild(deleteButton);
        reminderContainer.appendChild(reminderElement);
    });
}

// Function to remove a reminder
function removeReminder(index) {
    reminders.splice(index, 1); // Remove the reminder from the array
    updateReminderList(); // Update the UI
}

// Function to edit a reminder
function editReminder(index) {
    const newReminder = prompt('Edit your reminder:', reminders[index]);
    if (newReminder !== null && newReminder.trim() !== '') {
        reminders[index] = newReminder; // Update the reminder in the array
        updateReminderList(); // Update the UI
    }
}


// Set up variables for pagination
let currentPage = 0;
const remindersPerPage = 5;  // Number of reminders per page


const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const counter = document.getElementById('counter');

// Function to update the displayed reminders
function updateReminderList() {
    // Clear the existing reminders
    reminderContainer.innerHTML = '';

    // Calculate the start and end index based on the current page
    const start = currentPage * remindersPerPage;
    const end = start + remindersPerPage;
    
    // Get the subset of reminders to display
    const remindersToShow = reminders.slice(start, end);
    
    // Loop through the reminders to display and create elements
    remindersToShow.forEach(reminder => {
        const reminderElement = document.createElement('p');
        reminderElement.textContent = reminder;
        reminderContainer.appendChild(reminderElement);
    });

    // Update the counter (showing current page number)
    counter.textContent = `Page ${currentPage + 1} of ${Math.ceil(reminders.length / remindersPerPage)}`;
    
    // Disable/Enable buttons based on page range
    backButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === Math.floor(reminders.length / remindersPerPage);
}

// Add reminder to the list when the "Add" button is clicked
addButton.addEventListener('click', () => {
    const reminderText = reminderInput.value.trim();
    if (reminderText) {
        reminders.push(reminderText);  // Add the new reminder to the array
        reminderInput.value = '';  // Clear the input field
        updateReminderList();  // Update the displayed list of reminders
    }
});

// Navigate to the previous page
backButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;  // Go to the previous page
        updateReminderList();  // Update the displayed reminders
    }
});

// Navigate to the next page
nextButton.addEventListener('click', () => {
    if ((currentPage + 1) * remindersPerPage < reminders.length) {
        currentPage++;  // Go to the next page
        updateReminderList();  // Update the displayed reminders
    }
});

// Initial display of reminders (in case there are any)
updateReminderList();




//array to store reminders
//event listener for addButton --> reminders save
//clear input field after reminder is added
//display the reminder on the content field
//make backButton and nextButton move through the reminder list
//update <p> counter as you press backButton and nextButton