import Booking from "../models/booking.js";

class BookingRepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            console.log("create booking repository layer error", error);
        }
    }
    async update(bookingId,data){  
      try {
            const booking = await Booking.findById(bookingId);
        if(data.status){
            booking.status = data.status
        }
        await booking.save();
        return booking;
        } catch (error) {
            console.log("Booking update repository layer error", error)
        }
    }
}

export default BookingRepository;