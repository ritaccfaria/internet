// JavaScript Document

// CHECK JQUERY
$(function () {
	console.log("jQuery ready");
});






let showName = ["#showCat", "#showMeme", "#showGame"];
let className = ["cat", "meme", "game"];
let url = ["www.cat-videos.com", "www.memes4dayz.org", "www.the-best-game-ever.net"]
let bgc = ["aquamarine","darkorange", "#2c3e50"];

let time;

let catvideo = document.getElementById("catvideo"); 

let gameIsRunning = false;

// SELECIONAR SEPARADOR

function news() {
	
	window.scrollTo(0, 0);
	
	// reset das nofiticações
	n = 0;
	$("#news").html(`<img src="img/news/icon.png"> RP News`);
	
	clearTimeout(time);
	
	//desligar som de outros tabs
	//catvideo.muted = true;
	
	//mudar cor do fundo
	$("body").css("background-color", "white");
	
	//não iniciar o jogo sem querer
	gameIsRunning = false;
	
	$("#news").addClass("open");
	$("#cat").removeClass("open");
	$("#meme").removeClass("open");
	$("#game").removeClass("open");
	
	$("#showCat").removeClass("cat").addClass("hide");
	$("#showMeme").removeClass("meme").addClass("hide");
	$("#showGame").removeClass("game").addClass("hide");
	$("#showNews").addClass("news").removeClass("hide");
	
	$("#search").text("www.rpnews.com");
	
	
	// criar numero random
	let rn = Math.floor(Math.random() * 3);
	console.log(rn);
	
	

// EXPLUSAR UTILIZADOR DA NOTICIA PASSADO UM TEMPO
	
	time = setTimeout(function leave() {
		
		$("#showNews").removeClass("news").addClass("hide");
		$("#news").removeClass("open");
		
		// ativar um dos outros separadores aleatoriamente
		$("#"+className[rn]).addClass("open");
		$(showName[rn]).addClass(className[rn]).removeClass("hide");
		$("#search").text(url[rn]);
		$("body").css("background-color", bgc[rn]);
		
		
		/*if(rn == 0) {
			catvideo.muted = false;
		} else {
			catvideo.muted = true;
		}*/
		
		
	}, 2000);
	
	
}

function cat() {
	
	gameIsRunning = false;
	
	clearTimeout(time);
	
	//catvideo.muted = false;
	
	$("body").css("background-color", "#8BF1DD");
	
	$("#news").removeClass("open");
	$("#cat").addClass("open");
	$("#meme").removeClass("open");
	$("#game").removeClass("open");
	
	$("#showNews").removeClass("news").addClass("hide");
	$("#showMeme").removeClass("meme").addClass("hide");
	$("#showGame").removeClass("game").addClass("hide");
	$("#showCat").addClass("cat").removeClass("hide");
	
	$("#search").text(url[0]);
}

function meme() {
	
	gameIsRunning = false;
	
	clearTimeout(time);
	
	//catvideo.muted = true;
	
	$("body").css("background-color", "#EDAA43");
	
	$("#news").removeClass("open");
	$("#cat").removeClass("open");
	$("#meme").addClass("open");
	$("#game").removeClass("open");
	
	$("#showNews").removeClass("news").addClass("hide");
	$("#showCat").removeClass("cat").addClass("hide");
	$("#showGame").removeClass("game").addClass("hide");
	$("#showMeme").addClass("meme").removeClass("hide");
	
	$("#search").text(url[1]);
}

function game() {
	
	gameIsRunning = true;
	
	clearTimeout(time);
	
	//catvideo.muted = true;
	
	$("body").css("background-color", "#2c3e50");
	
	$("#news").removeClass("open");
	$("#cat").removeClass("open");
	$("#meme").removeClass("open");
	$("#game").addClass("open");
	
	$("#showNews").removeClass("news").addClass("hide");
	$("#showMeme").removeClass("meme").addClass("hide");
	$("#showCat").removeClass("cat").addClass("hide");
	$("#showGame").addClass("game").removeClass("hide");
	
	$("#search").text(url[2]);
}


