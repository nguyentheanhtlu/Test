function checkPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function sortA(A) {
    let len = A.length;
    for (let i = 1; i < len; i++) {
        let key = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
    A.forEach((item, index) => {
        if (checkPrime(item)) {
            A.splice(index, 1);
        }
    });

    return A
}

let A = [8,7,6,9,2,4,5,2];

console.log(sortA(A));