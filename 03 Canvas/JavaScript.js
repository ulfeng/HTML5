
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");    // getContext("2d")对象是内建的HTML5对象,拥有多种绘制路径、圆形、矩形、字符及添加对象的方法

// 创建一个红色矩形

//ctx.fillStyle = "#FF0000";
//ctx.fillRect(0, 0, 150, 75);

// 路径

//ctx.moveTo(0, 0);
//ctx.lineTo(200, 100);
//ctx.stroke();

// 圆

//ctx.beginPath();
//ctx.arc(95, 50, 45, 0, 2 * Math.PI);
//ctx.stroke();

// 文本

//ctx.font = "30px Arial";
//ctx.strokeText("Hello World", 10, 50);

// 渐变

// Create gradient
//var grd=ctx.createLinearGradient(0,0,200,0);  // 四个数据为 渐变开始和结束的x,y坐标
//grd.addColorStop(0, "red");
//grd.addColorStop(1, "white");

//// Fill with gradient
//ctx.fillStyle = grd;
//ctx.fillRect(10,10,150,80)

// 径向圆
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);  // 六个数据为 渐变开始和结束的x,y坐标和半径






