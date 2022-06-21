// console.log(new Date().getDate())
// console.log(new Date().getUTCHours())
// console.log(new Date().getHours())
// console.log(new Date().getTimezoneOffset())
// let date = new  Date()
// // date.setHours(0,0,0)
// console.log(date)
// date.setDate(date.getDate()-2)
// console.log(date)

let start = new Date()

for(let i =0;i<1000000;i++){
    let dusometing = i*i*i*i
}

let end = new Date()

// console.log(end - start)
console.log(Date.now())
