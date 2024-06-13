import MedicineBooking from "../models/medicineBookingModel.js";

class MedicineBookingRepository {
  async create(bookingData) {
    const booking = new MedicineBooking(bookingData);
    return await booking.save();
  }

  async findAll() {
    return await MedicineBooking.find();
  }

  async findById(id) {
    return await MedicineBooking.findById(id);
  }

  async update(id, updateData) {
    return await MedicineBooking.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await MedicineBooking.findByIdAndDelete(id);
  }
}

// Export an instance of MedicineBookingRepository
export default new MedicineBookingRepository();
