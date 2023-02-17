const express = require('express');
const fs = require('fs');
const http = require("http");
const app = express();
app.use(express.json());


//accept post data
app.post('*', (req, res) => {
    req.body; // JavaScript object containing the parse JSON
    const data = JSON.stringify(req.body)
    write(data);
  });


//frontend web server
let handleRequest = (request, response) => {
    let requestURL = request.url
    if (requestURL == "/") {
        requestURL = "index.html"
    }
    console.log(requestURL)
    displayPage(response, requestURL)
};

//frontend web server to accept get requests
http.createServer(handleRequest).listen(5500);
//backend web server to accept post requests
const server = app.listen(3000);

//write post data to json
function write(data) {
    fs.writeFile('user.json', data, err => {
        if (err) {
          throw err
        }
        console.log('JSON data is saved.')
      })
    
}
function displayPage(response, requestURL) {
    let accept = false
    if (requestURL.search("html") != -1) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        accept = true
    }
    else if (requestURL.search("json") != -1) {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        });
        accept = true
        
    }
    if (accept == true) {
        fs.readFile(`./${requestURL}`, null, function (error, data) {
            console.log(error)
            response.write(data);
            response.end();
        })
    }
    
}