function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        do {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * size;
            this.y = (Math.floor(Math.random() * cols - 1) + 1) * size;
        } while (this.overlaps());
    }

    this.draw = function() {
        context.fillStyle = "#6C8783";
        context.fillRect(this.x, this.y, size, size);
    }

    this.overlaps = function() {
        for (let i = 0; i < snake.tail.length; i++)
            if (snake.tail[i].x === this.x && snake.tail[i].y === this.y)
                return true;
        if (snake.x === this.x && snake.y === this.y)
            return true;
        return false;
    }
}