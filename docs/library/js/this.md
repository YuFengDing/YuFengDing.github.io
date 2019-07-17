# this
// eslint-disable-next-line
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
