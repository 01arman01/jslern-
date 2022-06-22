function  factorial (x, n){
    if ( n == 1){
        return x
    }else{
        return x * factorial(x,n-1)
    }

}

console.log(factorial(5,2))