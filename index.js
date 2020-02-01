const http =require("http")
const getquery = require("./getquerystring")
//callback functions are invoked when request is made to the server

http.createServer((req,res)=>{
    const queryobject = getquery(req.url).query
    console.log(queryobject)
    res.writeHead(200,{"content-type" : "application/json"}) // mime type(
    res.write(JSON.stringify(queryobject))
    res.end();
}

).listen(8080);

