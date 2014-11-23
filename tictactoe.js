var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var turn = Boolean(true); //True = X && False = O
var clickedOne;
var clickedTwo;
var clickedThree;
var clickedFour;
var clickedFive;
var clickedSix;
var clickedSeven;
var clickedEight;
var clickedNine;

window.onload = function(){    
	//alert("loaded!");

var one = document.getElementById('div_1');
var two = document.getElementById('div_2');
var three = document.getElementById('div_3');
var four = document.getElementById('div_4');
var five = document.getElementById('div_5');
var six = document.getElementById('div_6');
var seven = document.getElementById('div_7');
var eight = document.getElementById('div_8');
var nine = document.getElementById('div_9');
var input1 = document.getElementById('div_1Input');
var input2 = document.getElementById('div_2Input');
var input3 = document.getElementById('div_3Input');
var input4 = document.getElementById('div_4Input');
var input5 = document.getElementById('div_5Input');
var input6 = document.getElementById('div_6Input');
var input7 = document.getElementById('div_7Input');
var input8 = document.getElementById('div_8Input');
var input9 = document.getElementById('div_9Input');
var reset = document.getElementById('reset');
var whoTurn = document.getElementById("whoTurn");

one.onclick = function(event) {
	if ((turn === true) && (clickedOne === undefined)) {
		input1.innerHTML = "X";
		a = 1;
		clickedOne = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedOne === undefined)) {
		input1.innerHTML = "O";
		a = 0;
		clickedOne = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
two.onclick = function(event) {
	if ((turn === true) && (clickedTwo === undefined)){
		input2.innerHTML = "X";
		b = 1;
		clickedTwo = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedTwo === undefined)) {
		input2.innerHTML = "O";
		b = 0;
		clickedTwo = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");	
	}
}; 
three.onclick = function(event) {
	if ((turn === true) && (clickedThree === undefined)) {
		input3.innerHTML = "X";
		c = 1;
		clickedThree = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedThree === undefined)) {
		input3.innerHTML = "O";
		c = 0;
		clickedThree = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
four.onclick = function(event) {
	if ((turn === true) && (clickedFour === undefined)) {
		input4.innerHTML = "X";
		d = 1;
		clickedFour = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedFour === undefined)) {
		input4.innerHTML = "O";
		d = 0;
		clickedFour = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
five.onclick = function(event) {
	if ((turn === true) && (clickedFive === undefined)) {
		input5.innerHTML = "X";
		e = 1;
		clickedFive = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedFive === undefined)) {
		input5.innerHTML = "O";
		e = 0;
		clickedFive = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
six.onclick = function(event) {
	if ((turn === true) && (clickedSix === undefined)) {
		input6.innerHTML = "X";
		f = 1;
		clickedSix = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedSix === undefined)) {
		input6.innerHTML = "O";
		f = 0;
		clickedSix = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
seven.onclick = function(event) {
	if ((turn === true) && (clickedSeven === undefined)) {
		input7.innerHTML = "X";
		g = 1;
		clickedSeven = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedSeven === undefined)){
		input7.innerHTML = "O";
		g = 0;
		clickedSeven = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
eight.onclick = function(event) {
	if ((turn === true) && (clickedEight === undefined)) {
		input8.innerHTML = "X";
		h = 1;
		clickedEight = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedEight === undefined)) {
		input8.innerHTML = "O";
		h = 0;
		clickedEight = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");
	}
};
nine.onclick = function(event) {
	if ((turn === true) && (clickedNine === undefined)) {
		input9.innerHTML = "X";
		i = 1;
		clickedNine = 1;
		displayTurn();
		gameOver();
	} else if ((turn === false) && (clickedNine === undefined)) {
		input9.innerHTML = "O";
		i = 0;
		clickedNine = 1;
		displayTurn();
		gameOver();
	} else {
		alert("That square has already been selected. Please select an empty square");		
	}
};

 reset.onclick = function (event) {
    location.reload();
}

var displayTurn = function () {
	turn = !turn;
	if (turn === true) {
		whoTurn.innerHTML = "Player 1, it's your turn"; 
	} else {
		whoTurn.innerHTML = "Player 2, it's your turn";
	}
	};

// Conditional to check if game is over
var gameOver = function () {
	if ((a === 1 && b === 1 && c ===1) || (a === 0 && b === 0 &&  c === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((d === 1 && e === 1 && f === 1) || (d === 0 && e === 0 && f === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((g === 1 && h === 1 && i === 1) || (g === 0 && h === 0 && i === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((a === 1 && d === 1 && g === 1) || (a === 0 && d === 0 && g === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((b === 1 && e === 1 && h === 1) || (b === 0 && e === 0 && h === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((c === 1 && f === 1 && i === 1) || (c === 0 && f === 0 && i === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((a === 1 && e === 1 && i === 1) || (a === 0 && e === 0 && i === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((c === 1 && e === 1 && g === 1) || (c === 0 && e === 0 && g === 0)) {
		if (turn === false) {
			alert("Player 1 - YOU WIN!")
		} else {
			alert("Player 2 - YOU WIN!")
		}
	} else if ((a != undefined) && (b != undefined) && (c != undefined) && (d != undefined) && (e != undefined) && (f != undefined) && (g != undefined) && (h != undefined) && (i != undefined)) {
			alert("This game is a tie. Click \"Start Over\" to start a new game")
	}
};

};