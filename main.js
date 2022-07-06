var express = require('express');
var httpProxy = require('http-proxy');
 



var app = express();
var port = 3032;

app.use(express.static(__dirname + '/public'));
httpProxy.createProxyServer({target:'http://localhost:8081'}).listen(port); // See (†)
 
//create proxy to localhost:8080
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/web/public/dist/index.html');
// })

//app.listen(port, () => { console.log(`catch it on port: ${port}!`); })