// @authors The-Zi (the.zi@foxmail.com)
// @date    2018-01-25 12:04:47
// @version 1.0.0

// extend: 实现构造函数继承的方法的封装
// 参数：Child，必须，需要实现继承的构造函数；Parant，必须，被继承的构造函数；
// 参数类型：Function
// 返回值：无返回值
function extend(Child, Parant) {
    if (typeof Child === "function" && typeof Parant === "function") {        
        var Temp = function(){};
        Temp.prototype = Parant.prototype;
        
        Child.prototype = new Temp();
        Child.prototype.constructor = Child;
    
        Child.uber = Parent.prototype;    
    }
}
