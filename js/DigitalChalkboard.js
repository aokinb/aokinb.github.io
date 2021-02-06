function howdy(firstName) {
    alert("Howdy " + firstName);
    console.log(firstName);
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas");
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.");
    } 
    else if (Number.isInteger(Number(inputValue)) == false) {
        alert(inputValue + " is not an integer.");
    }
    else if (inputValue.toString().length != 5) {
        alert(inputValue + " is not a 5-digit number.");
        console.log(Number.isInteger(Number(inputValue)));
    }
    else if (inputValue%2==0) {
        alert(inputValue + " is an even number.");
        console.log(Number.isInteger(Number(inputValue)));
    } 
    else {
        alert(inputValue + " is an odd number.");
        console.log(Number.isInteger(Number(inputValue)));
    }
}

function conditional() {
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good Morning!");
    }
    else if (currentHour < 18) {
        alert("Good Day!") 
    }
    else {
        alert("Good Evening!")
    }
}

function changeTitle() {
    let selectedElement = document.getElementById("programCard");
    selectedElement.innerText = "DIGS"
}

function currentMinute() {
    let selectedElement = document.getElementById("minute");
    selectedElement.innerText = "Current Minute: ".concat(new Date().toLocaleTimeString("en-US").split(":")[1]); //.split(/:| /);
}

function disappear() {
    let selectedElement = document.getElementById("disappear");
    selectedElement.style.display = "none";
}