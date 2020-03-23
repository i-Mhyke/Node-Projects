const http = require('http');
const fs = require('fs');

http.createServer( (req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(`<h3>Please Enter a message below:</h3>
            <form method="POST" action="/message">
            <input type="text" name="message"></br></br>
            <input type="submit" value="submit">
            </form>`);

            req.on('data', data => {
                let userInput = decodeURIComponent(data).replace(/\+/g, ' ').replace('message=', '').split('');
                let message = userInput.join('');
                
                fs.writeFile('./message.txt', message, 'utf8', (err)=>{
                if(err) console.log (err);
                })
            })

    res.end();
}).listen(8080);