$("#news").on("click", news);
$("#cat").on("click", cat);
$("#meme").on("click", meme);
$("#game").on("click", game);






// NOTIFICAÇÕES COM INTERVALOS ALEATORIOS + SOM (SÓ FUNCIONA DEPOIS DO UTILIZADOR INTERAGIR COM A PAGINA)

let n = 0;
let timer = 10000;
let run = setInterval(notif, timer);
let sound = document.getElementById("notif"); 
let max = 20000;
let min = 10000;

function notif() {
	
	n += 1;
	$("#news").html(`<img src="img/news/icon.png"> RP News (${n})`);	
	sound.play();
	
	
	//console.log(timer); 
    clearInterval(run); // stop the setInterval()

    timer = Math.floor(Math.random() * (max - min +1) + min);

        run = setInterval(notif, timer); // start the setInterval()
	
}





// NEWS DATA E HORA

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();

date = dd + '/' + mm + '/' + yyyy;


function checkTime(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          }

let today = new Date();
let h = today.getHours();
let m = today.getMinutes();

 m = checkTime(m);

$("#date").html(h + ":" + m + " · " + date);










// MEME VOTING SYSTEM

   
$(document).on("click", ".up", function () {
			
	let votes = $(this).parent("article").children("p").html();
	let number = parseInt(votes, 10);
			
			
	if($(this).attr('src') == "img/icons/up.png") {
			$(this).attr('src', "img/icons/up2.png");
			$(this).parent("article").children("p").html(number+1);
		}
			
	else {
			$(this).attr('src', "img/icons/up.png");
			$(this).parent("article").children("p").html(number-1);
		} 
			
	if($(this).parent("article").children(".down").attr('src') == "img/icons/down2.png") {
			$(this).parent("article").children("p").html(number+2);
			$(this).parent("article").children(".down").attr('src', "img/icons/down.png")
		}

});
           
       

$(document).on("click", ".down", function () {
			
	let votes = $(this).parent("article").children("p").html();
	let number = parseInt(votes, 10);
		
	
	if($(this).attr('src') == "img/icons/down.png") {
			$(this).attr('src', "img/icons/down2.png");
			$(this).parent("article").children("p").html(number-1);
		}
			 
	else {
			$(this).attr('src', "img/icons/down.png");
			$(this).parent("article").children("p").html(number+1);
		} 
			
	if($(this).parent("article").children(".up").attr('src') == "img/icons/up2.png") {
			$(this).parent("article").children("p").html(number-2);
			$(this).parent("article").children(".up").attr('src', "img/icons/up.png")
		}
           
});

	




// NEW MEMES A.K.A SHITPOSTING

let meme4 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>8943</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/4.png">
		</div>`;

let meme5 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>1283</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/5.jpeg">
		</div>`;

let meme6 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>645</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/6.jpeg">
		</div>`;

let meme7 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>712</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/7.png">
		</div>`;

let meme8 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>921</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/8.jpeg">
		</div>`;

let meme9 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>455</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/9.jpeg">
		</div>`;

let meme10 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>2346</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/10.jpeg">
		</div>`;

let meme11 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>7542</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/11.jpeg">
		</div>`;

let meme12 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>985</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/12.jpeg">
		</div>`;

let meme13 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>527</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/13.jpeg">
		</div>`;

let meme14 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>6356</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/14.jpeg">
		</div>`;

let meme15 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>4782</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/15.jpeg">
		</div>`;

let meme16 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>1754</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/16.jpeg">
		</div>`;

let meme17 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>7514</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/17.jpeg">
		</div>`;

let meme18 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>494</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/18.jpeg">
		</div>`;

let meme19 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>7251</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/19.jpeg">
		</div>`;

let meme20 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>163</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/20.jpeg">
		</div>`;

let meme21 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>2858</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/21.jpeg">
		</div>`;

