var NumOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setUpModeButtons();
    setUpSquares();
    resetButton.addEventListener("click", reset);
    reset();
}

function setUpModeButtons()
{
     //Mode button event listeners
     for(var i = 0; i < modeButtons.length; i++)
     {
         modeButtons[i].addEventListener("click", function()
         {
             for(var i = 0; i < modeButtons.length; i++)
             {
                 modeButtons[i].classList.remove("selected");
             }
             this.classList.add("selected");
 
             this.textContent === "Easy" ? NumOfSquares = 3 : NumOfSquares = 6;
             reset();
         });
     }
}

function setUpSquares()
{
    for(var i = 0; i < squares.length; i++)
    {
        //add click
        squares[i].addEventListener("click",function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}



function reset()
{
    //generate all new colors
    colors = generateRandomColors(NumOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color;
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    //reset display

    h1.style.backgroundColor = "steelblue";
    
    //reset button
    resetButton.textContent = "New Colors";

    //Set messageDisplay to nothing
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++)
    {
        
        
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color)
{
    //loop through all squares
    //change each color to match given color
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    //maek an array
    var arr = [];
    //add num random colors to arr
    for(var i = 0; i < num; i++)
    {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;

}

function randomColor()
{
    //pick a "red" from 0 -255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";

}