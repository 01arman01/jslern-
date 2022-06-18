let map = new Map()
let Jhon = {name:'Jhon'}
map.set('1','string 1')
map.set(1,'chislo 1')
map.set(true,'bulean')
map.set(Jhon,'object')
Jhon.age = 23
Jhon.age2 = 2453


// for (let items of map.keys()){
//     console.log( typeof items)
// }
// let arr = []
// for (let iteemValue of map.values()){
//     arr.push(iteemValue)
// }
// console.log(arr)
// map.forEach((key,value,maps)=>{
//     maps.set(key,1)
//     console.log(maps)
// })

console.log( Object.entries(Jhon))
console.log(Object.fromEntries(map))