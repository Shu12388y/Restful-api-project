let movieData=require("../data/datas.json")

function getMovies(){
    return new Promise((resolve,reject)=>{
       resolve(movieData)

    })
}


function getMovieid(id){
  
 return new Promise((resolve,reject)=>{
    const indexMovie=  movieData.find((p)=>p.id===id)
    if(!indexMovie){
        reject(indexMovie)
    }
    else{
        resolve(indexMovie)
    }
 })


}



module.exports={
    getMovies,
    getMovieid
}