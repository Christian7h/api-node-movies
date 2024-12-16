//controllers/movie.controller.js
const Movie=require('../models/movie.model');   // Importamos el modelo Movie
const movieCtrl={}; // Creamos un objeto vacio

// Fucion que devolvera todas las peliculas
movieCtrl.getMovies=async(req,res)=>{
    const movies=await Movie.find() // Buscamos todas las peliculas
    .then((data)=>res.status(200).json(data))
    .catch((err)=>console.error(err)); // Devolvemos todas las peliculas
};

// Funcion que devolvera una pelicula por su id
movieCtrl.getMovie=async(req,res)=>{
    const movie=await Movie.findById(req.params.id) // Buscamos una pelicula por su id
    .then((data)=>{
        if(data!=null)res.status(200).json(data)
            else res.status(404).json({status:'Movie not found'}); // Devolvemos la pelicula
    })
    .catch((err)=>console.error(err));
}

//Añadir una nueva pelicula a nuestra base de datos
movieCtrl.addMovie=async(req,res)=>{
    const movie=new Movie(req.body); // Creamos un objeto de tipo Movie
    await movie.save() // Guardamos la pelicula
    .then(()=>{
        res.status(201).json({status:'Movie successfully inserted!'})
})
    .catch(err=>{
        res.send(err.message);
        console.log(err);
    }) // Devolvemos la pelicula guardada
}

// Funcion para actualizar una pelicula dada un id y los nuevos datos de la pelicula
movieCtrl.updateMovie=async(req,res)=>{
       const movie=req.body; // Obtenemos los nuevos datos de la pelicula
        await Movie.findByIdAndUpdate(req.params.id,
            {$set:movie},{new:true}) // Actualizamos la pelicula
            .then((data)=>{
                if (data!=null) res.status(200).json({status:'Movie successfully updated!',data})
                    else res.status(404).json({status:'Movie not found'}); // Devolvemos la pelicula actualizada
            })
            .catch((err)=>res.status(400).send(err.message));
    }

// Funcion para eliminar una pelicula dada un id
movieCtrl.deleteMovie=async(req,res)=>{
    await Movie.findByIdAndDelete(req.params.id) // Eliminamos la pelicula
    .then((data)=>{
        if(data!=null)res.status(200).json({status:'Movie successfully deleted!'})
            else res.status(404).json({status:'Movie not found'}); // Devolvemos la pelicula eliminada
    })
    .catch(err=>res.status(400).send(err.message));
}

//funcion para obtener diferentes generos de peliculas
movieCtrl.getGenres=async(req,res)=>{
    await Movie.find().distinct('genres') // Obtenemos los generos
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(404).send(err.message)) // Devolvemos los generos
}

module.exports=movieCtrl; // Exportamos el objeto movieCtr