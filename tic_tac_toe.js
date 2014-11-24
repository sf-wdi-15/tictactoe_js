var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var turn = Boolean(true);
var row1_col1Picked;
var row1_col2Picked;
var row1_col3Picked;
var row2_col1Picked;
var row2_col2Picked;
var row2_col3Picked;
var row3_col1Picked;
var row3_col2Picked;
var row3_col3Picked; 

window.onload = function() {
  alert("Tic Tac Toe!!  Player One is X, Player Two is O");
  
  //buttons
  var row1_col1 = document.getElementById("row1_col1"),
      row1_col2 = document.getElementById("row1_col2"),
      row1_col3 = document.getElementById("row1_col3"),
      row2_col1 = document.getElementById("row2_col1"),
      row2_col2 = document.getElementById("row2_col2"),
      row2_col3 = document.getElementById("row2_col3"),
      row3_col1 = document.getElementById("row3_col1"),
      row3_col2 = document.getElementById("row3_col2"),
      row3_col3 = document.getElementById("row3_col3"),
      reset = document.getElementById("reset_button"),
      player = document.getElementById("player"),
      display = document.getElementsByClassName("#square");
 
  row1_col1.onclick = function () {
      if ((turn === true) && (row1_col1Picked === undefined)) {
        a = 1;
        row1_col1.innerHTML = "X";
        row1_col1.style.background = "orange";
        playerTurn();
        row1_col1Picked = 1;
        checkWin();
      } else if ((turn === false) && (row1_col1Picked === undefined)) {
        a = 0;
        row1_col1.innerHTML = "O";
        row1_col1.style.background = "green";
        playerTurn();
        row1_col1Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row1_col2.onclick = function () {
      if ((turn === true) && (row1_col2Picked === undefined)) {
        b = 1;
        row1_col2.innerHTML = "X";
        row1_col2.style.background = "orange";
        playerTurn();
        row1_col2Picked = 1;
        checkWin();
      } else if ((turn === false) && (row1_col2Picked === undefined)) {
        b = 0;
        row1_col2.innerHTML = "O";
        row1_col2.style.background = "green";
        playerTurn();
        row1_col2Picked = 1;
        checkWin();
      }  else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row1_col3.onclick = function () {
      if ((turn === true) && (row1_col3Picked === undefined)) {
        c = 1;
        row1_col3.innerHTML = "X";
        row1_col3.style.background = "orange";
        playerTurn();
        row1_col3Picked = 1;
        checkWin();
      } else if ((turn === false) && (row1_col3Picked === undefined)) {
        c = 0;
        row1_col3.innerHTML = "O";
        row1_col3.style.background = "green";
        playerTurn();
        row1_col3Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
 
  row2_col1.onclick = function () {
      if ((turn === true) && (row2_col1Picked === undefined)) {
        d = 1;
        row2_col1.innerHTML = "X";
        row2_col1.style.background = "orange";
        playerTurn();
        row2_col1Picked = 1;
        checkWin();
      } else if ((turn === false) && (row2_col1Picked === undefined)) {
        d = 0;
        row2_col1.innerHTML = "O";
        row2_col1.style.background = "green";
        playerTurn();
        row2_col1Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row2_col2.onclick = function () {
      if ((turn === true) && (row2_col2Picked === undefined)) {
        e = 1;
        row2_col2.innerHTML = "X";
        row2_col2.style.background = "orange";
        playerTurn();
        row2_col2Picked = 1;
        checkWin();
      } else if ((turn === false) && (row2_col2Picked === undefined)) {
        e = 0;
        row2_col2.innerHTML = "O";
        row2_col2.style.background = "green";
        playerTurn();
        row2_col2Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row2_col3.onclick = function () {
      if ((turn === true) && (row2_col3Picked === undefined)) {
        f = 1;
        row2_col3.innerHTML = "X";
        row2_col3.style.background = "orange";
        playerTurn();
        row2_col3Picked = 1;
        checkWin();
      } else if ((turn === false) && (row2_col3Picked === undefined)) {
        f = 0;
        row2_col3.innerHTML = "O";
        row2_col3.style.background = "green";
        playerTurn();
        row2_col3Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row3_col1.onclick = function () {
      if ((turn === true) && (row3_col1Picked === undefined)) {
        g = 1;
        row3_col1.innerHTML = "X";
        row3_col1.style.background = "orange";
        playerTurn();
        row3_col1Picked = 1;
        checkWin();
      } else if ((turn === false) && (row3_col1Picked === undefined)) {
        g = 0;
        row3_col1.innerHTML = "O";
        row3_col1.style.background = "green";
        playerTurn();
        row3_col1Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row3_col2.onclick = function () {
      if ((turn === true) && (row3_col2Picked === undefined)) {
        h = 1;
        row3_col2.innerHTML = "X";
        row3_col2.style.background = "orange";
        playerTurn();
        row3_col2Picked = 1;
        checkWin();
      } else if ((turn === false) && (row3_col2Picked === undefined)) {
        h = 0;
        row3_col2.innerHTML = "O";
        row3_col2.style.background = "green";
        playerTurn();
        row3_col2Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
  row3_col3.onclick = function () {
      if ((turn === true) && (row3_col3Picked === undefined)) {
        i = 1;
        row3_col3.innerHTML = "X";
        row3_col3.style.background = "orange";
        playerTurn();
        row3_col3Picked = 1;
        checkWin();
      } else if ((turn === false) && (row3_col3Picked === undefined)) {
        i = 0;
        row3_col3.innerHTML = "O";
        row3_col3.style.background = "green";
        playerTurn();
        row3_col3Picked = 1;
        checkWin();
      } else {
      alert("That square has already been picked!  \n Please pick another square!");
    }
  };
  
   var playerTurn = function () {
  turn = !turn;
  if (turn === true) {
    player.innerHTML ="Player: 1"; 
  } else {
    player.innerHTML ="Player: 2";
  }
  };
   
  
  reset_button.onclick = function () {
      location.reload();
      alert("Starting a new game!  Player One is X, Player Two is O");
      //turn = true; 
      //row1_col1.innerHTML = "";
      //row1_col2.innerHTML = "";
      //row1_col3.innerHTML = "";
      //row2_col1.innerHTML = "";
      //row2_col2.innerHTML = "";
      //row2_col3.innerHTML = "";
      //row3_col1.innerHTML = "";
      //row3_col2.innerHTML = "";
      //row3_col3.innerHTML = "";
      //row1_col1.style.background = "black";
      //row1_col2.style.background = "black";
      //row1_col3.style.background = "black";
      //row2_col1.style.background = "black";
      //row2_col2.style.background = "black";
      //row2_col3.style.background = "black";
      //row3_col1.style.background = "black";
      //row3_col2.style.background = "black";
      //row3_col3.style.background = "black";
   }; 
  
  checkWin = function () {
    if ((a === 1 && b === 1 && c ===1) || (a === 0 && b === 0 &&  c === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((d === 1 && e === 1 && f === 1) || (d === 0 && e === 0 && f === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((g === 1 && h === 1 && i === 1) || (g === 0 && h === 0 && i === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((a === 1 && d === 1 && g === 1) || (a === 0 && d === 0 && g === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((b === 1 && e === 1 && h === 1) || (b === 0 && e === 0 && h === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((c === 1 && f === 1 && i === 1) || (c === 0 && f === 0 && i === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((a === 1 && e === 1 && i === 1) || (a === 0 && e === 0 && i === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((c === 1 && e === 1 && g === 1) || (c === 0 && e === 0 && g === 0)) {
    if (turn === false) {
      alert("Player 1 - YOU WIN!");
    } else {
      alert("Player 2 - YOU WIN!");
    }
  } else if ((a !== undefined) && (b !== undefined) && (c !== undefined) && (d !== undefined) && (e !== undefined) && (f !== undefined) && (g !== undefined) && (h !== undefined) && (i !== undefined)) {
    alert("This game is a tie. Click \"Start Over\" to start a new game");
    }
  };
};

  