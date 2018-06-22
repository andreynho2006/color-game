var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];
//console.log(pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");



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
        } else {
            this.style.background = "#232323";
            //alert("Wrong");
            messageDisplay.textContent = "Try again";
        }
    });
}

