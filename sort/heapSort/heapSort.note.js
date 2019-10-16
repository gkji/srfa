const MaxHeap = require('../../data-structure/MaxHeap')
const {log, exchange} = require('../utils')


if(require.main === module) {
    const maxHeap = new MaxHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])
    log('max heap', maxHeap.list)
    // [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

    maxHeap.heapSort()
    log('heap sort', maxHeap.list)
x}