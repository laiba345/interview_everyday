async function fn() {
    return 100
}

(async function() {
    const a = fn()
    console.log(a) // Promise { 100 }
    const b = await fn()
    console.log(b) // 100
})()