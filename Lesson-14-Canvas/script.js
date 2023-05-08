const cvs = document.querySelector('#cvs');

const ctx = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;


/*
const a = (cvs.width / 2) - 50 ;
const b = (cvs.height / 2) - 50;

for (let i = 0;  i < 5; i++) {
    ctx.strokeRect(100*i, 100*i, 100, 100);
}

const cross = (num) => {

    for (let i = 0;  i < num; i++) {
        ctx.strokeRect(100*i, 100*i, 100, 100);
        ctx.strokeRect(100 * (num - 1)  - i * 100, 100 * i,  100, 100);
    }
}

cross(5);


ctx.beginPath();
ctx.lineTo(100, 100);
ctx.lineTo(100, 200);
ctx.lineTo(200, 200);
ctx.moveTo(300, 500);
ctx.lineTo(300, 500);
ctx.lineTo(300, 100);
ctx.stroke();
*/