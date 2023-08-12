const http = require("http")
const path = require("path")
const fs = require("fs")
const PORT =process.env.PORT || 3000
const {route}=require("./router/route")

// create a http server

const app=http.createServer((req,res)=>{
    route(req,res)

// home page

})


   








// listen to the port

app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})