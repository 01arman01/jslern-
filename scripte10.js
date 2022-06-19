let readMessages = new WeakSet()

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

readMessages.add(messages[0])
readMessages.add(messages[1])
// console.log(readMessages.has(messages[1]))
let readTime = new WeakMap()
const addTimeRead = (message)=>{
    let dataa = new Date()
    let year= dataa.getFullYear()
    let month = dataa.getMonth()
    let day = dataa.getDay()
    let hour =   (dataa.getTime()).toString().slice(0,2)
    let minute = new Date().getMinutes()
    let dataTime = `${day}.${month}.${year}  ${hour}:${minute}`
    return readTime.set(message,dataTime)
}

addTimeRead(messages[0])

console.log(readTime.get(messages[0]))

