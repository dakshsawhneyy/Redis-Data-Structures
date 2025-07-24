import client from "./client.js"

const fieldAdded = await client.hset('bike:1', {
    model: 'Kratos',
    brand: 'God of War',
    price: "infinity"
})

console.log(fieldAdded)

const model = await client.hget('bike:1', 'model')
console.log(model)