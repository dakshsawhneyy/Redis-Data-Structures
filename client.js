// creating a client so that we can use items inside our redis cache
const { Redis } = require("ioredis")    // since we using JS so require

const client = new Redis() // it hits by-default on port 6179 hmare redis server ko

module.exports = client // we use this in nodejs [export default is used in react]