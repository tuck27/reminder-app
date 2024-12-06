const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const addButton = document.getElementById("add-button");
const counter = document.getElementById("counter");
let reminders = [];

function addReminder() {
    let input = document.getElementById("reminder-input").value;
    reminders.push(input);
    document.getElementById("reminder-input").value = ""; // Clear the input field
}

addButton.addEventListener("click", () => {
    addReminder();
});



//array to store reminders
//event listener for addButton --> reminders save
//clear input field after reminder is added
//display the reminder on the content field
//make backButton and nextButton move through the reminder list
//update <p> counter as you press backButton and nextButton