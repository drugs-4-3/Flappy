
function Pipe() {
    
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;    
    this.speed = 5;

    this.color = (255, 255, 255);

    
    this.show = function() {
        fill(this.color);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, height);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.isHit = function(bird) {
        return (bird.x >= this.x && bird.x <= this.x + this.w) && (bird.y > height - this.bottom || bird.y <= this.top);
    }

    this.isOut = function() {
        return this.x <= 0;
    }

}