
const http = require('http')
const app = require('./app.js')

app.set(process.env.PORT || 3000);
const server = http.createServer(app);

console.log('server is running...');
server.listen(process.env.PORT || 3000);