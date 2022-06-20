let Jhon = {
    name:'Arman',
    age:27
}
let weakMap = new WeakMap()
weakMap.set(Jhon,'info')
// Jhon = null
// console.log(weakMap.has(Jhon))


//counter visit user
let visitCount = new  WeakMap()
let countUser = (user)=>{
    let count = visitCount.get(user) || 0
    visitCount.set(user,count+1)
}

let cache = new WeakMap()

const casheFunc = (obj)=>{
    if(!cache.get(obj)){
        let result = `${obj.name} ${obj.surname}`
        cache.set(obj,result)
    }

    return cache.get(obj)
}
obj1 = {name:'Arman', surname:'Papyan'}
obj2 = {name:'Artur', surname:'Papyan'}

let fullname1 = casheFunc(obj1)
let fullname2 = casheFunc(obj2)

console.log(fullname1)
console.log(fullname2)
console.log('--------------------')
obj1 = null
console.log(cache.get(obj1))

