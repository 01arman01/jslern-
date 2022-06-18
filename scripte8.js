let unique = (arr)=>{
    return Array.from(new Set(arr))
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"]
// console.log(unique(values))
let aclen = (arr)=>{
    let map = new Map()

    for (let item of arr){
        let sortItem = item.toLocaleLowerCase().split('').sort().join('')
        map.set(sortItem,item)
    }
    return Array.from(map.keys())
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclen(arr))

