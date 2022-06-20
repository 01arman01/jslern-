let arr =  ["Julius", "Caesar", "Consul", "of the Roman Republic"];
let [elem1,elem2,...rest]=arr

// console.log(rest)

//---------- FOR OBJECT ----------
let user = {
    name: "John", age: 30, birthYear:1995,
};
for (let [key,value]of Object.entries(user)){
    console.log(`${key} : ${value}`)
}
//-----------FOR MAP---------------------
console.log('----------------------------------------------------------')
let map = new Map()
map.set('name','Arman')
map.set('age','27')
for(let [key1,value1] of map){

    console.log(`${key1} : ${value1}`)
}
//---------------   bard destructration --------------------
console.log('-----------------------------------------------')



let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let {size:{
    width,height
},
items:[item1,item2],
    title="Menu"
} = options

console.table([title, width,height, item1 ,item2])
//-------------------------function-----destructorisation-----

let options1= {
    title: "My menu",
    items: ["Item1", "Item2"],
    count:10,
    width:10,
    height:100,
};
let funcObj = (
    {
        // title='default  title',
        items:[item1,item2],
        count = 123,
        width:w,
        height:h,
    }
)=>{
    console.table([
        {'title':title},
        {item1:item1},
        {item2},
        {w},
        {h},
        {count},])

}
funcObj(options1)