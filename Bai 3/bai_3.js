function findPairs(arr, n) {
    let pairs = [];
    let count = 0;
    let arrNew = [];

    arr.forEach((item) => {
        if (arrNew.includes(item) === false) {
            arrNew.push(item)
        }
    })


    function generatePairs(index, current) {
        if (current.length === n) {
            pairs.push(current.slice());
            count++;
            return;
        }

        for (let i = index; i < arrNew.length; i++) {

            if (current.includes(arrNew[i]) === false) {
                current.push(arrNew[i]);
            }


            generatePairs(i + 1, current);
            current.pop();
        }
    }


    generatePairs(0, []);
    return {pairs, count};
}


let A = [1, 2, 3, 2, 4, 5,5];
let n = 3;
let result = findPairs(A, n);

console.log(`Number of pairs: ${result.count}`);
console.log(`Pairs: ${JSON.stringify(result.pairs)}`);
