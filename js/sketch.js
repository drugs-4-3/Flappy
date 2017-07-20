var bird;
var pipes = [];
var lose_text = "";
var score = 0;
var lose = false;
// var smiley;

// function preload() {
//     smiley = loadImage('assets/smiley.png');
// }

function setup() {  
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    if (lose) {
        noLoop();
    }
    background(0);
    for (i = 0; i < pipes.length; i++) {
        pipe = pipes[i];
        pipe.update();
        pipe.show();
        if (pipe.isHit(bird) || bird.isOut()) {
            pipe.color = color(255, 0, 0);
            textSize(32);
            fill(255, 0, 0);
            lose_text = "WERCIA PRZEGRAUA XD";
            lose = true;
        }

        if (pipe.isOut()) {
            pipes.splice(i, 1); // removes pipe from array
        }
    }

    if (frameCount % 15 == 0) {
        if(random(100) > 72) {
            pipes.push(new Pipe());
        }
        
    }
    if (frameCount % 100 == 0) {
        score++;
    }
    displayLoseText(lose_text); // text displayed when player lose
    displayScore(score); // displaying current score
    bird.update();
    bird.show();
}

function keyPressed() {
    if (key == ' ') {
        bird.raise();
    }
}

function displayScore(score) {
    textSize(16);
    fill(255);    
    text(parseInt(score), 50, 50);
}

function displayLoseText(_text) {
    textSize(32);
    fill(255, 0, 0);
    text(_text, 80, 160);
}



