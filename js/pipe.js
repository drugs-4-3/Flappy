
function Pipe() {
    
    this.top = random(height - 64);
    this.bottom = random(this.top, height);
    this.x = width;
    this.w = 20;    
    this.speed = 5;
    this.min_gap = 64;

    this.color = (255, 255, 255);

    
    this.show = function() {
        if (height - this.bottom - this.top < this.min_gap) { // gap between top and bottom pipe
            var diff = height - this.bottom - this.top;
            var center = this.top + diff/2;
            this.top = center - this.min_gap/2;
            this.bottom = center + this.min_gap/2;
        }
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