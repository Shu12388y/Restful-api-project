const path = require("path")
const fs = require("fs")
const { MovieDetails, getMoviebyId } = require("../controller/movieController")



function route(req,res){
    if(req.url==="/" && req.method==="GET"){
        const homePage=fs.readFile(path.join(__dirname,"../views","index.html"),"utf-8",(err,content)=>{
        res.end(content)
    })
}
else if (req.url==="/api/getmovies" && req.method==="GET"){
   MovieDetails(req,res)

}
else if (req.url.match(/\/movie\/([0-9]+)/) && req.method === "GET"){
    let id=req.url.match(/\/movie\/([0-9]+)/)[1];
    getMoviebyId(req,res,id)

}
}



module.exports={
    route
}