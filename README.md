# Extend
`v1.0.0`<br>
ES5 面向对象编程，构造函数继承的封装。
<br>
<br>

# Install/安装
克隆这个项目的源码或者下载压缩文件文件后，引入build文件夹内的 `extend.mini.js` 即安装完成。<br>
<pre>
<script src="you path/extend.mini.js"></script>
</pre>
<br>

# Using/使用
例子：
<pre>
    // 构造函数1
    function Fun1() { }
    Fun1.prototype.say = function () {
        console.log("Fun1");
    }
    
    // 构造函数2
    function Fun2() { }
    Fun2.prototype.talk = function () {
        console.log("Fun2");
    }
    
    // 使构造函数 Fun1 继承 构造函数 Fun2
    extend(Fun1, Fun2);
    
    // 创建一个 Fun1 实例化对象
    var fn = new Fun1();
    
    fn.talk();  // 打印 “Fun2”
</pre>
<br>

# Develop/开发
本插件开发过程中，使用了Gulp作为构建工具，并使用以下的Gulp插件:
* gulp-uglifyjs  // 压缩并丑化JS代码
* gulp-rename  // 文件重命名，为压缩后的文件添加.mini后缀

下载本插件源码之后，执行：
<pre>npm install</pre>
如果你使用的是 cnpm 则是：
<pre>cnpm install</pre>
安装完所有依赖之后，即可运行开发模式。<br>
<br>
源码中自带的`gulpfile.j`s文件定义了一个`Gulp的默认任务`，只需在命令行中执行:
<pre>gulp</pre>
就会监视`./working/extend.js`文件的变动，一单发生变动就会自动执行代码压缩丑化和重命名，导出文件到`./build/`文件夹内。
<br>
<br>
[My blogs/我的博客](http://www.the-zi.com/)<br>