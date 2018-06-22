var numberOfSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    setModeButtons();
    setUpSquares();
    reset();
}



function reset() {
    //generate new colors
    colors= generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //chage the colors of the squares from the page
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i=0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
            
    }

    h1.style.background = "steelblue";
    
}

function setModeButtons() {
    for( var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            //this.textcontent === "Easy" ? numberOfsquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
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
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                
            } else {
                this.style.background = "#232323";
                //alert("Wrong");
                messageDisplay.textContent = "Try again";
            }
        });
    }
}
// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     //generate new colors
//     var numberOfSquares = 3;
//     colors= generateRandomColors(numberOfSquares);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //chage the colors of the squares from the page
//     colorDisplay.textContent = pickedColor;
//     for (var i=0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
        
//     }
// });

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     //generate new colors
//     var numberOfSquares = 6;
//     colors= generateRandomColors(numberOfSquares);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //chage the colors of the squares from the page
//     colorDisplay.textContent = pickedColor;
//     for (var i=0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";   
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});


colorDisplay.textContent = pickedColor;

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