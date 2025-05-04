const http = require('http');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT;

// console.log('PORT:', port);

const server = http.createServer(app);
server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});


module.exports = server