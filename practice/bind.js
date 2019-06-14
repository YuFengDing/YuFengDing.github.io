Function.prototype.bind = function(ctx){
    const o = this;
    //取得除第一个参数之外剩余的参数
    const args = Array.prototype.slice.call(arguments,1);
    return function(){
        o.apply(ctx,args.concat(A))
    }
}
var name = 1;
var a = {
    name:2
}
function con(){
    console.log(this.name)
}
let con2 = con.bind(a);
con2();