const express = require('express')
const axios = require('axios')

// Adding Redis for low latency
const client = require('./client')

const app = express();

app.get('/', async(req,res) => {

    const cacheValue = await client.get('todos');

    if(cacheValue) return res.json(cacheValue)
    
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    // storing data in cache
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 60); // Set expiration time to 60 seconds

    return res.json(data)
})

app.listen(9000)