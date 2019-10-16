// insert sort 的完整写法
const {log, exchange} = require('../utils')

const insertSort = (A) => {
    // 从第二个元素开始遍历数组
    for(let i = 1; i < A.length; i++){
        const key = A[i]
        // 从当前元素往前遍历
        // 如果比较元素大于当前元素，则将比较元素后移
        let j;
        for(j = i - 1; j > -1; j--) {
            if (A[j] > key) {
                A[j + 1] = A[j]
            } else {
                break;
            }
        }
        A[j + 1] = key;
        // 如果比较元素小于当前元素, 则插入当前元素
        log('sorted A', A.slice(0, i + 1))
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertSort(list)
    log(list)
}

module.exports = insertSort