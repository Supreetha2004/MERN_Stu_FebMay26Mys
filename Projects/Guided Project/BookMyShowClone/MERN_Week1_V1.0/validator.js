//Callback based validation functions
function validateMovieSelection(movies,movieId,Callback) {
     const selectedMovie = movies.find((movie)=>movie.id === movieId);
     if(!selectedMovie) {
        return Callback("Invalid movies selection.choose a valid movie ID.",null);
     }
     Callback(null,selectedMovie);
}

function validateTimeSelection(movies,selectedTime,Callback) {
     const selectedShowTime = movie.showtimes.find((show)=>show.time.toLowerCase()=== selectedShowTime.toLowerCase());
     if(!selectedShowTime) {
        return Callback("Invalid movies selection.choose a valid time slot.",null);
     }
     Callback(null,selectedShowTime);
}

function validateSeatCount(seatCount,Callback) {

     if(!isNaN(seatCount) || seatCount <= 0) {
        return Callback("Invalid movies selection.Enter a valid seat count.",null);
     }
     Callback(null,seatCount);
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};