import x from './scrapper'
import Promise from 'bluebird'

const url = (page) => `https://news.ycombinator.com/news?p=${page}`

const getBasicInfo = (page) => Promise.promisify(x(url(page), '.athing', [{
    title: '.storylink',
    website: '.sitestr',
    link: '.storylink@href',
    rank: '.rank | removeDot'
}]))

const getOtherInfo = (page) => Promise.promisify(x(url(page), '.subtext', [{
    score: '.score',
    user: '.hnuser',
    age: '.age',
    comments: 'td > a:last-of-type'
}]))

const page = (index = 1) => Promise.all([getBasicInfo(index)(), getOtherInfo(index)()]).then(scrapedData => {
    let [basic, other] = scrapedData

    let data = basic.map((curr, index) => {
        return Object.assign({}, curr, other[index])
    })

    return data
})

export { page }
