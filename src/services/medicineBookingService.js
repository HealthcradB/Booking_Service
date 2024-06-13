import medicineBookingRepository from "../repository/medicineBookingRepository.js";

class MedicineBookingService {
  async createBooking(bookingData) {
    return await medicineBookingRepository.create(bookingData);
  }

  async getBookings() {
    return await medicineBookingRepository.findAll();
  }

  async getBookingById(id) {
    return await medicineBookingRepository.findById(id);
  }

  async updateBooking(id, updateData) {
    return await medicineBookingRepository.update(id, updateData);
  }

  async deleteBooking(id) {
    return await medicineBookingRepository.delete(id);
  }
}

// Export an instance of MedicineBookingService
export default new MedicineBookingService();
