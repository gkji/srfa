const {log, exchange} = require('../utils')

// A 是未排序的数组, bubble 的目的是将找到最后一个元素在数组的正确位置, A 完成后数组仍然是未排序的
const bubble = (A) => {
    for(let j = A.length - 1; j > 0; j --) {
        if(A[j] < A[j - 1]) {
            const tmp = A[j]
            A[j] = A[j - 1]
            A[j - 1] = tmp
        }
    } 
    log('bubble', A)
    return A
}

const bubbleSort = (A) => {
    const num = A.length - 1
    // i 表示需要排序的元素的个数, 第一个元素不需要排序
    // i 循环执行一次就对当前数组的最后一个元素进行一遍冒泡, 也就排好了一个元素
    // i 及 i 之前是排序好的元素
    for(let i = 0; i < num - 1; i++) {
        // 对最后一个元素进行冒泡
        // A[j] 是当前要冒泡的元素
        // A[j] 最高冒泡到 i + 1 的位置
        const B = bubble(A.slice(i))
        A.splice(i, B.length, ...B);
    }
    log(A)
}


if(require.main === module) {
    const list1 = [3, 2, 4, 1]
    bubble(list1);

    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    bubbleSort(list)
    log(list)

    
}
module.exports = bubbleSort