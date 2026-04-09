//Handles request related to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
//get backto the home page and send req to home page
router.get("/",getHome);
//send the req to getAllMovies
router.get("/movies",getAllMovies);
//send the req to movies by the id
router.get("/movies/:id",getMovieById);
//send the req to create movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
//send the req to update the movie
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
//send the req to delete the movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);
module.exports=router;

