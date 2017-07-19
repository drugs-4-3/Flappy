var bird;
var pipes = [];
var lose_text = "";
var score = 0;
var lose = false;

function setup() {  
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();
    if (lose) {
        noLoop();
    }
    displayLoseText(lose_text); // text displayed when player lose
    displayScore(score); // displaying current score

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
    if (frameCount % 50 == 0) {
        pipes.push(new Pipe());
    }
    if (frameCount % 100 == 0) {
        score++;
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.raise();
    }
}

function displayScore(score) {
    textSize(16);
    text(parseInt(score), 50, 50);
}

function displayLoseText(_text) {
    textSize(32);
    text(_text, 80, 160);
}



