const urls = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7']

// const chunks = urls.reduce((resultArray, item, index) => {
//     console.log(resultArray) //[] 后面都是undefined
//     console.log(item) // url1 - url7 里面的每一项
//     console.log(index) // 从 0 - 6
// }, [])
const maxConcurrency = 2

const chunks = urls.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/maxConcurrency)
    if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item) // 最后得到的结果就是一个二维数组
    return resultArray // 最开始的结果是[]
}, [])

console.log(chunks)