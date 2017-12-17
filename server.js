const env = require('dotenv').config({ path : '.env'});
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


server.listen(process.env.PORT, function(){
    console.log(`Server running on PORT ${process.env.PORT}👍`);
});