const cvs = document.querySelector("#cvs");
/*
const ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(cvs.width / 2, 0);
ctx.lineTo(cvs.width / 2, cvs.height);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, cvs.height / 2);
ctx.lineTo(cvs.width, cvs.height / 2);
ctx.stroke();

const xList = [...new Array(500)].map((_, index) => (index - 250) * 4);

ctx.beginPath();
xList.forEach((x) => {
  ctx.lineTo(cvs.width / 2 + x, cvs.height / 2 + Math.sin(x / 10) * 40);
});
ctx.stroke();
*/
class Canvas {
  constructor(cvs, func) {
    this.cvs = cvs;
    this.ctx = this.cvs.getContext("2d");
    this.func = func;
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
  }

  draw() {
    const {ctx, cvs, func} = this;

    const xList = [...new Array(500)].map((_, index) => (index - 250) * 4);

    ctx.beginPath();
    xList.forEach((x) => {
      ctx.lineTo(cvs.width / 2 + x, cvs.height / 2 + func(x / 10) * 40);
    });
    ctx.stroke();

    this.drawAxes();
  }

  drawAxes() {
    const {ctx, cvs} = this;
     // ось х
    ctx.beginPath();
    ctx.moveTo(cvs.width / 2, 0);
    ctx.lineTo(cvs.width / 2, cvs.height);
    ctx.stroke();

    // ось y
    ctx.beginPath();
    ctx.moveTo(0, cvs.height / 2);
    ctx.lineTo(cvs.width, cvs.height / 2);
    ctx.stroke();
  }
}

const chart = new Canvas(cvs, Math.sin)
chart.draw()

