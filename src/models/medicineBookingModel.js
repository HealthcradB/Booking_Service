import mongoose from "mongoose";

const { Schema, model } = mongoose;

const medicineBookingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  details: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    required: true,
    default: Date.now
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending'
  },
  bookedStatus: {
    type: String,
    enum: ['Booked', 'Cancelled', 'Completed'],
    default: 'Booked'
  }
});

export default model('MedicineBooking', medicineBookingSchema);
