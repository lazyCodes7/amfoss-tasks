var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight / 2;
var speedOfPaddle1 = 0;
var positionOfPaddle1 = 220;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 220;
var topPositionOfBall = 210;
var leftPositionOfBall = 520;
var topSpeedOfBall = 100;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;
// We will keep a list of variables to keep track of all the important information.
// each keeps track of the corresponding top and left values, so that when the variables change, so do the style values
	
//7. gives a random left and top speed to the ball.
//If side is negative, the ball will move to the left. If side is positive ball will move to the right. 
// Next, the speed of the ball is set by random values
function startBall() {
	topPositionOfBall = 210;
	leftPositionOfBall = 520;
	if (Math.random() < 0.5) {
		var side = 1
	} else {
		var side = -1
	}
	topSpeedOfBall = Math.random() * 6 + 5;
	leftSpeedOfBall = side * (Math.random() * 6 + 5);
};

//2. keep track of the up and down values 
document.addEventListener('keydown', function (e) {
     if (e.keyCode == 87 || e.which == 87) { // W key
      speedOfPaddle1 = -10;
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      speedOfPaddle1 = 10;
     }
     if (e.keyCode == 38 || e.which == 38) { // up arrow
      speedOfPaddle2 = -10;
     }
     if (e.keyCode == 40 || e.which == 40) { // down arrow
      speedOfPaddle2 = 10;
     }
}, false);

// 3.stops the paddle when key is let go
document.addEventListener('keyup', function (e) {
	if (e.keyCode == 87 || e.which == 87) {
		speedOfPaddle1 = 0;
	}
	if (e.keyCode == 83 || e.which == 83) {
		speedOfPaddle1 = 0;
	}
	if (e.keyCode == 38 || e.which == 38) {
		speedOfPaddle2 = 0;
	}
	if (e.keyCode == 40 || e.which == 40) {
		speedOfPaddle2 = 0;
	}
}, false);

// function print() {
// 	console.log(positionOfPaddle1);
// }

//4. This function gets called 60 times per second 
window.setInterval(function show() {

	//stops paddles going beyond window
	// if the paddle position is 150 (this number was chosen to keep space for the title and scores) from the top of the screen,
	//  don’t change the position of the paddle. If the paddle position is a paddle length away from the bottom of the screen, then stop the paddle
	positionOfPaddle1 += speedOfPaddle1;
	positionOfPaddle2 += speedOfPaddle2;

	// 6. update ball position based on ball speed, this happens onload (script tags in html)
	// see Math.random function
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;

// 6.if the paddle is 1px away from edge of screen stop the paddle from moving beyond that point
	if (positionOfPaddle1 <= 1) {
		positionOfPaddle1 = 1;
	}
	if (positionOfPaddle2 <= 1) {
		positionOfPaddle2 = 1;
	}
	if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
		positionOfPaddle1 = window.innerHeight - paddleHeight;
	}
	if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
		positionOfPaddle2 = window.innerHeight - paddleHeight;
	}
	//8. If it bounces off the top of the screen, the top speed will become negative and it will go in the other direction
	if (topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius) {
		topSpeedOfBall = -topSpeedOfBall
	}

	// 9. reflect off paddle
	if (leftPositionOfBall <= paddleWidth) {
		if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			score2++;
			var audio = new Audio('audio/applause2.wav')		
			audio.play()
			startBall();
		}
	}
	if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
		if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			score1++
			var audio = new Audio('audio/applause2.wav')		
			audio.play()
			startBall();
		}
	}

	// 5. change the top px value of paddle
	//change the left 
	document.getElementById("paddle1").style.top = (positionOfPaddle1) + "px";
	document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";


	document.getElementById("ball").style.top = (topPositionOfBall) + "px";
	document.getElementById("ball").style.left = (leftPositionOfBall) + "px";
	document.getElementById('score1').innerHTML = score1.toString();
	document.getElementById('score2').innerHTML = score2.toString();
}, 1000/60);