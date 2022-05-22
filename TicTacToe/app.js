// Módulo HTTP
var http = require('http');

// Módulo File System
var fs = require('fs');

// Cria o objeto server
var app = http.createServer(callback);

// Especifica a porta que vai escutar as requisições
app.listen(3000);

let ipConnect = "http://localhost:3000/";

console.log("Program Started");
console.log(`Connect from: ${ipConnect}`);

function callback(req, res) {

    // Nome do arquivo
    var filename = req.url == "/" ? 'index.html' : __dirname + req.url;

    fs.readFile(filename,
        function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end('Arquivo não encontrado!');
            }

            if (req.url.indexOf(".css") != -1)
                res.setHeader('content-type', 'text/css');
            else if (req.url.indexOf(".js") != -1)
                res.setHeader('content-type', 'text/javascript');
            else
                res.setHeader('content-type', 'text/html');

            res.writeHead(200);
            res.end(data);
        }
    );
}