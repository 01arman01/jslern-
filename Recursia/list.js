let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
let funcListValue  = (list)=>{
    while (list){
        console.log(list.value)
        list = list.next
    }
}
funcListValue(list)
funcListValueRecursia = (list)=>{
    console.log(list.value)
    if (list.next){
        funcListValue(list.next)
    }
}
console.log(funcListValueRecursia(list))

//------------------------------------------------
console.log('-----------------------------------------------')
let funcreverse = (list)=>{
    let newlist = list
    let arr = []
    while (newlist) {
        arr.push(newlist.value)
        newlist = newlist.next
    }

    for (let i= arr.length -1; i>=0;i--){
        console.log(arr[i])
    }

}
funcreverse(list)