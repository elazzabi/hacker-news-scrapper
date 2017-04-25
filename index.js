const xray = require('x-ray')
const Promise = require('bluebird')

const url = "https://news.ycombinator.com/"

const x = xray({
    filters: {
        removeDot: function (value) {
            return value.slice(0, value.length - 1)
        }
    }
});

const getBasicInfo = Promise.promisify(x(url, '.athing', [{
    title: '.storylink',
    website: '.sitestr',
    link: '.storylink@href',
    rank: '.rank | removeDot'
}]))

const getOtherInfo = Promise.promisify(x(url, '.subtext', [{
    score: '.score',
    user: '.hnuser',
    age: '.age'
}]))

const page = Promise.all([getBasicInfo(), getOtherInfo()]).then((scrapedData) => {
    let [basic, other] = scrapedData
    let data = basic.reduce((all, curr, index) => {
        let o = Object.assign({}, curr, other[index])
        all.push(o)
        return all
    }, [])
    return data
})

module.exports = { page }