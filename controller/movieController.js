const {getMovies,getMovieid}=require("../model/apiModel")

const MovieDetails=async(req,res)=>{
    try {
        const details=await getMovies()
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(details))
    } catch (error) {
        console.log(error)
        
    }


}

const getMoviebyId=async(req,res,id)=>{
 try {
     const movieId=await getMovieid(id)
    if(!movieId){
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({messsage:"wrong Id"}))
    }
    else
    {
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(movieId))

    }
  

 } catch (error) {
    console.log(error)
    
 }

}


module.exports={
    MovieDetails,
    getMoviebyId
}