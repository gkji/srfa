// insert-sort 的分解写法
const {log, exchange} = require('../utils')

// B 是一个除了字后一个元素已排序的数组, 将其排序
const insert = (B) => {
    const len = B.length;
    const key = B[len - 1]
    for(i = len - 2; i > -1; i--) {
        if (B[i] > key) {
            B[i + 1] = B[i]
        } else {
            break
        }
    }
    B[i + 1] = key
    return B;
}

const insertSort = (A) => {
    for(let j = 1; j < A.length; j++){
        // 增量, 每次只排一个
        const sorted = A.slice(0, j);
        // 增量排序
        const B = insert(sorted);
        
        A.splice(0, B.length, ...B)
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertSort(list)
    log(list)
}

module.exports = insertSort