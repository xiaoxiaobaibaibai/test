// {
// let a = 111;
// var b = 222;
// }

// console.log("b");
//let 命令的性质 
//1,只在let命令所在的代码块有效
//2,不存在变量提升
//3,暂时性死区 temporal dead zone TDZ
//4,不允许重复声明
console.log(foo);
var foo = 2;

console.log(foo);
let foo = 2;

function bar(x = y,y = 2){
    return [x,y];
}
bar();//TDZ

let x = x;
function func(arg){
    {
        let arg;
    }
}
//考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
{
    let a = 'serect';
    let f = function(){
        return a;
    }
}

const foo = Object.freeze({});

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i) => {
       if (typeof obj[key] === 'object') {
           constantize(obj [key]);
       } 
    }
    )
}
//在所有情况下都取到顶层对象
(typoof window !== 'underfined'
? window
:(typeof process === 'object' &&
  typeof require === 'function'&&
  typeof global === 'object')
  ? global
  :this
);