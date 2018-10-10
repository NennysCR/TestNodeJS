var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var port = 8090;
var host = "localhost";

http.createServer(function (req, res) {
    var path = url.parse(req.url, true);
    if(path.pathname.endsWith("html")){
        fs.readFile("." + path.pathname, function(err, data){
            res.writeHead(200, "ok", { "Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else if(path.pathname.endsWith("js")){
        fs.readFile("." + path.pathname, function(err, data){
            res.writeHead(200, "ok", { "Content-Type": "text/javascript"});
            res.write(data);
            res.end();
        });
    } else if(path.pathname.endsWith("css")){
        fs.readFile("." + path.pathname, function(err, data){
            res.writeHead(200, "ok", {"Content-Type": "text/css"});
            res.write(data);
            res.end();
        });
    } else if(path.pathname.endsWith("uploadFile")){
        var form = new formidable.IncomingForm();
        
        form.parse(req, function(err, fields, files){
            
            for(var file in files){
                if(!files.hasOwnProperty(file)) continue;
                var oldpath = files[file].path;
                var newpath = 'C:/Users/siddharth/' + files[file].name;
                fs.rename(oldpath, newpath, function (error) {
                    if (error) throw error;
                   
                });
                
            }
            res.write('File uploaded and moved!');
            res.end();
            
            
            
        });
       
    }

}).listen(port, host);

