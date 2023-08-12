const path = require("path")
const fs = require("fs")

function route(req,res){
    if(req.url==="/"){
        const homePage=fs.readFile(path.join(__dirname,"../views","index.html"),"utf-8",(err,content)=>{
        res.end(content)
    })

    }
}



module.exports={
    route
}