const page = require('./index').page
const test = require('ava')

let callback = (t, data) => {
    t.is(data.length, 30)
}

test("Expect 'page' to work without arguments", t => {    
    return page().then(callback.bind(null, t))
})

test("Expect 'page' to work with arguments", t => {
    return page(2).then(callback.bind(null, t))
})