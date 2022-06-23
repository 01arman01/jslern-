function  factorial (x, n){
    if ( n == 1){
        return x
    }else{
        return x * factorial(x,n-1)
    }
}
function  Factorial1 (a,x){
      return(x==1)?x:(a*Factorial1(x-1))
}

let funcFac = (x,n)=>{
    let result = 1
    for(let i = 0; i<n;i++){
        result *= x
    }
    return result
}
console.log(factorial(5,2))
console.log(factorial(5,2))
console.log(funcFac(10,2))