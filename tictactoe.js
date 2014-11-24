var x = []; 
var o = [];

var combos = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]];

var turn = 0;
var win = false;
var startover = document.getElementById("startover");

function clicked(divNum) {
	var d = document.getElementById("div" + divNum);

	if(d.innerHTML === "X" || d.innerHTML === "O"){
		alert("Illegal move.");
	} else {
		turn+=1;

	if (turn%2){ 
		d.innerHTML = "X";
		d.style.color = "pink";
        d.style.fontSize = "75px";
        d.style.fontWeight = "bold";
		x.push(divNum);
	} else {
		d.innerHTML = "O";
		d.style.color = "lightcyan";
        d.style.fontSize = "75px";
        d.style.fontWeight = "bold";
		o.push(divNum);
		}
	}
	
	for (var i = 0; i < combos.length; i++) {
		if(x.indexOf(combos[i][0]) >= 0) {
			if(x.indexOf(combos[i][1]) >= 0) {
				if(x.indexOf(combos[i][2]) >= 0) {
					alert("GAME OVER. X WINS!");
					window.reload();
					return win = true;	
				}
			}
		}
	}
	for (i = 0; i < combos.length; i++) {
		if(o.indexOf(combos[i][0]) >= 0) {
			if(o.indexOf(combos[i][1]) >= 0) {
				if(o.indexOf(combos[i][2]) >= 0) {
					alert("GAME OVER. O WINS!");
					window.reload();
					return win = true;					
				}
			}
		}
	}
	if (turn === 9 && win === false){
		alert("No winner.");
		window.reload();
	}
};

