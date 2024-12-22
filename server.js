const http = require("http");
const fs = require("fs");
const port = 5000

const server = http.createServer(function(req,res){
        fs.readFile('index.html',function(error,data)
{
       
    if(error){
        res.writeHead(404);
        res.write("file not found");
    } else {url = req.url;
        if (url ==="/index.html"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        
        }else{
            res.writeHead(404);
            res.end("Page Not Found");
        }
       
    }   
    })
})


server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})