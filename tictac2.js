window.onload = function() {
	

	var box1 = document.getElementById("squareZero");
	var box2 = document.getElementById("squareOne");
	var box3 = document.getElementById("squareTwo");
	var box4 = document.getElementById("squareThree");
	var box5 = document.getElementById("squareFour");
	var box6 = document.getElementById("squareFive");
	var box7 = document.getElementById("squareSix");
	var box8 = document.getElementById("squareSeven");
	var box9 = document.getElementById("squareEight");
	var resetButton = document.getElementById("resetButton");
	var div = document.getElementById( "button" );
	var turn = 1;
	var moves = [ , , , , , , , , ];
	var box1Picked = false;
	var box2Picked = false;
	var box3Picked = false;
	var box4Picked = false;
	var box5Picked = false;
	var box6Picked = false;
	var box7Picked = false;
	var box8Picked = false;
	var box9Picked = false;



	

	if(turn % 2 === 0) {
			var sign = "O";
			alert("Player 2: It's your turn - You are O's");
		} else {
			alert("Player 1: It's your turn - You are X's");
			var sign = "X";
		}

		

		box1.onclick=function(){
			if (box1Picked !== true){
				this.innerHTML = sign;
				moves[0] = sign;
				} else {}	

					if(sign === "O"){
						sign ="X"; squareZero.style.background = "LemonChiffon";
					} else {
						sign = "O"; squareZero.style.background = "BlanchedAlmond";
						
					}
						turn += turn + 1;
						box1Picked = true;
					};	
	
			

		box2.onclick=function(){
			if (box2Picked !== true){
				this.innerHTML = sign;
				moves[1] = sign;	 
				} else {}

					if(sign === "O"){
						sign ="X"; squareOne.style.background = "LemonChiffon ";
						
					} else {
						sign = "O"; squareOne.style.background = "BlanchedAlmond";
						
					}
						turn += turn + 1;
						box2Picked = true;
					};	
				
			

		box3.onclick=function(){
				if (box3Picked !== true){
					this.innerHTML = sign;
					moves[2] = sign;
				} else {}

				    if(sign === "O") {
						sign ="X"; squareTwo.style.background = "LemonChiffon";
					
					} else {
						sign = "O"; squareTwo.style.background = "BlanchedAlmond";
					}
						turn += turn + 1;
						box3Picked = true;
					};
		

		box4.onclick=function(){
				if (box4Picked != true){
					this.innerHTML = sign;
					moves[3] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareThree.style.background = "LemonChiffon";
					} else {
						sign = "O"; squareThree.style.background = "BlanchedAlmond";
					}
						turn += turn + 1;
						box4Picked = true;
					};
		

		box5.onclick=function(){
				if (box5Picked != true){
					this.innerHTML = sign;
					moves[4] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareFour.style.background = "LemonChiffon";
					} else {
						sign = "O"; squareFour.style.background = "BlanchedAlmond";
					}
						turn += turn + 1;
						box5Picked = true;
					};
		

		box6.onclick=function(){
   			if (box6Picked != true){
   				this.innerHTML = sign;
				moves[5] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareFive.style.background = "LemonChiffon";
					} else {
						sign = "O"; squareFive.style.background = "BlanchedAlmond";
					}
						turn += turn + 1;
						box6Picked = true;
					};
		

		box7.onclick=function(){
			if (box7Picked != true){
				this.innerHTML = sign;
				moves[6] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareSix.style.background = "LemonChiffon";
					} else {
						sign = "O"; squareSix.style.background = "BlanchedAlmond";
					}
						turn += turn + 1;
						box7Picked = true;
					};

		

		box8.onclick=function(){
			if (box8Picked != true) {
				this.innerHTML = sign;
				moves[7] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareSeven.style.background = "LemonChiffon";
						
						} else {
							sign = "O"; squareSeven.style.background = "BlanchedAlmond";
						}
							turn += turn + 1;
							box8Picked = true;
						};
		


	box9.onclick=function(){
		if (box9Picked != true) {
			this.innerHTML = sign;
			moves[8] = sign;
				} else {}

					if(sign === "O") {
					sign ="X"; squareEight.style.background = "LemonChiffon";
					} else {
					sign = "O"; squareEight.style.background ="BlanchedAlmond";
					}
					turn += turn + 1;
					box9Picked = true;
				};

 
			



//to reload the page 
resetButton.onclick = function(){
   box1.text="";
   box1Picked = false;
   box2.text = "";
   box2Picked = false;
   box3.text="";
   box3Picked = false;
   box4.text="";
   box4Picked = false;
   box5.text="";
   box5Picked = false;
   box6.text="";
   box6Picked = false;
   box7.text="";
   box7Picked = false;
   box8.text="";
   box8Picked = false;
   box9.text="";
   box9Picked = false;


  };





};