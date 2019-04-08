const http = require("http");
const chalk = require('chalk');
const conf = require('./config/defaultConfig');

const sever = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Http1!');
});

sever.listen(conf.port, conf.hostname, ()=> {
    const addr = `http://${conf.hostname}:${conf.port}`;
      console.info(`Server started at ${chalk.green(addr)}`);
})
