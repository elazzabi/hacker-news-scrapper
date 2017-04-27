import { page } from '../lib/index'
import test from 'ava'

let callback = (t, data) => {
    t.is(data.length, 30, 'Every page has 30 link')

    t.true(data.every((e => {
        let has = (prop) => e.hasOwnProperty(prop)
        
        return has('link') && has('title') && has('age')
    })), 'Every element has a title, link, website and age')
}

test("Expect 'page' to work without arguments", t => {    
    return page().then(callback.bind(null, t))
})

test("Expect 'page' to work with arguments", t => {
    return page(2).then(callback.bind(null, t))
})

// TODO: When item is added, add a test to check comments
