import medicineBookingService from "../services/medicineBookingService.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await medicineBookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await medicineBookingService.getBookings();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await medicineBookingService.getBookingById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await medicineBookingService.updateBooking(req.params.id, req.body);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await medicineBookingService.deleteBooking(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
