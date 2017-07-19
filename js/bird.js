var gravity = 0.5;

function Bird() {
    
    this.y = height/2;
    this.x = 64;
    this.y_speed = 0;
    this.x_speed = 0;
    this.lift = -10;
    this.wasHit = false;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 50, 50);
    }  

    this.update = function() {
        this.fall_down();
    }

    // accelerate downwards
    this.fall_down = function() {
        this.y_speed += gravity;
        this.y += this.y_speed;
    }

    this.raise = function () {
        this.y_speed = this.lift;
    }

    this.isOut = function() {
        return this.y >= height || this.y <= 0;
    }
}