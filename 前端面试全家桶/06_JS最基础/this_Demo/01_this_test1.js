function fn1() {
    console.log(this)
}

fn1() // window / global 

fn1.call({x : 100}) // { x: 100 }

const fn2 = fn1.bind({x: 200}) 

fn2() // { x: 200 }