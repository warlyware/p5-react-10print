import p5 from 'p5';

const sketch = (p5) => {
    let canvas;
    let x = 0;
    let y = 0;
    let spacing = 10;

    p5.setup = () => {
        canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent('sketch');
        p5.background(0);
    }
    p5.draw = () => {
        p5.stroke(255);
        if (p5.random(1) < 0.5) {
            p5.line(x, y, x + spacing, y + spacing);
        } else {
            p5.line(x, y + spacing, x + spacing, y);
        }
        x += spacing;
        if (x > p5.width) {
            x = 0;
            y += spacing;
        }
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
