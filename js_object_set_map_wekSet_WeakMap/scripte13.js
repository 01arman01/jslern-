let user = {
    name: "John",
    years: 30,
    // isAdmin:true

};
let {name,years:age,isAdmin=false}=user
// console.table({
//     name,age,isAdmin
// })


//-----------------------------------------------------------

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 2750
};

let maxSalaries = (obj)=>{
        let result =[0,0];
        Object.entries(obj).map(([key,value]=null)=>{
            if(value>result[1]){
                result=[key,value]
            }
        })
    return result
}
console.table(maxSalaries(salaries))
