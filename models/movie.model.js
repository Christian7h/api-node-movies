//models/movie.model.js
const mongoose=require('mongoose');
const {Schema}=mongoose;

const MovieSchema=new Schema({
    title:{type:String,required:true},
    year:Number,
    director:{type:String,required:true},
    plot:{type:String,required:true},
    genres:[{type:String,required:true}],
    poster:{type:String,required:true},
    imbd:{
        rating:Number,
        votes:Number,
    }
});

module.exports=mongoose.model('Movie',MovieSchema,'movies2024'); // Exportamos el modelo Movie con el esquema MovieSchema
