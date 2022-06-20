let vasya = { name: "Вася", age: 35 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 38 };
let arr = [vasya,petya,masha]

const funcsumm = (arr)=> {
    let count = 0;
    arr.map(item => {
        count += item.age
    })
    return Math.ceil(count / arr.length)
}
console.log(funcsumm(arr))
