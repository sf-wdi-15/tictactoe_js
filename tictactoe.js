var isPlayer1 = true;
var canClick = true;
var p1Input = [];
var p2Input = [];
var messageBox = "";
var winConditions = 
    [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];


/*
When the window first load

find all elements that have an id between 0-8 and add it to an "elements" array
for each element in the array, add an onclick function and set the element's value to ""
add an onclick function for the reset button as well
decide the direction that the arrow is pointing (current player)

*/    
window.onload = function()
{
  resetGame();
  
  var elements = [];

  for (var h = 0; h < 9; h +=1)
  {
    elements.push(document.getElementById(h));
  }
  
  for (var i = 0; i < elements.length; i+=1)
  {
    elements[i].onclick = handleInput;    
  }  
  
  var reset = document.getElementById('resetButton');
  reset.onclick = handleInput;
  
  messageBox = document.getElementById('messageBox');
  

};

var handleInput = function()
{ 
  var element = document.getElementById(this.id);
  
  if (element.value === "")
  { 
    if (canClick)
    {
      if (isPlayer1)
      {
        p1Input.push(element.id);
        element.className += " playerOne";
      }

      else
      {
        p2Input.push(element.id);
        element.className += " playerTwo";
      }
      checkGameOver();
      element.value = 0;
      changePlayer();
    }
 
  }

  else if (element.id === "resetButton")
  {
    resetGame();
  }
};

var checkGameOver = function()
{ 
  var gameOver = false;

  for (var i = 0; i < winConditions.length; i +=1)
  {
    var countP1 = [];
    var countP2 = [];
    var el = "";
    
    for (var p1 = 0; p1 < p1Input.length; p1 += 1)
    {
      if (p1Input[p1] == winConditions[i][0] ||
          p1Input[p1] == winConditions[i][1] ||
          p1Input[p1] == winConditions[i][2] )
      {
        countP1.push(p1Input[p1]);
      }

      if (countP1.length >= 3)
      {
        for (var p = 0; p < 3; p +=1 )
        {
          el = document.getElementById(countP1[p]);
          
          el.style.backgroundColor = "red";
        }
        
        messageBox.innerHTML = "Player 1 Wins!";
        
        gameOver = true;
      }
      
    }
  
    for (var p2 = 0; p2 < p2Input.length; p2 += 1)
    {
      if (p2Input[p2] == winConditions[i][0] ||
          p2Input[p2] == winConditions[i][1] ||
          p2Input[p2] == winConditions[i][2] )
      {
        countP2.push(p2Input[p2]);
      }

      if (countP2.length >= 3)
      { 
        for (var q = 0; q < 3; q +=1 )
        {
          el = document.getElementById(countP2[q]);
          
          el.style.backgroundColor = "red";
        }
        
        messageBox.innerHTML = "Player 2 Wins!";
        
        gameOver = true;
      }
    }

    if (p2Input.length + p1Input.length >= 9 &&
        !gameOver)
    {
      gameOver = true;
      messageBox.innerHTML = "It's a Draw!";
    }
  }

  if (gameOver)
  {
    canClick = false;
    changePlayer();
  }       
};


var resetGame = function()
{
  var elements = [];

  for (var h = 0; h < 9; h +=1)
  {
    elements.push(document.getElementById(h));
  }
  
  for (var i = 0; i < elements.length; i+=1)
  {
    elements[i].onclick = handleInput;
    elements[i].value = "";
    elements[i].style.backgroundColor = "white";

    if (elements[i].classList.contains("playerOne"))
     {
        elements[i].classList.remove("playerOne");       
     }
    
   if (elements[i].classList.contains("playerTwo"))
     {
        elements[i].classList.remove("playerTwo");       
     }
  }

  messageBox.innerHTML = "";
  p1Input = [];
  p2Input = [];
  isPlayer1 = true;
  canClick = true;
  
  var arrow = document.getElementById('currentArrow');
  if (isPlayer1)
  {
    arrow.className = "tile arrow arrowLeft";  
  }
  else
  {
    arrow.className = "tile arrow arrowRight";
  }
};

var changePlayer = function()
{  
  var arrow = document.getElementById('currentArrow');
  
  if (isPlayer1)
  {
    isPlayer1 = false;
    arrow.className = "tile arrow arrowRight";  
  }

  else
  {
    isPlayer1 = true;
    arrow.className = "tile arrow arrowLeft";  
  }
};
