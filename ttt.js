
var turn = 0;
var x = [];
var o = [];
var winCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var someoneWins = false;



function canvasClicked(canvasNumber){
		
		var turnTurn = document.getElementById("playerTurn");
		var theCanvas = "canvas" + canvasNumber;
		var c = document.getElementById(theCanvas);
		
		
		if (c.innerHTML === "X" || c.innerHTML === "O"){
			alert("spot taken");}
		else{
		turn+=1;
		if(turn % 2) {c.innerHTML = "X" ; 
		c.style.backgroundColor = "black"; 
		c.style.color = "white"; 
		x.push(canvasNumber);
		turnTurn.innerHTML = "Player O Turn";
		}
		else {c.innerHTML = "O"; 
		c.style.backgroundColor = "black"; 
		c.style.color = "white"; 
		o.push(canvasNumber);
		turnTurn.innerHTML = "Player X Turn";
		}}
		
		for (var i = 0; i<winCombo.length; i++){
			if(x.indexOf(winCombo[i][0]) >= 0) {
				if(x.indexOf(winCombo[i][1]) >= 0) {
					if(x.indexOf(winCombo[i][2]) >= 0) {
						alert("X wins");
						location.reload();
						return someoneWins = true;
						
					}
				}
			} 
		}
		for (var i = 0; i<winCombo.length; i++){
			if(o.indexOf(winCombo[i][0]) >= 0) {
				if(o.indexOf(winCombo[i][1]) >= 0) {
					if(o.indexOf(winCombo[i][2]) >= 0) {
						alert("O wins");
						location.reload();
						return someoneWins = true;
						
					}
				}
			} 
		};


		if(turn === 9 && someoneWins === false){
			alert("No one wins");
			location.reload();
		}
		

		
	};
	

