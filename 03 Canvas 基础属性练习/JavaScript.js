
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

//ctx.beginPath();   // 起始一条路径或重置当前路径
//ctx.arc(95, 50, 45, 0, 2 * Math.PI);  // 圆心坐标 半径 起始角和结束角
//ctx.stroke();      // 执行

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
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);  // 六个数据为 渐变开始和结束的x,y坐标和半径

// 多个矩形
//ctx.fillStyle = "rgb(0,0,255)";
//ctx.fillRect(0, 0, 400, 400);
//ctx.fillStyle = "rgb(255,0,0)";
//ctx.fillRect(50, 50, 300, 300);
//ctx.fillStyle = "rgb(0,255,0)";
//ctx.fillRect(100, 100, 200, 200);
//ctx.fillStyle = "#bbb";
//ctx.fillRect(150, 150, 100, 100);

// 多个矩形 添加透明度
//ctx.fillStyle = "rgb(0,0,255)";
//ctx.fillRect(30, 30, 300, 300);
//ctx.fillStyle = "rgba(255,0,0,0.5)";
//ctx.fillRect(60, 60, 300, 300);
//ctx.fillStyle = "rgba(0,255,0,0.25)";
//ctx.fillRect(90, 90, 300, 300);

// 创建一个放射性渐变
var grd = ctx.createRadialGradient(300, 300, 0, 300, 300, 300);
grd.addColorStop("0", "magenta");
grd.addColorStop("0.25", "blue");
grd.addColorStop("0.50", "green");
grd.addColorStop("0.75", "yellow");
grd.addColorStop("1.0", "red");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 400);











