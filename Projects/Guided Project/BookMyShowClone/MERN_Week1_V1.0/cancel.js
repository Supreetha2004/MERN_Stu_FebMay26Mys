//cancel.js
//To cancel the existing booking if exists
const bookingEmitter = require("./events");
const {getCurrentBooking,clearCurrentBooking} = require("./booking");
function cancelBooking(movies){
    const booking = getCurrentBooking();

    if(!booking) {
        bookingEmitter.emit("bookingfailed","No booking found  to cancel.");
        return null;
    }
     const movie = movies.find((m)=>m.id === booking. movieId);
     if(!movie) {
        bookingEmitter.emit("bookingFailed","Movie data not found while canceling booking.");
        return null;
     }
     const showTime = movie.showtimes.find((show)=>show.time.toLowerCase()=== booking.time.toLowerCase());
     if(!showTime) {
        bookingEmitter.emit("bookingfailed","showtime data not found");
        return null;
     }
     //restore seats
     showTime.seatAvailable +=booking.seatCount;
     //clear currentbooking
     clearCurrentBooking();
     bookingEmitter.emit("bookingCancelled",booking);
     return booking;
}
module.exports = {
    cancelBooking
};