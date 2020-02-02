
const express = require("express")

const app = express()
app.get("/",(req,res)=>{
    res.send("Home ")
})

app.get("/profile",(req,res)=>{
    res.send("Profile page")
}
)
const server = app.listen("8080", ()=>{
    console.log(`Server runninng on port: ${server.address().port}`)
})




// const http =require("http")
// const getquery = require("./getquerystring")
// //callback functions are invoked when request is made to the server

// http.createServer((req,res)=>{
//     const queryobject = getquery(req.url).query
//     console.log(queryobject)
//     res.writeHead(200,{"content-type" : "application/json"}) // mime type(
//     res.write(JSON.stringify(queryobject))
//     res.end();
// }

// ).listen(8080);

