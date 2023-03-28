function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let fib1 = 0;
    let fib2 = 1;
    let fibN = 0;
    for (let i = 2; i <= n; i++) {
        fibN = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibN;
    }
    return fibN;
}

console.log(fibonacci(2))
