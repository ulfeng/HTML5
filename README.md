## HTML5

#### 浏览器支持
HTML5 定了 8 个新的 HTML 语义（semantic） 元素。所有这些元素都是 块级 元素。
为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 display 属性值为 block:
```css
header, section, footer, aside, nav, main, article, figure {
    display: block;
}
```
Internet Explorer 8 及更早IE版本的浏览器不支持以上的方式，<br>
幸运的是， Sjoerd Visscher 创建了 "HTML5 Enabling JavaScript", " shiv":
```html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```
Google 资源库在国内不稳定：
```html
<!--[if lt IE 9]>
  <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

#### HTML5 新元素
canvas新元素
<table>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td>标签</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>canvas</td>
        <td>标签定义图形，比如图表和其它图像。改标签基于JavaScript的绘图API.</td>
    </tr>
</table>

新多媒体元素
<table>
    <tr>
        <td>标签</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>audio</td>
        <td>定义音频内容</td>
    </tr>
    <tr>
        <td>video</td>
        <td>定义视频（video 或者 movie）</td>
    </tr>
    <tr>
        <td>source</td>
        <td>定义多媒体资源 <video> 和 <audio></td>
    </tr>
    <tr>
        <td>embed</td>
        <td>定义嵌入的内容，比如插件。</td>
    </tr>
    <tr>
        <td>track</td>
        <td>为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。</td>
    </tr>
</table>

新的表单元素：
<table>
    <tr>
        <td>标签</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>datalist</td>
        <td>定义选项列表。请与input元素配合使用该元素。</td>
    </tr>
    <tr>
        <td>keygen</td>
        <td>规定用于表单的密钥对生成器字段</td>
    </tr>
    <tr>
        <td>output</td>
        <td>定义不同类型的输出，比如脚本的输出</td>
    </tr>
</table>

新的语义和结构元素：
<table>
    <tr>
        <td>标签</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>article</td>
        <td>定义页面独立的内容区域</td>
    </tr>
    <tr>
        <td>aside</td>
        <td>定义页面的侧边栏内容</td>
    </tr>
    <tr>
        <td>bdi</td>
        <td>允许您设置一段文本，使其脱离其父元素的文本方向设置。</td>
    </tr>
    <tr>
        <td>command</td>
        <td>定义命令按钮，比如单选按钮、复选框或按钮</td>
    </tr>
    <tr>
        <td>details</td>
        <td>用于描述文档或文档某个部分的细节</td>
    </tr>
    <tr>
        <td>dialog</td>
        <td>定义对话框，比如提示框</td>
    </tr>
    <tr>
        <td>summary</td>
        <td>标签包含details元素的标签</td>
    </tr>
    <tr>
        <td>figure</td>
        <td>规定独立的流内容(图像、图表、照片、代码等等)</td>
    </tr>
    <tr>
        <td>figcaption</td>
        <td>定义figure元素的标题</td>
    </tr>
    <tr>
        <td>footer</td>
        <td>定义section或document的页脚</td>
    </tr>
    <tr>
        <td>header</td>
        <td>定义了文档的头部区域</td>
    </tr>
    <tr>
        <td>mark</td>
        <td>定义带有记号的文本</td>
    </tr>
    <tr>
        <td>meter</td>
        <td>定义度量衡。仅用于已知最大和最小值的度量</td>
    </tr>
    <tr>
        <td>nav</td>
        <td>定义运行中的进度(进程)</td>
    </tr>
    <tr>
        <td>progress</td>
        <td>定义任何类型的任务的进度。</td>
    </tr>
    <tr>
        <td>ruby</td>
        <td>定义ruby注释(中文注音或字符)</td>
    </tr>
    <tr>
        <td>rt</td>
        <td>定义字符(中文注音或字符)的解释或发音</td>
    </tr>
    <tr>
        <td>rp</td>
        <td>在ruby注释中使用，定义不支持ruby元素的浏览器所显示的内容</td>
    </tr>
    <tr>
        <td>section</td>
        <td>定义文档中的节(section\区段)</td>
    </tr>
    <tr>
        <td>time</td>
        <td>定义日期或时间</td>
    </tr>
    <tr>
        <td>wbr</td>
        <td>规定在文本中的何处适合添加换行符</td>
    </tr>
</table>

#### HTML5 Canvas
canvas 标签定义图形，比如图表和其他图像，须使用脚本(javascript)来绘制图形。<br>

创建一个画布：
```javascript
<canvas id="myCanvas" width="200" height="100"></canvas>
```

使用 JavaScript 来绘制图像:
```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");  // 创建context对象
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
```

Canvas - 路径
```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");  // 创建context对象
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();  // 执行
```

Canvas - 圆<br>
方法：arc(x,y,r,start,stop,direction); <br>
参数：圆点x坐标，圆点y坐标，半径，开始弧度，结束弧度，方向(true：顺时针；false:逆时针)

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");  // 创建context对象
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.strole();
```

Canvas - 文本<br>
font - 定义字体<br>
fillText(text,x,y,maxWidth) - 在canvas上绘制实心的文本,文本/开始x坐标/开始y坐标/最大宽度(可选)<br> 
strokeText(text,x,y,maxWidth) - 在canvas上绘制空心的文本<br>
```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");  // 创建context对象;
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50); // 实心
ctx.strokeText("Hello World",10,50); // 空心
```








































































