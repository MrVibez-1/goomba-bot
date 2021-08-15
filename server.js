const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Launching!')
})

function keepAlive(){
    server.listen(8080, ()=>{console.log("Goomba-Bot is Ready!")});
}
module.exports = keepAlive;