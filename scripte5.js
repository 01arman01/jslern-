function unique(arr) {
    let newArr =[]
    arr.forEach(item=>{
        if(newArr.filter(newitem=>newitem==item).length<1){
            newArr.push(item)
        }
    })
    return newArr
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O