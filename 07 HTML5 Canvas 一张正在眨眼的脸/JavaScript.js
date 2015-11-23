
window.onload = function () {
    var c = document.getElementById("myCanvasTag");
    var ctx = c.getContext("2d");

    // draw face
    ctx.beginPath();
    ctx.arc(300, 250, 200, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.stroke();

    // draw left eye
    ctx.beginPath();
    ctx.arc(220, 150, 30, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(100,100,225)";
    ctx.fill();  // fill() 方法填充当前图像颜色

    // draw left iris (虹膜)
    ctx.beginPath();
    ctx.arc(220, 150, 10, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();

    // draw left eyelid (眼睑)
    ctx.beginPath();
    ctx.arc(220, 150, 30, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.fill();

    // draw left eyelasher (睫毛)
    ctx.strokeStyle = "rgb(0,0,0)";
    lashes(ctx, 198, 170, 193, 185);
    lashes(ctx, 208, 177, 204, 193);
    lashes(ctx, 220, 180, 220, 195);
    lashes(ctx, 232, 177, 236, 193);
    lashes(ctx, 242, 170, 247, 185);
    ctx.stroke();

    openEye();

    // draw right eyelashes
    ctx.strokeStyle = "rgb(0,0,0)";
    lashes(ctx, 358, 170, 353, 185);
    lashes(ctx, 368, 177, 363, 193);
    lashes(ctx, 380, 180, 380, 195);
    lashes(ctx, 392, 177, 396, 193);
    lashes(ctx, 402, 170, 407, 185);
    ctx.stroke();

    // draw nose
    ctx.beginPath();
    ctx.arc(300, 250, 20, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.stroke();

    // draw smile
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(180, 320);  // 开始点
    ctx.bezierCurveTo(140, 320, 340, 420, 400, 360);  // 三次贝塞尔曲线的控制点，两个控制点和结束点
    ctx.closePath();
    ctx.stroke();

    // draw message at bottom
    ctx.font = "1em sans-serif";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Move the mouse over and off the canvas - the face winks!", 10, 480);

}

function lashes(cntx, x1, y1, x2, y2) {
    cntx.moveTo(x1, y1);
    cntx.lineTo(x2, y2);
}

function closeEye() {
    // close right eye
    var c = document.getElementById("myCanvasTag");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(380, 150, 30, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.fill();
}

function openEye() {
    // open right eye
    var c = document.getElementById("myCanvasTag");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(380, 150, 30, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(100,100,225)";
    ctx.fill();

    // draw right iris
    ctx.beginPath();
    ctx.arc(380, 150, 10, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();

    // draw right eyeid
    ctx.beginPath();
    ctx.arc(380, 150, 30, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.fill();
}