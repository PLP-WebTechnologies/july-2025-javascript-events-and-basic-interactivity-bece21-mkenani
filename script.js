function checkNumber() {
    let number = 7;
    let result;
    
    if (number > 0) {
        result = "The number is positive!";
    } else if (number < 0) {
        result = "The number is negative!";
    } else {
        result = "The number is zero!";
    }
    
    document.getElementById("output1").textContent = result;
}

function sayHello() {
    document.getElementById("output2").textContent = greet("User");
}

function greet(name) {
    return `Hello, ${name}!`;
}

function calculateArea() {
    let area = getArea(5, 10);
    document.getElementById("output2").textContent = `The area is: ${area}`;
}

function getArea(width, height) {
    return width * height;
}

function showCountdown() {
    let output = "";
    for (let i = 5; i > 0; i--) {
        output += `Count: ${i}\n`;
    }
    document.getElementById("output3").textContent = output;
}

function showFruits() {
    let fruits = ["Apple", "Banana", "Orange"];
    let output = "";
    let i = 0;
    
    while (i < fruits.length) {
        output += `${i+1}. ${fruits[i]}\n`;
        i++;
    }
    
    document.getElementById("output3").textContent = output;
}

function changeBackground() {
    document.body.style.backgroundColor = "#ffefd5";
}

function addListItem() {
    let list = document.getElementById("myList");
    let newItem = document.createElement("li");
    newItem.textContent = "New item " + (list.children.length + 1);
    list.appendChild(newItem);
}

function updateText() {
    document.getElementById("header").textContent = "Updated Header Text";
}
