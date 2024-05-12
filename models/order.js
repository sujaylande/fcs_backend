import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['waiting', 'ready', 'delivered'],
    default: 'waiting',
  },
});

export const Order = mongoose.model('Order', orderSchema);
