const {log, exchange} = require('../utils')

const selection = (A) => {
    // 遍历数组
    for(let i = 0; i < A.length; i++){
        // j: 已排序元素中的最大值
        // k 最小值的 index
        let k = i;
        // 从当前元素往后遍历
        // 如果比较元素小于当前元素，则记录
        for(let j = i + 1; j < A.length; j++) {
            if (A[j] < A[k]) {
                k = j;
            }
        }

        const min = A[k]
        A[k] = A[i]
        A[i] = min
        log('sorted A', A.slice(0, i + 1))
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    selection(list)
    log(list)
}

module.exports = selection