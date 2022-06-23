let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};
let sumSalaries = (departament)=>{
    if(Array.isArray(departament)){
        return departament.reduce((prev,values)=> prev+ values.salary,0)
    }else{
        let sum = 0;
        for(let subdep of Object.values(departament)){
            sum += sumSalaries(subdep)
        }
        return sum
    }
}
console.log(sumSalaries(company))
