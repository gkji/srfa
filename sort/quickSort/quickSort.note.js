const {log, exchange} = require('../utils')

const partition = (A, p, r) => {
    const x = A[r]
    let i = p - 1
    for(let j = p; j <= r - 1; j++) {
        if (A[j] <= x) {
            i = i + 1
            exchange(A, i, j)
        }
    }
    exchange(A, i + 1, r)
    return i + 1
}

const quickSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = partition(A, p, r)
        quickSort(A, p, q - 1)
        quickSort(A, q + 1, r)
    }
    
}


if(require.main === module) {
    // const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const list = [2, 8, 7, 1, 3, 5, 6, 4]
    quickSort(list)
    log(list)
}