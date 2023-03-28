function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sortAndFilter(arr) {
    const filteredArr = arr.filter(num => isPrime(num));
    filteredArr.sort((a, b) => a - b);
    return filteredArr;
}
console.log(sortAndFilter([5, 7, 2, 8, 3, 11, 6, 10]));