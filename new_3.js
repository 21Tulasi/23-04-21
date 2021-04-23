var http=require("http")
var fs=require("fs")
var url=require("url")
var server=http.createServer(function(req,res){
            path=url.parse(req.url,true)
            pa=path.pathname
            console.log(pa)
    if(req.url=="/")
    {
            
            fs.readFile("new.html",function(err,data){
                if(err)
                    throw err;
                else
                {
                    res.write(data);
                    res.end();
                }
            })
    }
    if(pa=='/student')
    {
        fs.readFile("greetings.txt",function(err,data){
            if(err)
                throw err;
            else
            {
                res.write(data+" "+path.query.uname);
                res.end();
            }
        })
    }
    
})
server.listen(8000);
console.log("connected");
