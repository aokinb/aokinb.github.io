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




function wikiAPI() {

var searchTerm = document.getElementById('searchTerm').value;
var connect = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

connect.open('GET', url);

connect.onload = function () {

    var wikiObject = JSON.parse(this.response);

    //wikiObject.continue.gsroffset = 30;

    console.log(wikiObject);
    console.log(wikiObject.continue.gsroffset);
    console.log(wikiObject.query);
    console.log(wikiObject.query.pages);
    console.log(typeof pages);

    var pages = wikiObject.query.pages;

    for (var i in pages) {
        
        var newDiv = document.createElement("div");
        var a = document.createElement("a");

        newDiv.setAttribute('class', 'row h4');
        document.getElementById("wiki").appendChild(newDiv);
        document.getElementById("wiki").appendChild(a);
        newDiv.innerText = pages[i].title;

        var linkText = document.createTextNode(pages[i].title);
        a.appendChild(linkText);
        a.title = pages[i].title;
        a.href = "https://en.wikipedia.org/?curid=" + pages[i].pageid;
        

        //var a = document.createElement("a");

        //newDiv.appendChild(a);

        //document.getElementById("wiki").appendChild(a);
        //var linkText = document.createTextNode(pages[i].title);
        //document.getElementById("testlink").appendChild(linkText);
        //a.appendChild(linkText);
        //a.title = pages[i].title;
        //a.href = "https://en.wikipedia.org/?curid=" + pages[i].pageid;
        //document.body.appendChild(a);

        }

    }

connect.send();

}

