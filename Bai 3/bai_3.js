function countPairs(A, n) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if ((A[i] === n && A[j] !== n) || (A[i] !== n && A[j] === n)) {
                count++;
                console.log(`${A[i]}&${A[j]}`);
            }
        }
    }
    return count;
}

const A = [1, 2, 3];
console.log(countPairs(A, 2));
console.log(countPairs(A, 3));
