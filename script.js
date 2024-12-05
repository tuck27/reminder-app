const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const addButton = document.getElementById("add-button");
var input = new Array();
const reminders = [];
const counter = document.getElementById("counter");

function insert(val){
    input[input.length] = val;
}
function show(){
    for(i = 0; i < input.length; i++);
}


//array to store reminders
//event listener for addButton --> reminders save
//clear input field after reminder is added
//display the reminder on the content field
//make backButton and nextButton move through the reminder list
//update <p> counter as you press backButton and nextButton