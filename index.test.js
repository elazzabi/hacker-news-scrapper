const page = require('./index').page
const test = require('ava')

test("Expect 'page' to work without arguments", t => {
    let callback = (data) => {
        t.is(data.length, 30)
    }
    
    return page().then(callback)
})

test("Expect 'page' to work with argument", t => {
    let callback = (data) => {
        t.is(data.length, 30)
    }
    
    return page(2).then(callback)
})