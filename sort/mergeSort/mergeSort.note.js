
const {log, exchange} = require('../utils')

const slice = (A, start, end) => {
    return A.slice(start, end + 1)
}


// A, B 是两个排序的数组, 将 A B合并为一个排序数组C
const merge = (A, B) => {
    let i = 0
    let j = 0
    let k = 0
    const C = [];
    while(i < A.length || j < B.length) {
        if (A[i]&& B[j]) {
            if(A[i] <= B[j] ) {
                C[k] = A[i]
                i += 1
            } else {
                C[k] = B[j]
                j += 1
            }
        } else {
            if (A[i]) {
                C[k] = A[i]
                i += 1
            }
            if (B[j]) {
                C[k] = B[j]
                j += 1
            }
        }
        k += 1
    }
    return C;
}

const mergeSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        const C = merge(A.slice(p, q + 1), A.slice(q + 1, r + 1));
        A.splice(p, C.length, ...C)
    }
}

if(require.main === module) {
    // const A = [ 1, 3, 5, 7, 9, 11, 15]
    // const B = [ 2, 4, 6, 8, 10, 12, 33, 44]
    const A = [2, 5]
    const B = [4 , 7]
    const r1 = merge(A, B);
    log('r1', r1);
    
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    // const list = [5, 2, 4 , 7]
    // const list = [38, 545, 6]
    mergeSort(list)
    log('result', list)


}