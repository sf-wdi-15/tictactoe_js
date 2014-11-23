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
var gameNotOver = true;
var clickedOne = Boolean(false);
var clickedTwo = Boolean(false);
var clickedThree = Boolean(false);
var clickedFour = Boolean(false);
var clickedFive = Boolean(false);
var clickedSix = Boolean(false);
var clickedSeven = Boolean(false);
var clickedEight = Boolean(false);
var clickedNine = Boolean(false);

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

//while (gameNotOver) {
one.onclick = function(event) {
	if (turn === true) {
		input1.innerHTML = "X";
		a = "1";
	} else {
		input1.innerHTML = "O";
		a = 0;
	}
	turn = !turn;
};
two.onclick = function(event) {
	if (turn === true) {
		input2.innerHTML = "X";
		b = "1";
	} else {
		input2.innerHTML = "O";
		b = "0";
	}
	turn = !turn;
};
three.onclick = function(event) {
	if (turn === true) {
		input3.innerHTML = "X";
		c = "1";
	} else {
		input3.innerHTML = "O";
		c = "0";
	}
	turn = !turn
};
four.onclick = function(event) {
	if (turn === true) {
		input4.innerHTML = "X";
		d = "1";
	} else {
		input4.innerHTML = "O";
		d = "0";
	}
	turn = !turn
};
five.onclick = function(event) {
	if (turn === true) {
		input5.innerHTML = "X";
		e = "1";
	} else {
		input5.innerHTML = "O";
		e = "0";
	}
	turn = !turn
};
six.onclick = function(event) {
	if (turn === true) {
		input6.innerHTML = "X";
		f = "1";
	} else {
		input6.innerHTML = "O";
		f = "0";
	}
	turn = !turn
};
seven.onclick = function(event) {
	if (turn === true) {
		input7.innerHTML = "X";
		g = "1";
	} else {
		input7.innerHTML = "O";
		h = "0";
	}
	turn = !turn
};
eight.onclick = function(event) {
	if (turn === true) {
		input8.innerHTML = "X";
		h = "1";
	} else {
		input8.innerHTML = "O";
		h = "1";
	}
	turn = !turn
};
nine.onclick = function(event) {
	if (turn === true) {
		input9.innerHTML = "X";
		i = "1";
	} else {
		input9.innerHTML = "O";
		i = "0";
	}
	turn = !turn
};

 reset.onclick = function (event) {
    location.reload();
}

// Conditional to check if game is over
if ((a === 1 && b === 1 && c ===1) || (a === 0 && b === 0 &&  c === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((d === 1 && e === 1 && f === 1) || (d === 0 && e === 0 && f === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((g === 1 && h === 1 && i === 1) || (g === 0 && h === 0 && i === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((a === 1 && d === 1 && g === 1) || (a === 0 && d === 0 && g === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((b === 1 && e === 1 && h === 1) || (b === 0 && e === 0 && h === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((c === 1 && f === 1 && i === 1) || (c === 0 && f === 0 && i === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((a === 1 && e === 1 && i === 1) || (a === 0 && e === 0 && i === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if ((c === 1 && e === 1 && g === 1) || (c === 0 && e === 0 && g === 0)) {
	gameNotOver = false;
	alert("Game Over!");
} else if (a != undefined && b != undefined && c != undefined && d != undefined && e != undefined && f != undefined && g != undefined && h != undefined && i != undefined) {
	gameNotOver = false;
	alert("Game Over!");
}



//alert("Game Over!")
//} Game over while conditional closing


};