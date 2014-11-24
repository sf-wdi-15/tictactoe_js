window.onload = function() {


//This tests js
//alert("javascript working");


// define each div in the html as a squared
var box0 = document.getElementById("squareZero");
var box1 = document.getElementById("squareOne");
var box2 = document.getElementById("squareTwo");
var box3 = document.getElementById("squareThree");
var box4 = document.getElementById("squareFour");
var box5 = document.getElementById("squareFive");
var box6 = document.getElementById("squareSix");
var box7 = document.getElementById("squareSeven");
var box8 = document.getElementById("squareEight");
var turn = 1;
// create an undefined array with 9 slots, one for each block.
var moves = [];
//presents message upon ending
var endOfGame = "";


if(turn % 2 === 0) {
  var sign = "O";
  alert("Player 2: It's your turn - You are O's");
}

else {
  var sign = "X";
  alert("Player 1:It's your turn - You are X's");
}


//selection on squareZero
box0.onclick=function() {
//doesn't let them add another character


	if (box0.innerHTML === "X" || box0.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box0.innerHTML = box0.innerHTML + sign;

	if (box0.innerHTML === "X") {
    box0.classList.add("Red");
    }
    else
    box0.classList.add("Blue");
    moves[0] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}




 turn += turn + 1;

};


//selection on squareOne
box1.onclick=function() {
//doesn't let them add another character


	if (box1.innerHTML === "X" || box1.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box1.innerHTML = box1.innerHTML + sign;

	if (box1.innerHTML === "X") {
    box1.classList.add("Red");
    }
    else
    box1.classList.add("Blue");
    moves[1] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};


box2.onclick=function() {
//doesn't let them add another character


	if (box2.innerHTML === "X" || box2.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box2.innerHTML = box2.innerHTML + sign;

	if (box2.innerHTML === "X") {
    box2.classList.add("Red");
    }
    else
    box2.classList.add("Blue");
    moves[2] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};


box3.onclick=function() {
//doesn't let them add another character


	if (box3.innerHTML === "X" || box3.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box3.innerHTML = box3.innerHTML + sign;

	if (box3.innerHTML === "X") {
    box3.classList.add("Red");
    }
    else
    box3.classList.add("Blue");
    moves[3] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};

box4.onclick=function() {
//doesn't let them add another character


	if (box4.innerHTML === "X" || box4.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box4.innerHTML = box4.innerHTML + sign;

	if (box4.innerHTML === "X") {
    box4.classList.add("Red");
    }
    else
    box4.classList.add("Blue");
    moves[4] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};


box5.onclick=function() {
//doesn't let them add another character


	if (box5.innerHTML === "X" || box5.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box5.innerHTML = box5.innerHTML + sign;

	if (box5.innerHTML === "X") {
    box5.classList.add("Red");
    }
    else
    box5.classList.add("Blue");
    moves[5] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};




box6.onclick=function() {
//doesn't let them add another character


	if (box6.innerHTML === "X" || box6.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box6.innerHTML = box6.innerHTML + sign;

	if (box6.innerHTML === "X") {
    box6.classList.add("Red");
    }
    else
    box6.classList.add("Blue");
    moves[6] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};



box7.onclick=function() {
//doesn't let them add another character


	if (box7.innerHTML === "X" || box7.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box7.innerHTML = box7.innerHTML + sign;

	if (box7.innerHTML === "X") {
    box7.classList.add("Red");
    }
    else
    box7.classList.add("Blue");
    moves[7] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};

box8.onclick=function() {
//doesn't let them add another character


	if (box8.innerHTML === "X" || box8.innerHTML === "O")
{
	alert("seat's taken...can't sit here.");
}

else
{
	box8.innerHTML = box8.innerHTML + sign;

	if (box8.innerHTML === "X") {
    box8.classList.add("Red");
    }
    else
    box8.classList.add("Blue");
    moves[8] = sign;
}

if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
		||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
 		||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
 		||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
 		||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
 		||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
 		||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
 		{
 		endOfGame = confirm("You win, Player One!");
 		}
 		
 		//check to see if x is a winner - array positions represent 8 winning combos
 		else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
		||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
 		||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
 		||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
 		||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
 		||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
 		||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
 		{
		endOfGame = confirm("You win, Player Two!");
 		}


   if(sign === "O") {
  sign ="X";
}
   else {
 sign = "O";
}


 turn += turn + 1;

};

};


  
  //check for winning combinations





//possible combinations
//





