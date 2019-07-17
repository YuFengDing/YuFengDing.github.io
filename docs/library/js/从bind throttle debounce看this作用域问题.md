# 从bind throttle debounce看this作用域问题
结合几个比较经典的api讲一下this作用域的问题。(先开个坑)
```
// eslint-disable-next-line
// 陷阱1：如果 a = 1,没有用 var const let之类声明在浏览器环境下会被挂载在window对象的属性下
a = 1;
const test = function (callBack) {
  this.a = 2;
  return function () {
    console.log(this);
    callBack && callBack();
  };
};
const b = {
  test: '',
  a: '5',
};
b.test = test();
b.test();
function test2() { console.log(this.a); }
test2();
function asdf() { console.log(this.a); }
asdf();
```