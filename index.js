const http =require("http")
const url = require("url")
//callback functions are invoked when request is made to the server
function getquery(urlstring){
    try {
        return url.parse(urlstring, true)
    }
    catch(e){
        console.log(e)
    }
    
}
http.createServer((req,res)=>{
    const queryobject = getquery(req.url).query
    console.log(queryobject)
    res.writeHead(200,{"content-type" : "application/json"}) // mime type(
    res.write(JSON.stringify(queryobject))
    res.end();
}

).listen(8000);

