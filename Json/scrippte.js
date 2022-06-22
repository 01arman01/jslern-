let student ={
    name:"Arman",
    age:"27",
    isAdmin:true,
    courses:['html','css','js'],
    wife:null
}
let json = JSON.stringify(student)
// console.log(json)
// console.log(JSON.parse(json))

//------------------------Json Ciklichnoe Obekti-------

let room = {
    number:23
}

let meetup = {
    title:"conference",
    participants:[{name:"Arman"},{name:"Alice"}],
    place:room
}
room.duublelink = meetup

// let testJson1 = JSON.stringify(meetup,['title', 'participants', 'place','name','number'])
let testJson1 = JSON.stringify(meetup,function replacer(key,value){
    // console.log(`${key}:${value}`)
    return(key = 'duublelink'? undefined:value)
})
// console.log(testJson1)
// console.log(JSON.parse(testJson1))
console.log('----------------------------------Json---------------------')

let user = {
    name: "Василий Иванович",
    age: 35
};
let userJson = JSON.stringify(user)
console.log(userJson)
user1 = JSON.parse(userJson)
console.log(user1)