let meme22 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>6492</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/22.jpeg">
		</div>`;

let meme23 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>5173</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/23.jpeg">
		</div>`;

let meme24 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>6492</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/24.jpeg">
		</div>`;

let meme25 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>6492</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/25.jpeg">
		</div>`;

let meme26 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>6492</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/26.jpeg">
		</div>`;

let meme27 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>1246</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/27.jpeg">
		</div>`;

let meme28 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>964</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/28.jpeg">
		</div>`;

let meme29 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>172</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/29.jpeg">
		</div>`;

let meme30 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>5216</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/30.jpeg">
		</div>`;

let meme31 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>816</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/31.jpeg">
		</div>`;

let meme32 = `<div>
			<article class="voting">
				<img class="up" src="img/icons/up.png">
				<p>382</p>
				<img class="down" src="img/icons/down.png">
			</article>
			<img class="pic" src="img/memes/32.jpeg">
		</div>`;


const newMeme = [meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16, meme17, meme18, meme19, meme20, meme21, meme22, meme23, meme24, meme25, meme26, meme27, meme28, meme29, meme30, meme31, meme32];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

let r = -1;
var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
ranNums = [],
i = arr.length,
j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i+1));
  ranNums.push(arr[j]);
  arr.splice(j, 1);
}


let memeTimer = 5000;
let memeRun = setInterval(postMeme, memeTimer); 


function postMeme() {
	let max = 20000;
	let min = 10000;
	
	r += 1;	
	$('#showMeme').append(newMeme[ranNums[r]]);
	
    clearInterval(memeRun); // stop the setInterval()

    memeTimer = Math.floor(Math.random() * (max - min +1) + min);

    memeRun = setInterval(postMeme, memeTimer); // start the setInterval()
	console.log(r+" "+ranNums[r]);
	
	
	if(r === 10) {
		setTimeout(refresh, 5000);
	}
	
}


function refresh() {
	
	
	$("#lastMeme").nextAll().remove();
	window.scrollTo(0, 0);
	
	shuffle(newMeme);
	r = -1;
	memeRun = setInterval(postMeme, memeTimer);
	
}




















// PONG


// Global Variables

