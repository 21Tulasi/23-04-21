const date = require("./date.js")
var http=require("http");
data="Todays date is:"+date().getDate()+"-"+date().getMonth()+"-"+date().getFullYear()+",Now time is:"+date().getHours()+":"+date().getMinutes();

var server=http.createServer(function(req,res){
   
    
    res.write(data);
    res.end();

   
})
server.listen(8000);
   

