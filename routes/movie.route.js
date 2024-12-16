//routes/movie.route.js
const express=require('express');   // Importamos express   
const router=express.Router();      // Creamos un objeto de tipo Router
const movieCtrl=require('../controllers/movie.controller'); // Importamos el modelo Movie


router.get('/',movieCtrl.getMovies); // Ruta para obtener todas las peliculas
router.get('/movie/:id',movieCtrl.getMovie);
router.post('/',movieCtrl.addMovie); // Ruta para agregar una pelicula
router.put('/:id',movieCtrl.updateMovie); // Ruta para editar una pelicula
router.delete('/:id',movieCtrl.deleteMovie); // Ruta para eliminar una pelicula

router.get('/genres',movieCtrl.getGenres); // Ruta para obtener todos los generos


module.exports=router; // Exportamos el objeto router

