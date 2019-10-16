const {log, exchange} = require('../utils')

const indexOfMin = (B) => {
    let k = 0;
    for(let i = 1; i < B.length; i++) {
        if (B[i] < B[k]) {
            k = i;
        }
    }
    return k;
}

// 从未排序的元素中选择最小的, 与已排序元素中的最大值交互
const selectSort = (A) => {
    // 遍历数组
    for(let j = 0; j < A.length; j++){
        let k = j;
        // 未排序
        const unsorted = A.slice(j);
        // 选择最小值
        k = indexOfMin(unsorted) + j;
        
        // 交换
        const min = A[k]
        A[k] = A[j]
        A[j] = min
        log('sorted A', A.slice(0, j + 1))
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    selectSort(list)
    log(list)
}

module.exports = selectSort

