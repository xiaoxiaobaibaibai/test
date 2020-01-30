// // {
// // let a = 111;
// // var b = 222;
// // }

// // console.log("b");
// //let 命令的性质 
// //1,只在let命令所在的代码块有效
// //2,不存在变量提升
// //3,暂时性死区 temporal dead zone TDZ
// //4,不允许重复声明
// console.log(foo);
// var foo = 2;

// console.log(foo);
// let foo = 2;

// function bar(x = y,y = 2){
//     return [x,y];
// }
// bar();//TDZ

// let x = x;
// function func(arg){
//     {
//         let arg;
//     }
// }
// //考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// {
//     let a = 'serect';
//     let f = function(){
//         return a;
//     }
// }

// const foo = Object.freeze({});

// var constantize = (obj) => {
//     Object.freeze(obj);
//     Object.keys(obj).forEach((key,i) => {
//        if (typeof obj[key] === 'object') {
//            constantize(obj [key]);
//        } 
//     }
//     )
// }
// //在所有情况下都取到顶层对象
// (typeof window !== 'undefined'
// ? window
// :(typeof process === 'object' &&
//   typeof require === 'function'&&
//   typeof global === 'object')
//   ? global
//   :this
// );
// //Destructuring
// let [a,b,c] = [1,2,3];
// let [x,y, ...z] = ['a'];
// x//"a"
// y//undefined
// z//[]
// let Iterator //接口
// let [foo = true] = []  // foo true

// const person = 'Jelly';
// const age = 5;
// const sentence = `${person} is ${age} years old`;
// console.log(sentence);

// const fan = 'I love es6';
// fan.startsWith('I');
// fan.endsWith('I');
// fan.includes('in');
// 'seke'.repeat(10);

// const num = ['one','two','there'];
// const[a,b ...others] = num;

const fruits = ['Apple','Banana','Mango'];

//for
 for (let i = 0; i < fruits.length; i++){
     console.log(fruits[i]);
 }
 fruits.forEach(fruits =>{
     console.log(fruits);
 })

 for (let index in fruits) {
     console.log(fruits[index]);
 }

 for (let fruit of fruits){
     if(fruit === 'Banana')
     console.log(fruit);
 } 

 const inventory = [
    {name:'apples',quantity: 2},
    {name:'banana',quantity: 0},
    {name:'cherries',quantity:5}

 ];

 const bananas = inventory.find(fruit => fruit.name === 'banana');
 console.log(bananas)
 const isEnough = inventory.some(fruit => fruit.quantity > 0);

 function sum(...numbers) {
     console.log(numbers)
     return numbers.reduce((prev,curr) =>prev + curr,0)
     
 }

 console.log(sum(1,2,3,4))

 let tebb = ['Allice','Bob','Carry','Bruce','Bob'];

 let tebbNum = tebb.reduce((pre,cur) => {
     if (cur in pre){
         pre[cur]++
     }else{
         pre[cur] = 1
     }
     return pre
 },{})

 let newtebb = tebb.reduce((pre,cur) => {
     if(!pre.includes(cur)){
         return pre.concat(cur)
     }else{
         
             return pre
         
     }
 })

 let arr = [[0,1],[2,3],[4,5,[6,6,6]]]
 const newarr =function (arr) {
     return arr.reduce((pre,cur) =>pre.concat(Array.isArray(cur)?newarr(arr):cur),[])
     
 }

 let result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

let sum2 = result.reduce(function (prev,cur) {
    return cur.score + prev;
    
},0)


const yongers = ['a','b','v']

const members = [...yongers]

const todos = [...document.querySelectorAll('li')];
const shoppinglist = ['milk','sheet'];

const todos = [
    {id:1,name:'Go to Store',completed:false},
    {id:2,name:'Learn ES6',completed:false},
    {id:3,name:'Go to shopping',completed:true},
]
 const id = 2;
 const todoIndex todos.findIndex(todo => todo.id === id);
const newTodos = [...todos.slice(0,todoIndex),...todos.slice(todoIndex + 1)]

const p = new Promise((resolve,reject) =>{

    setTimeout(() => {
        reject(Error('hahaha'));
    },2000);
});

p.then(data =>{ console.log(data)})
 .catch(err => { console.error(err)});

const peter = Symbol('peter');
const Lina = Symbol('Lina');

const classroom = {
    [Symbol('Lily')]:{ grade:60, gender:'female'},
    [Symbol('Lily')]:{ grade:60, gender:'female'}
}

const syms = Object.getOwnPropertySymbols(classroom).map(sym => classroom[sym])