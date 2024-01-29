const os = require('os')

const user = os.userInfo()
console.log(user)

const system = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    free : os.freemem(),
}

console.log(system);