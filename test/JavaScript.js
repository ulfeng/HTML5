// HTML5 服务器发送事件(Server-Sent Events)
// 允许网页获得来自服务器的更新
// 例子:Fack/Twitter 更新、估价更新等
// 浏览器支持性，除了Internet Explorer

// EventSource 对象用于接收服务器发送事件通知
var source = new EventSource("demo.sse.php");
source.onmessage = function (event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
}

// 解析:
// 创建一个新的 EventSouce 对象，然后规定发送更新的页面的URL(本例中是"demo_sse.php");
// 每接收一次更新，就会发生onmessage事件
// 当onmessage事件发生时，把已接收的数据推入id为"result"的元素中

// 检测Server-Sent 事件支持
// 以下实例，我们编写了一段额外的代码来检测服务器发送事件的浏览器支持情况
if (typeof (EventSource) !== "undefined") {
    // Yes! Server-sent events support!
    // Some code......
}
else {
    // Sorry! No server-sent events support..
}

// 服务器端代码实例
// 需要能够发送数据更新的服务器(比如PHP和ASP)
// PHP
// <?php
// header('Content-Type: text/event-stream');
// header('Cache-Control: no-cache');
// $time = date('r');
// echo "data: The server time is: {$time}nn";
// flush();
// ?>

// ASP
// <%
// Response.ContentType="text/event-stream"
// Response.Expores=-1
// REsponse.Write("data: "& now());
// Response.Flush()
// %>


// HTML5 web workers
// web worker是运行在后台的JavaScript,不会影响页面性能

// 浏览器支持:
// IE10+，Firefox,Chrome,Safari,Opera
// 计数 demo
var w;
function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("demo_works.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
        };
    }
    else {
        document.getElementById("result").innerHTML="抱歉！您的浏览器不支持Web Workers."
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

// 应用程序缓存(Application Cache)
// 优势：
// 1、离线浏览 -用户可在应用离线时使用它们
// 2、速度 - 已缓存资源加载的更快
// 3、减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源
// 浏览器支持:
// IE 10,Firefox,Chrome,Safari和Opera

//  如需启用应用程序缓存，请在文档总<html>标签中包含manifest属性:
// <!DOCTYPE HTML>
// <html manifest="demo.appcache">
// ...
// </html>

// Mainfest 文件
// mainfest 文件是简单的文本文件，它告知浏览器被缓存的内容(以及不缓存的内容)。
// mainfest 文件可分为三个部分:
// CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
// NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
// FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面


// CACHE MANIFEST
// theme.css
// logo.gif
// main.js
// NETWORK
// login.php
// 可以使用星号来表示所有其他资源/文件都需要因特网链接
// NETWORK:
// *

// FALLBACK
// FAllBACK 规定如果无法建立因特网链接，则用"offine.hmtl"替代/html5/目录中所有的文件:
// FAllBACK
// html/ /offline.html


// HTML5 Web SQL 数据库
// 使用SQL操作客户端数据库的APIS
// 核心方法:
// 1、openDatabase:这个方法使用现有的数据库或者新建的数据库创建一个数据库对象
// 2、transaction:这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚
// 3、executeSql:这个方法用于执行实际的SQL查询。

// 打开数据库
// var db=openDatabase('mydb','1.0','Test DB',2*1024*1024);
// 参数说明：1、数据库名称；2、版本号；3、描述文本；4、数据库大小；5、创建回调

// 执行查询操作
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (txt) {
    tx.executeSql('CREATE TABLE IF NOTE EXISTS LOGS (id unique, log)'); // 创建一个名为LOGS的表
    // tx.executeSql('INSORT INTO LOGS (id,lo) VALUES (?,?)'), [e_id, e_log]; // 插入数据
    tx.executeSql('INSERT INTO LOGS(id,log) VALUES (1, "菜鸟教城")');
    tx.executeSql('INSERT INTO LOGS(id,log) VALUES (2,"www.runoob.com")');
});

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>查询记录条数：" + len + "</p>";
        document.querySelector('#status').innerHTML += msg;

        for (i = 0; i < len; i++) {
            alert(results.rows.item(i).log);
        }
    }, null)
});


// 删除记录
db.transaction(function (tx) {
    tx.executeSql('DELETE FROM LOGS WHERE id=1');
});

// 删除指定的数据id也可以是动态的:
db.transaction(function (tx) {
    tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
});

// 更新记录
db.transaction(function (tx) {
    tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2');
});

// HTML5 Web 存储
// 比cookie更好的本地存储方式
// 浏览器支持:IE8+,Firefox,Opera,Chrome,Sarfri
// There are two new objects for storing data on the client
// localStorage - 没有时间限制的数据存储
// sessionStorage - 针对一个session的数据存储

// 检查浏览器是否支持
if (typeof (Storage) !== "undefined") {
    // Yes! localStorage and sessionStorage support!
    // Some code....
}
else {
    // Sorry! No web storage support...
}

// localStorage 对象
// localStorage 对象存储的数据没有时间限制
localStorage.lastname = "Smith";
document.getElementById("result").innerHTML = "Last name: " + localStorage.lastname;

// sessionStorage 对象
// sessionStorage 方法是针对一个session进行数据存储。当用户关闭浏览器窗口后，数据会被删除
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
}
else {
    document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in the session";
}

// 语义元素
// <header>
// <nav>
// <section>
// <article>
// <aside>
// <figcaption>
// <figure>
// 规定独立的流内容(图像、图表、照片、代码等)
// <footer>

// 表单元素
// <datalist>
// <keygen>
// <output>