var DIRECTION = {
	IDLE: 0,
	UP: 1,
	DOWN: 2,
	LEFT: 3,
	RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

// The ball object (The cube that bounces back and forth)
var Ball = {
	new: function (incrementedSpeed) {
		return {
			width: 18,
			height: 18,
			x: (this.canvas.width / 2) - 9,
			y: (this.canvas.height / 2) - 9,
			moveX: DIRECTION.IDLE,
			moveY: DIRECTION.IDLE,
			speed: incrementedSpeed || 9
		};
	}
};

// The paddle object (The two lines that move up and down)
var Paddle = {
	new: function (side) {
		return {
			width: 18,
			height: 70,
			x: side === 'left' ? 150 : this.canvas.width - 150,
			y: (this.canvas.height / 2) - 35,
			score: 0,
			move: DIRECTION.IDLE,
			speed: 10
		};
	}
};

var Game = {
	initialize: function () {
		this.canvas = document.querySelector('canvas');
		this.context = this.canvas.getContext('2d');

		this.canvas.width = 2400;
		this.canvas.height = 1500;

		this.canvas.style.width = (this.canvas.width / 2) + 'px';
		this.canvas.style.height = (this.canvas.height / 2) + 'px';

		this.player = Paddle.new.call(this, 'left');
		this.paddle = Paddle.new.call(this, 'right');
		this.ball = Ball.new.call(this);

		this.paddle.speed = 8;
		this.running = this.over = false;
		this.turn = this.paddle;
		this.timer = this.round = 0;
		this.color = '#2c3e50';

		Pong.menu();
		Pong.listen();
	},

	endGameMenu: function (text) {
		// Change the canvas font size and color
		Pong.context.font = '50px Courier New';
		Pong.context.fillStyle = this.color;

		// Draw the rectangle behind the 'Press any key to begin' text.
		Pong.context.fillRect(
			Pong.canvas.width / 2 - 350,
			Pong.canvas.height / 2 - 48,
			700,
			100
		);

		// Change the canvas color;
		Pong.context.fillStyle = '#ffffff';

		// Draw the end game menu text ('Game Over' and 'Winner')
		Pong.context.fillText(text,
			Pong.canvas.width / 2,
			Pong.canvas.height / 2 + 15
		);

		setTimeout(function () {
			Pong = Object.assign({}, Game);
			Pong.initialize();
		}, 3000);
	},

	menu: function () {
		// Draw all the Pong objects in their current state
		Pong.draw();

		// Change the canvas font size and color
		this.context.font = '50px Courier New';
		this.context.fillStyle = this.color;

		// Draw the rectangle behind the 'Press any key to begin' text.
		this.context.fillRect(
			this.canvas.width / 2 - 350,
			this.canvas.height / 2 - 48,
			700,
			100
		);

		// Change the canvas color;
		this.context.fillStyle = '#ffffff';

		// Draw the 'press any key to begin' text
		this.context.fillText('Press any key to begin',
			this.canvas.width / 2,
			this.canvas.height / 2 + 15
		);
	},

	// Update all objects (move the player, paddle, ball, increment the score, etc.)
	update: function () {
		if (!this.over) {
			// If the ball collides with the bound limits - correct the x and y coords.
			if (this.ball.x <= 0) Pong._resetTurn.call(this, this.paddle, this.player);
			if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.paddle);
			if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
			if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;

			// Move player if they player.move value was updated by a keyboard event
			if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
			else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;

			// On new serve (start of each turn) move the ball to the correct side
			// and randomize the direction to add some challenge.
			if (Pong._turnDelayIsOver.call(this) && this.turn) {
				this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
				this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
				this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
				this.turn = null;
			}

			// If the player collides with the bound limits, update the x and y coords.
			if (this.player.y <= 0) this.player.y = 0;
			else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);

			// Move ball in intended direction based on moveY and moveX values
			if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
			else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
			if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
			else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;

			// Handle paddle (AI) UP and DOWN movement
			if (this.paddle.y > this.ball.y - (this.paddle.height / 2)) {
				if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y -= this.paddle.speed / 1.5;
				else this.paddle.y -= this.paddle.speed / 4;
			}
			if (this.paddle.y < this.ball.y - (this.paddle.height / 2)) {
				if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y += this.paddle.speed / 1.5;
				else this.paddle.y += this.paddle.speed / 4;
			}

			// Handle paddle (AI) wall collision
			if (this.paddle.y >= this.canvas.height - this.paddle.height) this.paddle.y = this.canvas.height - this.paddle.height;
			else if (this.paddle.y <= 0) this.paddle.y = 0;

			// Handle Player-Ball collisions
			if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
				if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
					this.ball.x = (this.player.x + this.ball.width);
					this.ball.moveX = DIRECTION.RIGHT;

					beep1.play();
				}
			}

			// Handle paddle-ball collision
			if (this.ball.x - this.ball.width <= this.paddle.x && this.ball.x >= this.paddle.x - this.paddle.width) {
				if (this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.height >= this.paddle.y) {
					this.ball.x = (this.paddle.x - this.ball.width);
					this.ball.moveX = DIRECTION.LEFT;

					beep1.play();
				}
			}
		}

		// Handle the end of round transition
		// Check to see if the player won the round.
		if (this.player.score === rounds[this.round]) {
			// Check to see if there are any more rounds/levels left and display the victory screen if
			// there are not.
			if (!rounds[this.round + 1]) {
				this.over = true;
				setTimeout(function () { Pong.endGameMenu('Winner!'); }, 1000);
			} else {
				// If there is another round, reset all the values and increment the round number.
				//this.color = this._generateRoundColor();
				this.player.score = this.paddle.score = 0;
				this.player.speed += 0.5;
				this.paddle.speed += 1;
				this.ball.speed += 1;
				this.round += 1;

				beep3.play();
			}
		}
		// Check to see if the paddle/AI has won the round.
		else if (this.paddle.score === rounds[this.round]) {
			this.over = true;
			setTimeout(function () { Pong.endGameMenu('Game Over!'); }, 1000);
		}
	},

	// Draw the objects to the canvas element
	draw: function () {
		// Clear the Canvas
		this.context.clearRect(
			0,
			0,
			this.canvas.width,
			this.canvas.height
		);

		// Set the fill style to black
		this.context.fillStyle = this.color;

		// Draw the background
		this.context.fillRect(
			0,
			0,
			this.canvas.width,
			this.canvas.height
		);

		// Set the fill style to white (For the paddles and the ball)
		this.context.fillStyle = '#ffffff';

		// Draw the Player
		this.context.fillRect(
			this.player.x,
			this.player.y,
			this.player.width,
			this.player.height
		);

		// Draw the Paddle
		this.context.fillRect(
			this.paddle.x,
			this.paddle.y,
			this.paddle.width,
			this.paddle.height
		);

		// Draw the Ball
		if (Pong._turnDelayIsOver.call(this)) {
			this.context.fillRect(
				this.ball.x,
				this.ball.y,
				this.ball.width,
				this.ball.height
			);
		}

		// Draw the net (Line in the middle)
		this.context.beginPath();
		this.context.setLineDash([7, 15]);
		this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
		this.context.lineTo((this.canvas.width / 2), 140);
		this.context.lineWidth = 10;
		this.context.strokeStyle = '#ffffff';
		this.context.stroke();

		// Set the default canvas font and align it to the center
		this.context.font = '100px Courier New';
		this.context.textAlign = 'center';

		// Draw the players score (left)
		this.context.fillText(
			this.player.score.toString(),
			(this.canvas.width / 2) - 300,
			200
		);

		// Draw the paddles score (right)
		this.context.fillText(
			this.paddle.score.toString(),
			(this.canvas.width / 2) + 300,
			200
		);

		// Change the font size for the center score text
		this.context.font = '30px Courier New';

		// Draw the winning score (center)
		this.context.fillText(
			'Round ' + (Pong.round + 1),
			(this.canvas.width / 2),
			35
		);

		// Change the font size for the center score value
		this.context.font = '40px Courier';

		// Draw the current round number
		this.context.fillText(
			rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
			(this.canvas.width / 2),
			100
		);
	},

	loop: function () {
		Pong.update();
		Pong.draw();

		// If the game is not over, draw the next frame.
		if (!Pong.over) requestAnimationFrame(Pong.loop);
	},

	listen: function () {
		document.addEventListener('keydown', function (key) {
			// Handle the 'Press any key to begin' function and start the game.
			if (Pong.running === false && gameIsRunning === true ) {
				Pong.running = true;
				window.requestAnimationFrame(Pong.loop);
			}

			// Handle up arrow and w key events
			if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

			// Handle down arrow and s key events
			if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
		});

		// Stop the player from moving when there are no keys being pressed.
		document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
	},

	// Reset the ball location, the player turns and set a delay before the next round begins.
	_resetTurn: function(victor, loser) {
		this.ball = Ball.new.call(this, this.ball.speed);
		this.turn = loser;
		this.timer = (new Date()).getTime();

		victor.score++;
		beep2.play();
	},

	// Wait for a delay to have passed after each turn.
	_turnDelayIsOver: function() {
		return ((new Date()).getTime() - this.timer >= 1000);
	},

	// Select a random color as the background of each level/round.
	_generateRoundColor: function () {
		var newColor = colors[Math.floor(Math.random() * colors.length)];
		if (newColor === this.color) return Pong._generateRoundColor();
		return newColor;
	}
};

var Pong = Object.assign({}, Game);
Pong.initialize();



