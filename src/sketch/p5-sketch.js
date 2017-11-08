import p5 from 'p5';

const sketch = (p5) => {
    let canvas;
    let x = 0;
    let y = 0;

    p5.setup = () => {
        canvas = p5.createCanvas(400, 400);
        canvas.parent('sketch');
        p5.background(0);
    }
    p5.draw = () => {
        p5.stroke(255);
        if (p5.random(1) < 0.5) {
            p5.line(x, y, x + 10, y + 10);
        } else {
            p5.line(x, y + 10, x + 10, y);
        }
        x += 10;
    }
}

class Sketch {
    constructor() {
        this.p5 = p5;
    }

    start() {
        new this.p5(sketch);
    }
}

export default new Sketch();
