# binded

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/binded.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> binded methods as pure functions

## Install

    npm install --save binded

## Usage

```js
import binded from 'binded';

const { log, warn } = binded(console);
const { resolve, reject, all } = binded(Promise);

resolve('unicorns').then(log) // unicorns

binded(console); /*
  { log: [Function: bound bound ],
    info: [Function: bound bound ],
    warn: [Function: bound bound ],
    error: [Function: bound bound ],
    dir: [Function: bound bound ],
    time: [Function: bound bound ],
    timeEnd: [Function: bound bound ],
    trace: [Function: bound bound trace],
    assert: [Function: bound bound ],
    Console: [Function: bound Console] } */

binded(Promise); /*
  { resolve: [Function: bound resolve],
    all: [Function: bound all],
    race: [Function: bound race],
    reject: [Function: bound reject] } */
```

## API

### binded(input)

Return an Object with functions of methods binded to input, so you can use `log`
from `console` without it throwing an `Error`.

#### input

*Required*  
Type: `Function` or `Object`

Function Constructor or an Object.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/binded
[npm-image]: https://img.shields.io/npm/v/binded.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/binded
[travis-image]: https://img.shields.io/travis/iamstarkov/binded.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/binded
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/binded.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/binded
[depstat-image]: https://david-dm.org/iamstarkov/binded.svg?style=flat-square
