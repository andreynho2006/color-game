var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
//console.log(pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for( var i = 0; i < squares.length; i++) {
    // add initials color to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.background;
        //console.log(clickedColor);
        //compare color to picked color
        if(clickedColor === pickedColor) {
           // alert("Corect");
           messageDisplay.textContent = "Correct";
           changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            //alert("Wrong");
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to mtch given color
        squares[i].style.background = color;
    }  
}

function pickColor() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for( var i = 0; i < num; i++) {
        //get random color and push into arr[]
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 
    var green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb("+ red +", "+ green +", " + blue + ")";
}