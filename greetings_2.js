var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    
        fs.readFile("greetings.txt",function(err,data)
        {
                if(err)
                    throw err;
                else
                {
                        res.write(data);
                        res.end();
                }
        })

    
})
server.listen(8000);
