let fincArm = (n)=>{
    let result = 0
 for (let i =0; i<=n; i++){
     result +=i
 }
return result
}
console.log(fincArm(20))

let funcZven=(n = 0)=>{
    return  ((n+1) * n / 2 )
}
console.log(funcZven(20))

let funcrec = (n)=>{
    if(n===1){
        return 1
    }else{
        return n += funcrec(n-1)
    }
}
console.log(funcrec(20))