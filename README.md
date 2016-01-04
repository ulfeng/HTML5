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
canvas新元素<br>
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

新多媒体元素<br>
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

































































