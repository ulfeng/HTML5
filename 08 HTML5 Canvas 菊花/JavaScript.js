window.onload = function () {
    draw("canvas1");
    drawBez("canvas2");
    drawSpecFlower("canvas3");
}
function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEEEEF";
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    var dx = 150;
    var dy = 150;
    var s = 100;
    context.beginPath();
    context.fillStyle = "rgb(100,255,100)";
    context.strokeStyle = "rgb(0,0,100)";
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15 * 11;
    for (var i = 0; i < 30; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

function drawBez(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext("2d");
    context.moveTo(50, 50);
    context.bezierCurveTo(50, 50, 150, 50, 150, 150);
    context.stroke();
    context.quadraticCurveTo(150, 250, 250, 250);
    context.stroke();
}

function drawSpecFlower(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext("2d");
    context.fillStyle = "#eeeeef";
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    var dx = 150;
    var dy = 150;
    var s = 100;
    context.beginPath();
    context.globalCompositeOperation = "and";
    context.fillStyle = "rgb(100,255,100)";
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15 * 11;
    context.moveTo(dx, dy);

    for (var i = 0; i < 30; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}