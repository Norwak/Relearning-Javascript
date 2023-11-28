const { URL } = require('url');
const url = require('url');
const querystring = require('querystring');

// url.parse()
const myUrl = new URL('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// url.format()
const myUrl2 = url.format({
  protocol: 'https:',
  hostname: 'www.example.com',
  pathname: '/listing',
  search: '?id=1000&premium=true',
});

console.log(myUrl2);

// querystring.parse()
const myQs = 'year=2023&month=january&day=20';
const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

// querystring.stringify()
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20,
});
console.log(myQs2);