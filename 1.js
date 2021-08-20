const {pathToRegexp} = require('path-to-regexp')

let keys = []
const reg = pathToRegexp('/user', keys, { sensitive: true, end: true, strict: true})

console.log(reg.match('/user'))
