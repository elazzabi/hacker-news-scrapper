const page = require('./index').page
const test = require('ava')

test("Expect page to have 30 elements", t => {
    let callback = (data) => {
        t.is(data.length, 30)
    }
    
    return page.then(callback)
})