import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookingSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    pharmacyId: {
      type: String,
      required: true
    },
    medicineId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending'
    },
    bookingDate: {
      type: Date,
      default: Date.now
    },
    deliveryDate: {
      type: Date,
      required: false
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

const Booking = model('Booking', bookingSchema);

export default Booking;
