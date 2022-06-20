let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrice = Object.fromEntries(
    Object.entries(prices).map(([key,value])=>[key,value*2])
)
// console.log(doublePrice)

///////////////////////////////////////////////////

let salaries = {
    "John": 100,
    "Pete": 300,
    "Petae": 'aaaa',
    "Mary": 250
};


const sumValuesObj = (obj)=>{
    let sum = 0
    Object.values(obj).map((value)=>{
        if (typeof value == "number" && value >= 0){
            sum+=value
        }
    })
    return sum
}
let summ = sumValuesObj(salaries)
// console.log(summ)
/////////////////////////////////////////////
let user = {
    name: 'John',
    age: 30
};
let countMethods = obj=> Object.keys(obj).length
console.log(countMethods(user))