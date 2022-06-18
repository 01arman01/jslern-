let vasya = { name: "Вася", surname: "Пупкин", id: 1  ,age:20};
let petya = { name: "Петя", surname: "Иванов", id: 2 ,age:30};
let masha = { name: "Маша", surname: "Петрова", id: 3, age:21 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((obj)=>{
    return {fullName:`${obj.name} ${obj.surname}`, id:obj.id}
})
const ArrSortAge =(arr)=>{
    arr.sort((a,b)=>a.age>b.age?1:-1)
}

ArrSortAge(users)
console.log(users)
console.log(usersMapped)