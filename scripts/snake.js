function Snake() {
    this.x = 0;
    this.y = 0;
    this.prevX = this.x;
    this.prevY = this.y;
    this.xSpeed = size;
    this.ySpeed = 0;
    this.dir = 1;

    this.total = 0;
    this.tail = [];
    this.parity = false;
    
    this.score = 0;

    this.draw = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (!this.parity)
            {
                if (i & 1)
                    context.fillStyle = "#924138";
                else context.fillStyle = "#ED6A5A";
            }
            else
            {
                if (i & 1)
                    context.fillStyle = "#ED6A5A";
                else context.fillStyle = "#924138";
            }
            context.fillRect(this.tail[i].x, this.tail[i].y, size, size);
        }
        context.fillStyle = "#ED6A5A";
        context.fillRect(this.x, this.y, size, size);
    }

    this.update = function() {
        this.prevX = this.x;
        this.prevY = this.y;

        for (let i = 0; i < this.tail.length - 1; i++)
            this.tail[i] = this.tail[i + 1];
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x >= canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y >= canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        if (this.x != this.prevX) this.dir = 1;
        else this.dir = 2;
    }

    this.changeDirection = function(dir) {
        switch (dir) {
            case 'Up':
                if (this.dir != 2) {
                    this.xSpeed = 0;
                    this.ySpeed = -size;
                }
                break;
            case 'Left':
                if (this.dir != 1) {
                    this.xSpeed = -size;
                    this.ySpeed = 0;
                }
                break;
            case 'Down':
                if (this.dir != 2) {
                    this.xSpeed = 0;
                    this.ySpeed = size;
                }
                break;
            case 'Right':
                if (this.dir != 1) {
                    this.xSpeed = size;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            this.score++;
            this.parity = !this.parity;
            return true;
        }
        return false;
    }

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
                this.tail = [];
                this.total = 0;
                this.score = 0;
                this.parity = false;
                this.prevX = this.x;
                this.prevY = this.y;
            }
        }
    }
}