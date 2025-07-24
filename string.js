const client = require('./client')

async function init() {
    await client.set("laptop:nitish", "acer")       // set value for a key
    // await client.expire("laptop:nitish", 10)    // expire this key after 10 seconds
    const result = await client.get('laptop:nitish')     // fetch all items 
    console.log(result)
}

init()