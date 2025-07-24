const client = require('./client')

async function init() {
    //await client.lpush('family', 'daksh')
    //await client.rpush('family', 'shubu')
    await client.blpop('family', 5)
}

init()