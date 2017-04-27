# hacker-news-scrapper
A Promise based, Hacker News scrapper

## Install

```
$ yarn add hacker-news-scrapper
```

Or using npm:

```
$ npm install --save hacker-news-scrapper
```

## Usage

```js
import { page } from 'hacker-news-scrapper'

// Give the number of the page you want to scrap (default = 1)
page(2).then(data => {
    //data is an array of elements. Every element has:
    //{
    //    "title": "Linux Programming: Signals the easy way",
    //    "website": "stev.org",
    //    "link": "https://www.stev.org/post/linuxprogrammingsignalstheeasyway",
    //    "rank": "60",
    //    "score": "175 points",
    //    "user": "dkarapetyan",
    //    "age": "19 hours ago",
    //    "comments": "41 comments"
    //}
}).catch(err => {
    // Something bad happened
})
```

## Contributing

Feel free to open an issue or make a pull request

## Testing

```
$ npm test
```
Ava is used for test running

## License

MIT © [EL AZZABI Ahmed](http://elazzabi.com)