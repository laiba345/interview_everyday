const obj = {
    name:'Alice', 
    greet: function() {
        console.log(`Hello, ${ this.name }`)
    }
}

const boundGreet = obj.greet.bind(obj)
boundGreet()